import styled from "styled-components";
const style = styled.div`
  width: 100%;
  height: 100%;
  .container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    position: relative;

    .startBtn,
    .continueBtn,
    .restartBtn {
      min-width: 200px;
      height: 60px;
      padding: 0 10px;
      background-color: black;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      outline: none;
      border: none;
      border-radius: 20px;
      color: white;
      font-size: 25px;
      cursor: pointer;
      transition: all 0.2s linear;
    }

    .startBtn {
      background-color: white;
      color: black;
    }

    .continueBtn,
    .restartBtn {
      margin-top: 50px;
    }

    .gamepause,
    .gameover {
      padding: 50px;
      width: 500px;
      height: 300px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      text-align: center;
      border-radius: 20px;
      h1 {
        color: black;
      }
    }

    .scoreBox {
      font-size: 30px;
      color: white;
      position: absolute;
      top: 10px;
      left: 10px;
    }

    .pauseBtn {
      font-size: 30px;
      color: white;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
`;
export default style;
