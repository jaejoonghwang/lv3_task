import React, { useState } from 'react'
import Input from '../components/input/input';

function FeatureInput() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const nameInput = (event) => {
        setName(event.target.value);
    };

    const priceInput = (event) => {
        const { value } = event.target;
        const formattedValue = formatInput(value);
        setPrice(formattedValue);
      };
    
      const formatInput = (value) => {
        // 입력값에서 모든 콤마를 제거한 후 숫자만 남깁니다.
        const fixedValue = value.replace(/,/g, '');
    
        // 입력값이 빈 문자열이거나 NaN이면 그대로 반환합니다.
        if (fixedValue === '' || isNaN(fixedValue)) {
          return 0;
        }
    
        // 입력값을 숫자로 변환한 후 천 단위로 콤마를 찍어줍니다.
        const commaValue = Number(fixedValue).toLocaleString();
    
        // 콤마가 추가된 포맷팅된 숫자를 반환합니다.
        return commaValue;
      };

    const inputButton = () => {
        if (name === '' && price === 0) {
            alert('이름과 가격을 모두 입력해주세요.')
        } else {

            alert(`{name: ${name}, price : ${price.replace(/,/g, '')}}`);
        };
    };

    return (
        <div>
            <Input
                name={name}
                price={price}
                nameInput={nameInput}
                priceInput={priceInput}
                inputButton={inputButton}
            />
        </div>
    )
}

export default FeatureInput