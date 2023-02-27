import {NavLink} from 'react-router-dom';
import Logo from './img/main_logo.jpg';
export default function Header(){
    return(
        <header>
            <div className='top'>
                <div className='logo'>
                    <NavLink to="/">
                        <img src={Logo} alt='탄천연구포럼' />
                    </NavLink>
                </div>
            </div>
            <nav className='gnb'>
                <ul>
                    <li>{/* active 클래스명이 생김 */}
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">Counter</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/input">Input</NavLink>
                    </li>
                    <li>
                        <NavLink to="/list">List</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
    
}