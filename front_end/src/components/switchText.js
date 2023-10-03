import React, { useState } from 'react';

const SwitchText = (props) => {
    const [underline, setUnderline] = useState(props.changeForm );
    return (
        <>
            <div className='flex justify-center space-x-11 md:space-x-40'>
                <span className={`font-bold${underline ? ' -translate-y-0.5 border-b-2 border-b-accent-2' : ''}`} onClick={() => { underline === false && setUnderline(true)}}>
                    {props.textRight}
                </span>
                <span className={`font-bold${underline ? '' : ' -translate-y-0.5 border-b-2 border-accent-2'}`} onClick={() => { underline === true && setUnderline(false) }}>
                    {props.textLeft}
                </span>
            </div>
        </>
    )
}

export default SwitchText