import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

const GridContent = (props) => {
  const {
    differentScreenCols,
    rowSpace = 0,
    colSpace = 0,
    className = "",
    children,
  } = props;

  const finalCols = differentScreenCols.map((item) => {
    if (!item) {
      if (index <= 4) {
        return "1";
      }
      return "";
    }
    return parseInt(item.toString()).toString();
  });

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles[`gt2000-${finalCols[0]}`]]: true,
        [styles[`eq1700_2000-${finalCols[1]}`]]: true,
        [styles[`eq1400_1700-${finalCols[2]}`]]: true,
        [styles[`eq1200_1400-${finalCols[3]}`]]: true,
        [styles[`eq500_1200-${finalCols[4]}`]]: true,
        [styles[`lt500-${finalCols[5]}`]]: !!finalCols[5],
      })}
    >
      <div
        className={`${styles.content} ${className}`}
        style={{
          width: `calc(100% + ${colSpace}px)`,
          marginLeft: `${-(colSpace / 2)}px`,
          marginRight: `${-(colSpace / 2)}px`,
          overflowY: "scroll",
          // height: "calc(100vh - 8rem)",
        }}
      >
        {Object.prototype.toString.call(children) === "[object Array]"
          ? children.map((Item) => {
              return React.cloneElement(Item, { rowSpace, colSpace });
            })
          : children
          ? children
          : null}
      </div>
    </div>
  );
};

const GridBox = (props) => {
  const { key, className, rowSpace = 0, colSpace = 0, children } = props;
  return (
    <div
      key={key}
      style={{
        boxSizing: "border-box",
        width: "100%",
        padding: `${rowSpace / 2}px ${colSpace / 2}px`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

GridContent.GridBox = GridBox;

export default GridContent;
