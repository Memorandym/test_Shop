import React, {useState} from 'react';
import '../Style/IP.css'
import ModalWindow from "./ModalWindow";

interface Phone {
    [key: string]: string | boolean
}

const ImgProduct:React.FC<{el:Phone}> = ({el}) => {
    const [visible,setVisible]=useState<Boolean>(false)

    const getAll = ()=>{
        setVisible(true)
    }

    return (
        <div className="IP_Body">

            {visible
                ?
                <div onMouseOut={() => {
                    setVisible(false)
                }}>
                    <ModalWindow/>
                </div>
                : ""
            }


            <div className="IP_up">
                <img
                    src={String(el.img)}
                    alt="Phone"
                    className="IP_Img"
                />

                <img
                    src="./UI/Ico/ImgProduct/chevron_small.svg"
                    className="IP_getall"
                    style={{cursor: "pointer"}}
                    onClick={() => getAll()}
                />
            </div>

            <div>
                <span className="IP_Title">{el.Name}</span>
            </div>

        </div>
    );
};

export default ImgProduct;