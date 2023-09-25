import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/argentBankLogo.png';

function Header() {
    return (
        <header>
            <nav class="main-nav">
                <NavLink class="main-nav-logo" to={'/'}>
                    <img class="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 class="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink class="main-nav-item" to={'/SignIn'}>
                        <i class="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;