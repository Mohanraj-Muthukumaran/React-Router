import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
    return (
        <nav className='navbar'>
            <NavLink 
                to='/' 
                className={ ({isActive}) => 
                (isActive? 'active': 'link') }
            >
                Home
            </NavLink>
            <NavLink 
                to='/about'
                className={ ({isActive}) => 
                (isActive? 'active': 'link') }
            >
                About
            </NavLink>
            <NavLink 
                to='/products'
                className={ ({isActive}) => 
                (isActive? 'active': 'link') }
            >
                Products
            </NavLink>
        </nav>
    );
}

export default StyledNavbar;