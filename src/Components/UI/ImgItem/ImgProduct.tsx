import React, {useState} from 'react';
import cl from './IP.module.css'
import ModalWindow from "../Modal/ModalWindow";
import getData from "../../../BackImit/Data";
import {useAppSelector,useAppDispatch} from "../../../Store/hook";
import {changePhone} from "../../../Store/dataSlice";
import logo from '../Ico/ImgProduct/chevron_small.svg'

interface Phone {
    [key: string]: string | boolean
}

const ImgProduct:React.FC<{el:Phone,count:boolean}> = ({el,count}) => {
    const allData= useAppSelector(state => state.data.list)
    const dispatch = useAppDispatch()
    const [visible,setVisible]=useState<Boolean>(false)
    const [allPhone,setAllPhone]=useState<Phone[]>([])

    const getAll = () => {
        setVisible(true)
        setAllPhone(getData.getModelPhone().filter(f => allData.findIndex(el => el.id === f.id) === -1))
    }

    const show = () => {
        setVisible(false)
    }

    const change = (phone: Phone) => {
        dispatch(changePhone({old: el.id, new: phone}))
        setVisible(false)
    }

    return (
        <div className={cl.IP_Body}>
            {visible
                ? <ModalWindow
                    allPhone={allPhone}
                    show={show}
                    change={change}/>
                : ""
            }
            <div className={cl.IP_up}>
                <img
                    src={String(el.img)}
                    alt="Phone"
                    className={cl.IP_Img}
                />
                {count
                    ?
                    <img
                        src={logo}
                        className={cl.IP_getall}
                        style={{cursor: "pointer"}}
                        onClick={() => getAll()}
                        alt={"pick"}
                    />
                    : ''
                }
            </div>
            <div>
                <span className={cl.IP_Title}>{el.Name}</span>
            </div>
        </div>
    );
};

export default ImgProduct;