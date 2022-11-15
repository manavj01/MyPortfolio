import './navbar.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import avatar from './../../images/avatar.jpg';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        /**internal linking */
        <header>
            <section>
                <Avatar alt="Manav Jain" src={avatar} />
                <a className='myself'><h1>Manav Jain</h1></a>
            </section>
            <nav>
                <ul>
                    <li><a href='#Home'>HOME</a></li>
                    <li><a href='#ABOUT'>ABOUT</a></li>
                    <li><a href='#PROJECTS'>PROJECTS</a></li>
                    <li><a href='#CONTACT'>CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;