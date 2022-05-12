import React, {useEffect, useState} from 'react';
import '../Style/Modal.css'
import ModalItem from "./ModalItem";

const ModalWindow:React.FC = () => {
    const [find,setFind]=useState<string>('')

    useEffect(()=>{
        console.log(find)
    },[find])

    const a = [1,2,3,4,5,6,7]

    return (
        <div className="MW_body">
            <div className="MW_find" >
                <input
                    type="text"
                    onChange={(e)=>setFind(e.target.value)}
                    placeholder="Поиск"
                    className="MW_input"/>
            </div>

            <div
                className="MW_scroll"
                style={a.length <= 3 ? {overflowY: "hidden"} : {overflowY: "visible"}}
            >
                {a.map(el =>
                    <ModalItem/>
                )}
            </div>


        </div>
    );
};

export default ModalWindow;