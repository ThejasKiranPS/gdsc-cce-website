import styled, { ThemeConsumer, ThemeContext } from "styled-components";
import { useContext } from "react";

const CButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 45px;

  border: ${props => props.border} solid 1px;
  border-radius: 5px;

  margin: 10px;

  cursor: pointer;
  text-decoration: none;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  :hover {
    background-color: ${(props) => props.hovercolor};
    border-color: ${(props) => props.hovercolor};
    color: ${(props) => props.hovertextcolor};
    ${(props) => {return props.active=="true" ? "transform: scale(1.05);" : null}};
  }
`;

function Button(props) {
  const theme = useContext(ThemeContext);
  const active = "active" in props;
  const mytheme = {
    bg: active ? props.hovercolor : theme.bg,
    color: active ? props.hovertextcolor || "white" : theme.text,
    border: active ? props.hovercolor : theme.text,
  };

  return (
    <CButton 
     to={props.to}
     bg={mytheme.bg}
     color={mytheme.color}
     border={mytheme.border}
     hovercolor={props.hovercolor}
     hovertextcolor={props.hovertextcolor || "white"}
     active={active ? "true": "false"}
     >
      {props.children}
    </CButton>
  );
}

export default Button;