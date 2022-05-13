import React from 'react';
import '../Style/Header.css'

const Header: React.FC = () => {
    return (
        <nav className="H_body">

            <ul className="H_title">
                <li className="H_title_m">Каталог</li>
            </ul>

            <ul className="H_sub_title">
                <li className="H_sub_s">СРАВНЕНИЕ</li>
                <li className="H_sub_lk">Личный кабинет <img
                    src="./UI/Ico/Header/profile.svg"
                    height="20px"
                    width="20px"
                    style={{marginLeft: "1rem"}}
                /></li>
            </ul>

        </nav>
    );
};

export default Header;