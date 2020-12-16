import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960)
        {
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    
    useEffect(()=>
    {
        showButton()
    },[])
    window.addEventListener('resize', showButton);
    
    return (
        <>

            <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo'onClick={closeMobileMenu} >
            XENSTACK <i className='fab fa-typo3 ' ></i>
            </Link>
            {/* <Link to='/' className='navbar-logo'onClick={closeMobileMenu} >
             <img src='images/Xen_logo.png' height="100px" width="150px"></img>
            </Link> */}
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/project' className='nav-links' onClick={closeMobileMenu} >
                        Project
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/solution' className='nav-links' onClick={closeMobileMenu} >
                        Solution
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/blog' className='nav-links' onClick={closeMobileMenu} >
                        Blog
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/resources' className='nav-links' onClick={closeMobileMenu} >
                        Resources
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/training' className='nav-links' onClick={closeMobileMenu} >
                        Training
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/careers' className='nav-links' onClick={closeMobileMenu} >
                        Careers
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu} >
                        About Us
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
            </div>
            </nav>
        </>
    );
}

export default Navbar
