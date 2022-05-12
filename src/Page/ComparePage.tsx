import React, {useEffect, useState} from 'react';
import '../Style/CP.css'
import Preview from "../Components/Preview";
import Limit from "../Components/Limit";
import getData from "../BackImit/Data";
import Stats from "../Components/Stats"

interface Phone {
    [key: string]: string | boolean
}

interface Translate {
    [key: string]: string
}

const ComparePage:React.FC = () => {
    const [limits,setLimits] = useState<number>(3);
    const [translate,setTranslate] = useState<Translate>({})
    const [showData,setShowData]=useState<Phone[]>([{}]) //То количство отностительно limit

    const limCallback = (limits:number)=>{
        setLimits(limits)
    }

    useEffect(()=>{
         if(localStorage.getItem('test_shop') != null){
            setShowData(getData.getPhoneId(limits,String(localStorage.getItem('test_shop')).split(',')))
        }else{
            setShowData(getData.getPhoneId(limits,[]))
        }
    },[])

    useEffect(()=>{
        setTranslate(getData.getTranslate())
    },[])

    useEffect(()=>{
        let mc:string[] = []
        showData.map(el=>{mc.push(String(el.id))})
        localStorage.setItem('test_shop',String(mc))
    },[showData])

    useEffect(()=>{
        if(localStorage.getItem('test_shop') != null){
            setShowData(getData.getPhoneId(limits,String(localStorage.getItem('test_shop')).split(',')))
        }else{
            setShowData(getData.getPhoneId(limits,[]))
        }
        
    },[limits])

    return (
        <div>
            <div className="CP_body">
                <div className="CP_head">
                    <h2 className="CP_title">Смартфоны</h2>
                    <Limit
                        onClick={limCallback}
                        limits={limits}
                    />
                </div>

                <Preview
                    showData={showData}
                />
            </div>
                <Stats
                    showData={showData}
                    translate={translate}
                />
        </div>
    );
};

export default ComparePage;