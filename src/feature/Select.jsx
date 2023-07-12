import React, { useState } from 'react'
import { styled } from 'styled-components';

function FeatureSelect() {

    const [selectedOption, setSelectedOption] = useState('리액트')
    const [selectedOption2, setSelectedOption2] = useState('리액트')

    const option = [
        {value: 1, name: '리액트'},
        {value: 2, name: '자바'},
        {value: 3, name: '스프링'},
        {value: 4, name: '리액트네이티브'}
    ];

    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);

    const ClickSelect = () => {
        setOption1(!option1);
    };

    const ClickSelect2 = () => {
        setOption2(!option2);
    };

    return (
        <div>
            <SelectBox>
                <h4>Select</h4>
                <Box>
                    <div>
                        <Select onClick={ClickSelect}>{selectedOption}</Select>
                        {(option1 === true) && <SelectedOption1
                                                    option={option}
                                                    setOption1={setOption1}
                                                    setSelectedOption={setSelectedOption}
                                                />}
                    </div>
                    <div>
                        <Select onClick={ClickSelect2}>{selectedOption2}</Select>
                        {(option2 === true) && <SelectedOption2
                                                    option={option}
                                                    setOption2={setOption2}
                                                    setSelectedOption2={setSelectedOption2}
                                                />}
                    </div>
                </Box>
            </SelectBox>
        </div>
    )
}

const SelectedOption1 = ({ option, setOption1, setSelectedOption }) => {

    return (
        <OverSelectOptionBox>
            {option.map((item) => {
                return (                    
                    <SelectOption
                        key={item.value}
                        onClick={() => {
                            setOption1(false);
                            setSelectedOption(item.name);
                        }}
                    >{item.name}</SelectOption>                    
                )
            })}
        </OverSelectOptionBox>
    )
}

const SelectedOption2 = ({ option, setOption2, setSelectedOption2 }) => {

    return (
        <SelectOptionBox>
            {option.map((item) => {
                return (                    
                    <SelectOption
                        key={item.value}
                        onClick={() => {
                            setOption2(false);
                            setSelectedOption2(item.name);
                        }}
                    >{item.name}</SelectOption>                   
                )
            })}
        </SelectOptionBox>
    )
}

const SelectBox = styled.div`
    border: 3px solid #ddd;
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin-top: 50px;
`;

const Box = styled.div`
    display: flex;
`

const Select = styled.div`
    width: 300px;
    height: 40px;
    border: 1px solid;
    border-radius: 8px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    
`;

const OverSelectOptionBox = styled.div`
    z-index: 30;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    background-color: white;
    width: 310px;
    height: auto;
    position: absolute;
`;

const SelectOptionBox = styled.div`
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    background-color: white;
    width: 310px;
    height: auto;
`;

const SelectOption = styled.div`
    font-size: 12px;
    width: 300px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    height: 40px;

    &:hover {
        background-color: #eee;
    }

    &:first-child {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    &:last-child {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
`;

export default FeatureSelect