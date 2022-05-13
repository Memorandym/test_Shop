import React from 'react';
import cl from './StatsItem.module.css'

interface Phone {
    [key: string]: string | boolean
}


const StatsItem:React.FC<{showData:Phone[],translate:String,keyStats:String}> = ({showData,translate,keyStats}) => {
    const curFormat = (value: any) => {
        if (keyStats === "Price") {
            return new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 0
            }).format(value)
        }
        if (keyStats === "Frequency") {
            return value + " Гц"
        }
        return value
    }
    return (
        <div className={cl.SI_body}>
            <div className={cl.SI_title}><span>{translate}</span></div>
            {showData.map((el) =>
                typeof (el[`${keyStats}`]) == 'string'
                    ?
                    <div className={cl.SI_info_item} key={Number(el.id)}>
                        <span>{String(curFormat(el[`${keyStats}`]))}</span>
                    </div>
                    :
                    <div className={cl.SI_info_item} key={Number(el.id)}>
                        <img src={el[`${keyStats}`]
                            ? String("./UI/Ico/StatsItem/true.svg")
                            : String("./UI/Ico/StatsItem/false.svg")} alt=""/>
                    </div>
            )}
        </div>
    );
};

export default StatsItem;