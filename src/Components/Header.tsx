import React from 'react';
import '../Style/Header.css'

const Header: React.FC = () => {
    return (
        <nav className="h_body">

            <ul className="h_title">
                <li className="h_title_m">Каталог</li>
            </ul>

            <ul className="h_sub_title">
                <li className="h_sub_s">СРАВНЕНИЕ</li>
                <li className="h_sub_lk">Личный кабинет <img
                    src="./UI/Ico/Header/profile.svg"
                    height="20px"
                    width="20px"
                    style={{marginLeft:"1rem"}}
                /> </li>
            </ul>

        </nav>
    );
};

export default Header;