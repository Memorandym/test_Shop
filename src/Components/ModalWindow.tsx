import React from 'react';
import '../Style/Modal.css'

const ModalWindow:React.FC = () => {
    return (
        <div className="MW_body">
            <div className="MW_find" >
                <input type="text" placeholder="Поиск" className="MW_input"/>
            </div>

        </div>
    );
};

export default ModalWindow;