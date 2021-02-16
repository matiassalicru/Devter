import css from "styled-jsx/css";

import { colors, fonts, breakpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: orange;
  }
`;

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: 100%;
      max-width: ${breakpoints.mobile};
    }
  }
`;
