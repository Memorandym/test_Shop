import React, {useState} from 'react';
import '../Style/Limit.css'


const Limit:React.FC<{onClick(limits:number):void,limits:number,count:number}> = ({onClick,limits,count}) => {
    const [lim, setLim] = useState<number>(limits)
    const mas: Array<number> = Array(count > 6 ? 5 : count - 1).fill(0).map((e, i) => i + 2)
    const change = (value: number) => {
        setLim(value);
        onClick(value);
    }
    return (
        <div className="L_body">
            <span className="L_text">Отобразить товары: </span>
            <div className="L_number">
                {mas.map(el => <span
                    className="L_S"
                    key={el}
                    onClick={() => change(el)}
                    style={el == lim
                        ? {textDecoration: "underline", cursor: "pointer"}
                        : {textDecoration: "none", cursor: "pointer"}}
                >{el}</span>)}
            </div>
        </div>
    );
};

export default Limit;