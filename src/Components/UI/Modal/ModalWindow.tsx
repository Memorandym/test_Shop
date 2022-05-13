import React, {useEffect, useState} from 'react';
import cl from './Modal.module.css'
import ModalItem from "../ModalItem/ModalItem";

interface Phone {
    [key: string]: string | boolean
}

const ModalWindow:React.FC<{allPhone:Phone[],show():void,change(phone:Phone):void}> = ({allPhone,show,change}) => {
    const [find,setFind]=useState<string>('')
    const [filtered,setFiltered]=useState<Phone[]>(allPhone)

    useEffect(()=>{
         setFiltered(allPhone.filter(el=>String(el.Name).toLowerCase().includes(find.toLowerCase())))
    },[allPhone, find])

    return (
        <div className={cl.MW_body}
             onMouseLeave={() => show()}>
            {allPhone.length > 3
                ? <div className={cl.MW_find}>
                    <input
                        type="text"
                        onChange={(e) => setFind(e.target.value)}
                        placeholder="Поиск"
                        className={cl.MW_input}/>
                </div>
                : ''}
            <div
                className={cl.MW_scroll}
                style={allPhone.length <= 3
                    ? {overflowY: "hidden"}
                    : {overflowY: "visible"}}>
                {filtered.map(el =>
                    <ModalItem
                        key={Number(el.id)}
                        el={el}
                        change={change}
                    />
                )}
            </div>
        </div>
    );
};

export default ModalWindow;