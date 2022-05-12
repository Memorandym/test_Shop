import React from 'react';
import '../Style/StatsItem.css'

interface Phone {
    [key: string]: string | boolean
}


const StatsItem:React.FC<{showData:Phone[],translate:String,keyStats:String}> = ({showData,translate,keyStats}) => {
    return (
        <div className="SI_body">


            <div className="SI_title"><span>{translate}</span></div>

            {showData.map((el) =>
                typeof(el[`${keyStats}`]) == 'string'
                    ? <div className="SI_info_item"><span>{el[`${keyStats}`]}</span></div>
                    : <div className="SI_info_item">
                        <img src={el[`${keyStats}`]
                            ? String("./UI/Ico/StatsItem/true.svg")
                            : String("./UI/Ico/StatsItem/false.svg")} alt=""/>
                    </div>
            )}


        </div>
    );
};

export default StatsItem;