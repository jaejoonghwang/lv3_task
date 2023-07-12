import React from 'react'
import { styled } from 'styled-components';
import Button from '../button/button';

const Modals1 = ({ setModal1 }) => {
    return (
        <BlackBackgoround>
            <ModalBox1>
                <h4>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</h4>
                <br />
                <Button.Negative size={'small'} onClick={() => { setModal1(false) }}>닫기</Button.Negative>
                <Button.Primary size={'small'}>확인</Button.Primary>
            </ModalBox1>
        </BlackBackgoround>
    );
};

const Modals2 = ({ setModal2 }) => {

    const handleDivClick = (event) => {
        event.stopPropagation();
        // 이벤트 핸들러 로직
    };

    return (
        <div>
            <BlackBackgoround onClick={() => { setModal2(0) }}>
                <ModalBox1 onClick={handleDivClick}>
                    <RightBtn onClick={() => { setModal2(0) }}>x</RightBtn>
                    <h4>닫기 버튼 1개가 있고,
                        외부 영역을 누르면 모달이 닫혀요.</h4>
                    <br />
                </ModalBox1>
            </BlackBackgoround>
        </div>
    );
};

const ModalBox1 = styled.div`
    width: 400px;
    height: 200px;
    padding: 20px;
    background: white;
    text-align: left;
    border-radius: 8px;
  `;

const BlackBackgoround = styled.div`
    margin: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

const RightBtn = styled.button`
    border: 1px solid #ddd;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
    &:hover {
      border: 1px solid #333;
    }
  `;

export { Modals1, Modals2 }