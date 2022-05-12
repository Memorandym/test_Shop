import React from 'react';
import '../Style/ModalItem.css'

const ModalItem:React.FC = () => {
    return (
        <div className="MI_body">
            <img src="./UI/Ico/ModalWindow/switch.svg" alt="" width="20px" height="20px"/>
            <img
                src="https://c.dns-shop.ru/thumb/st4/fit/500/500/4689f33294b13ea3bc660952d2654162/499fa2e2bc067ddb5c95c057bebcfb4ef2efbe9bbece25a237c8710221fdd92e.jpg.webp"
                alt=""
                className="MI_preview"/>
            <span className="MI_title">Apple</span>
        </div>
    );
};

export default ModalItem;