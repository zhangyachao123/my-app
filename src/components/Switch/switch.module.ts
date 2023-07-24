import styled from "styled-components";
const style = styled.div`
  width: 100%;
  height: 100%;
  .container {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    $transition: all 0.4s;

    .box {
      position: absolute;
      background-color: #355dff;
      overflow: hidden;
      transition: $transition;
    }

    .icon {
      position: absolute;
      transition: $transition;
    }
  }
`;
export default style;
