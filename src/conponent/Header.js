import '../style/Header.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Header() {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    function toggleMenu() {
        
        setIsOpenMenu(!isOpenMenu);
        console.log(isOpenMenu);
    }

    function toggleSearch() {
        
        setIsOpenSearch(!isOpenSearch);
        console.log(isOpenSearch);
    }

    return (
        <>
            <header className="header">
                <div id="storeLogo">
                    <Link to={`/`}>
                        <img  src="./store.png" alt="storeLogo" width="100px" height="100px" decoding="async" />
                    </Link> 
                </div>
                <div id="cartLogo">
                    <Link to={`/OnCart`}>
                        <img  src="./cart.svg" alt="cartLogo" width="100px" height="100px" decoding="async" />
                    </Link> 
                </div>
            </header>    
        </>
    );

}