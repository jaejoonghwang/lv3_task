import React from 'react'
import { css, styled } from 'styled-components';

const PrimitiveButton = ({ children, rightSlot, ...restProps }) => {
    return (
      <StyledButton {...restProps}>
        {rightSlot ? (
          <ButtonInner>
            <>{children}</>
            <>{rightSlot}</>
          </ButtonInner>
        ) : (
          <>{children}</>
        )}
      </StyledButton>
    );
  };

const PrimaryButton = (props) => {
    return (
        <PrimitiveButton
            {...props}
            bc="#55efc4"
            color="#000000"
            activeBc="#00b894"
        />
    );
};

const NegativeButton = (props) => {
    return (
        <PrimitiveButton
            {...props}
            bc="#ffd883"
            color="#e65137"
            activeBc="#e66b46"
        />
    );
};

const Primary = PrimaryButton;
const Negative = NegativeButton;

const Button = { Negative, Primary };
export default Button;

const StyledButton = styled.button`
    border: none;
  cursor: pointer;

  border-radius: 8px;
  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  font-weight: bolder;
  margin: 10px 5px;

  &:active {
    background-color: ${({ activeBc }) => activeBc};
  }

  ${({ size }) => {
        switch (size) {
            case "large":
                return css`
                height: 50px;
                width: 200px;
                background-color: white;
                border: 3px solid ${({ bc }) => bc};
            `;
            case "medium":
                return css`
                height: 45px;
                width: 130px;
        `;
            case "small":
                return css`
                height: 40px;
                width: 100px;
            `;
            default:
                return css`
                height: 40px;
                width: 100px;
            `;
        }
    }}
`;

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;