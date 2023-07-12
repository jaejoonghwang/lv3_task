import React from 'react'
import Button from '../components/button/button';
import { Modals1, Modals2 } from '../components/modal/modal';
import { useState } from 'react';

function FeatureModal() {

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(0);

    const leftModalBtn = () => {
        setModal1(true);
    };

    const rightModalBtn = () => {
        setModal2(1);
    };

    return (
        <div>
            {(modal1 === true) && <Modals1 setModal1={setModal1} />}
            {(modal2 === 1) && <Modals2 setModal2={setModal2} />}
            <div>
                <h4>Modal</h4>
                <Button.Primary size={'medium'} onClick={leftModalBtn}>open modal</Button.Primary>
                <Button.Negative size={'large'} onClick={rightModalBtn}>open modal</Button.Negative>
            </div>
        </div>
    )
}

export default FeatureModal