import React, {useEffect, useState} from 'react';
import '../Style/ComparePage.css'
import Preview from "../Components/Preview";
import Limit from "../Components/Limit";
import getData from "../BackImit/Data";
import Stats from "../Components/Stats"
import {useAppDispatch, useAppSelector} from "../Store/hook";
import {addPhone,clearPhone} from "../Store/dataSlice";
interface Phone {
    [key: string]: string | boolean
}
interface Translate {
    [key: string]: string
}
const ComparePage:React.FC = () => {
    const [limits, setLimits] = useState<number>(localStorage.getItem('test_shop') === undefined
        ? 3
        : (String(localStorage.getItem('test_shop')).split(',').length > 6
            ? 6
            : String(localStorage.getItem('test_shop')).split(',').length))
    const [translate, setTranslate] = useState<Translate>({})
    const [isDiff, setIsDiff] = useState<boolean>(false)
    const [count] = useState<number>(getData.getCountPhone())

    const showData = useAppSelector(state => state.data.list)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setTranslate(getData.getTranslate())
    }, [])

    useEffect(() => {
        if (showData.length !== 0) {
            let mc: string[] = []

            showData.forEach(el => {
                 mc.push(String(el.id))
            })
            localStorage.setItem('test_shop', String(mc))
        }
    }, [showData])

    useEffect(() => {
        dispatch(clearPhone([]))
        if (localStorage.getItem('test_shop') != null) {
            let masPhone: Phone[] = getData.getPhoneId(limits, String(localStorage.getItem('test_shop')).split(','));
            masPhone.forEach(el => {
                dispatch(addPhone(el))
            });
        } else {
            let masPhone: Phone[] = getData.getPhoneId(limits, [])
            masPhone.forEach(el => {
                dispatch(addPhone(el))
            })
        }
    }, [dispatch, limits])

    const limCallback = (limits:number)=>{
        setLimits(limits)
    }

    const showDiff = (state:boolean)=>{
        setIsDiff(state)
    }

    return (
        <div>
            <div className="CP_body">
                <div className="CP_head">
                    <h2 className="CP_title">Смартфоны</h2>
                    <Limit
                        onClick={limCallback}
                        limits={limits}
                        count={count}
                    />
                </div>

                <Preview
                    showData={showData}
                    showDiff={showDiff}
                    count={count}
                />
            </div>
            <Stats
                showData={showData}
                translate={translate}
                isDiff={isDiff}
            />
        </div>
    );
};

export default ComparePage;