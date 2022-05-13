import React, {useEffect, useState} from 'react';
import '../Style/Preview.css'
import ImgProduct from "./UI/ImgItem/ImgProduct";

interface Phone {
    [key: string]: string | boolean
}

const Preview:React.FC<{showData:Phone[],showDiff(state:boolean):void,count:number}> = ({showData,showDiff,count}) => {
    const [countVal,setCountVal]=useState<number>(count)

    useEffect(()=>{
       setCountVal(count)
    },[count])

    return (
        <div className="P_body">
            <div className="P_text_f">
                <span>
                    <input type="checkbox"
                        onChange={(e)=>showDiff(e.target.checked)}
                    />
                    Показать различия
                </span>
            </div>
            {showData.map((el)=>
                <ImgProduct
                    el={el}
                    count={countVal>showData.length}
                    key={Number(el.id)}
                />
            )}
        </div>
    );
};

export default Preview;