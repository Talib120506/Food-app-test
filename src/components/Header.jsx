import logo from '../assets/logo.jpg';
function Header() {
    return (
        <div className="header">
           <div className="logo">
            <img src={logo} alt="" />
           </div>
           <div className="nav-menu">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
           </div>
        </div>
    )
}

export default Header;