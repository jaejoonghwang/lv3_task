import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { FcIdea } from "react-icons/fc";
import Button from '../components/button/button';

function FeatureButton() {

    const primaryButton = () => {
        alert('버튼을 만들어보세요')
    };

    const negativeButton = () => {
        const returnValue = prompt('어렵나요?');
        console.log(returnValue);
    };

    return (
        <div>
            <div>
                <h4>Button</h4>
                <Button.Primary
                    size={'large'}
                    onClick={primaryButton}
                >
                    Large Primary Button <AiOutlineRight />
                </Button.Primary>
                <Button.Primary size={'medium'}>Medium</Button.Primary>
                <Button.Primary size={'small'}>Small</Button.Primary>
                <br />
                <Button.Negative
                    size={'large'}
                    onClick={negativeButton}
                >
                    Large Negative Button <FcIdea />
                </Button.Negative>
                <Button.Negative size={'medium'}>Medium</Button.Negative>
                <Button.Negative size={'small'}>Small</Button.Negative>
            </div>
        </div>
    )
}

export default FeatureButton