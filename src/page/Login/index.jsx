import { Input, Checkbox } from "antd";
import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";
// import "./newStyle.scss";
function Login() {
  const [user, setUser] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errorText1, setErrorText1] = useState("");
  const [errorText2, setErrorText2] = useState("");
  const [log, setLog] = useState("登录");
  const navigate = useNavigate();

  const changeUserName = (e) => {
    let value = e.target.value;
    setUser(value);
  };
  const changePassWord = (e) => {
    let value = e.target.value;
    setPassWord(value);
  };
  const login = () => {
    // 用户名正则
    let regex1 = /(^1\d{10}$)|(^[0-9]\d{7}$)/;
    let regex2 =
      /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0 -9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if (user) {
      if (regex1.test(user) || regex2.test(user)) {
        setErrorText1("");
        if (passWord) {
          if (passWord == "123456") {
            setErrorText1("");
            setErrorText2("");
            setLog("登录中...");
            setTimeout(() => {
              navigate("/header");
              localStorage.setItem("theme", "light");
            }, 2000);
          } else {
            setErrorText1("账号或密码错误，请重试");
            setErrorText2("");
          }
        } else {
          setErrorText2("密码不能为空");
        }
      } else {
        setErrorText1("您的手机号或者邮箱格式有误");
      }
    } else {
      setErrorText1("手机号或邮箱不能为空");
    }
  };
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <div className="login-main">
            <div className="login-logo"></div>
            <div className="login-input">
              <div className="login-inputs">
                <Input
                  onChange={changeUserName}
                  placeholder={"请输入手机号或者邮箱"}
                ></Input>
                <div className="error-text">{errorText1}</div>
              </div>
              <div className="login-inputs">
                <div>
                  <Input
                    onChange={changePassWord}
                    placeholder="请输入密码"
                    type="password"
                  ></Input>
                </div>
                <div className="error-text">{errorText2}</div>
              </div>
              <div className="login-btn" onClick={login}>
                {log}
              </div>
              <div className="login-option">
                <div>
                  <Checkbox />
                  <span className="login-greyColor">记住密码</span>
                </div>
                <div className="login-blueColor">忘记密码?</div>
              </div>
              <div className="login-line"></div>
              <div className="login-newUser login-blueColor">注册新用户</div>
            </div>
            <div className="login-footer">
              © 20l8 Conncoial, inc.Aill rights resorved.I{" "}
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="login-box">
          <div className="login-content">
            <div className="login-title">
              Welcome to <span>Connexial</span>
            </div>
            <div className="login-line"></div>
            <div className="login-text">
              Lorem lpsum is simply dummy text of the printing andtypesetting
              industry. Lorem lpsum has been the industry'sstandard dummy text
              ever since the 1500s.
            </div>
            <div className="login-btn">Read more ...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
