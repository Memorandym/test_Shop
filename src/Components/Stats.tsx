import React from 'react';
import StatsItem from './StatsItem'
import '../Style/Stats.css'

interface Phone {
    [key: string]: string | boolean
}

interface Translate {
    [key: string]: string
}

const Stats:React.FC<{showData:Phone[],translate:Translate}> = ({showData,translate}) => {

    return (
        <div className="Stats_body">
            {Object.keys(translate).map((el)=>
                <StatsItem
                    showData={showData}
                    translate={translate[el]}
                    keyStats={el}
                    key={el}
                />
            )}

        </div>
    );
};

export default Stats;