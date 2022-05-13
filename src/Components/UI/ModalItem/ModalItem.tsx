import React from 'react';
import cl from './ModalItem.module.css'

interface Phone {
    [key: string]: string | boolean
}

const ModalItem:React.FC<{el:Phone,change(phone:Phone):void}> = ({el,change}) => {
    return (
        <div className={cl.MI_body}>
            <img
                onClick={()=>change(el)}
                src="./UI/Ico/ModalWindow/switch.svg"
                alt="svg"
                width="20px"
                height="20px"/>
            <img
                src={String(el.img)}
                alt={String(el.Name)}
                className={cl.MI_preview}/>
            <span className={cl.MI_title}>{el.Name}</span>
        </div>
    );
};

export default ModalItem;