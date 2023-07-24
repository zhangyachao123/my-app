import React, { useEffect, useRef, useState } from "react";


//引入 echarts
import * as echarts from "echarts";

const Echarts = (props) => {
  //echarts
  const { style, events, callback } = props;
  const ref = useRef();
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    if (ref.current && props.option) {
      const instance =
        echarts.getInstanceByDom(ref.current) || echarts.init(ref.current);
      instance.clear();
      instance.setOption(props.option, true);

      setInstance(instance);
      events &&
        events.forEach((ev) => {
          instance.on(ev, (params) => {
            if (callback) {
              callback(ev, params);
            }
          });
        });
      setTimeout(() => {
        instance.resize();
      }, 200);
      window.addEventListener("resize", function () {
        instance.resize();
      });
    }
  }, [ref.current, props.option]);

  useEffect(() => {
    instance && instance.resize();
  }, [props.width]);

  return (
    <div ref={ref} style={{ width: `100%`, height: "100%", ...style }}></div>
  );
};

export default Echarts;
