import React from 'react';
import StatsItem from './UI/StateItem/StatsItem'
import '../Style/Stats.css'

interface Phone {
    [key: string]: string | boolean
}

interface Translate {
    [key: string]: string
}

const Stats:React.FC<{showData:Phone[],translate:Translate,isDiff:boolean}> = ({showData,translate,isDiff}) => {

    return (
        <div className="Stats_body">
            {Object.keys(translate).map((el) =>
                !isDiff || showData.some(ell => showData[0][`${el}`] !== ell[`${el}`])
                    ? <StatsItem
                        showData={showData}
                        translate={translate[el]}
                        keyStats={el}
                        key={el}/>
                    : ""
            )}
        </div>
    );
};

export default Stats;