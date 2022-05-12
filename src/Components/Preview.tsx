import React, {useEffect, useState} from 'react';
import '../Style/Preview.css'
import ImgProduct from "./ImgProduct";

interface Phone {
    [key: string]: string | boolean
}

const Preview:React.FC<{showData:Phone[]}> = ({showData}) => {

    return (
        <div className="P_body">

            <div className="P_text">
                <span>
                    <input type="checkbox"/>
                    Показать различия
                </span>
            </div>

            {showData.map((el)=>
                <ImgProduct
                    el={el}
                />
            )}

        </div>
    );
};

export default Preview;