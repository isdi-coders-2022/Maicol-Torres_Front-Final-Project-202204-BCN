import styled from "styled-components";

const StyledNav = styled.div`
  @media (min-width: 601px) {
    span {
      visibility: none;
      display: none;
    }

    #menu__toggle ~ .menu__box {
      left: 0 !important;
    }
    .menu__btn {
      position: fixed;
      top: 20px;
      left: 20px;
      width: 26px;
      height: 26px;
    }
    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #616161;
      transition-duration: 0.25s;
    }
    .menu__btn > span::before {
      content: "";
      top: -8px;
    }
    .menu__btn > span::after {
      content: "";
      top: 8px;
    }
    .menu__box {
      display: block;
      position: fixed;
      top: 0;
      left: -100%;
      width: 300px;
      height: 100%;
      margin: 0;
      padding: 80px 0;
      list-style: none;
      background-color: #eceff1;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
      transition-duration: 0.25s;
    }
    .menu__item {
      display: block;
      padding: 12px 24px;
      color: #333;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      transition-duration: 0.25s;
    }
    .menu__item:hover {
      background-color: #cfd8dc;
    }
  }
  @media (max-width: 601px) {
    #menu__toggle {
      opacity: 0;
    }
    #menu__toggle:checked + .menu__btn > span {
      transform: rotate(45deg);
    }
    #menu__toggle:checked + .menu__btn > span::before {
      top: 0;
      transform: rotate(0deg);
    }
    #menu__toggle:checked + .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
      left: 0 !important;
    }
    .menu__btn {
      position: fixed;
      top: 20px;
      left: 20px;
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 1;
    }
    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #616161;
      transition-duration: 0.25s;
    }
    .menu__btn > span::before {
      content: "";
      top: -8px;
    }
    .menu__btn > span::after {
      content: "";
      top: 8px;
    }
    .menu__box {
      display: block;
      position: fixed;
      top: 0;
      left: -100%;
      width: 300px;
      height: 100%;
      margin: 0;
      padding: 80px 0;
      list-style: none;
      background-color: #eceff1;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
      transition-duration: 0.25s;
    }
    .menu__item {
      display: block;
      padding: 12px 24px;
      color: #333;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      transition-duration: 0.25s;
    }
    .menu__item:hover {
      background-color: #cfd8dc;
    }
  }
`;

export const StyledBorder = styled.div`
  border: 1px;
  width: 100%;
  top: 0px;
  height: 45px;
  position: fixed;
  margin-bottom: 10px;
  background-color: #f6efe8;
`;
export default StyledNav;
