import React from "react";
import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string;
  textColor: string;
  children: React.ReactNode;
}



const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 10px 10px;
  width:12.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 5px 5px 4px 4px #888888;

  &:hover {
    background-color: #1BC46E;
   
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const Button: React.FC<ButtonProps> = ({ backgroundColor, textColor, children }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} textColor={textColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
