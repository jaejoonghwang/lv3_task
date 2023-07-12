import React from 'react'
import Button from '../button/button'
import { styled } from 'styled-components';

function Input({ name, price, nameInput, priceInput, inputButton }) {
    return (
        <div>
            <div>
                <h4>Input</h4>
                <label>이름</label>
                <StyledInput
                    type='text'
                    value={name}
                    onChange={nameInput}
                ></StyledInput>
                <label>가격</label>
                <StyledInput
                    type='text'
                    value={price}
                    onChange={priceInput}
                ></StyledInput>
                <Button.Primary size={'small'}
                    onClick={inputButton}
                >저장</Button.Primary>
            </div>
        </div>
    )
}

const StyledInput = styled.input`
    border: 1px solid #333333;
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;

    &:focus-within {
    box-shadow: 0 0 0 1px #000;
    }
`;

export default Input