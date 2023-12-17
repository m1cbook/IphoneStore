import "./Header.css"
import logo from "../Header/images/logo.svg" 
const Header = () => {
    return (
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <ul className="menu">
                            <li className="menu-item">  
                                <a className="menu-item" href="/">What is new</a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item" href="/">Color</a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item" href="/">Order</a>
                            </li>
                            </ul>
                        <a className="logo" href="/">
                            <img className="logo-img" src={logo} alt="logo" />
                        </a>
                        <a className="phone" href="tel:380731841610">+38 073-184-16-10</a>
                    </nav>
                </div>
            </header>
      );
} 
export default Header