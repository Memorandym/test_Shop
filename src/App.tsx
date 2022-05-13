import React from 'react';
import Header from "./Components/Header";
import './Style/App.css'
import ComparePage from "./Page/ComparePage";

const App: React.FC = () => {
    return (
        <div className="app_body">
            <Header/>
            <ComparePage/>
        </div>
    );
}

export default App;
