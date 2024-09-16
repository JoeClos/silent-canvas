import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import '../styles/navbar.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleCloseSidebar = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleCloseSidebar);
        return () => {
            document.removeEventListener('mousedown', handleCloseSidebar);
        }
    }, [])

    return (
        <>
            {/* Hamburger Button */}
            <button className="hamburger" onClick={toggleNavbar}>
                {isOpen ? <IoCloseOutline className="btn-close"/> : <GiHamburgerMenu className="btn-open"/>}
            </button>

            <nav className={`side-navbar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
                <ul>
                    <li><NavLink to={'/'} end
                        className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleNavbar}>Home</NavLink></li>
                    <li><NavLink to={'/about'} className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleNavbar}>About</NavLink></li>
                    <li><NavLink to={'/portfolio'} className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleNavbar}>Portfolio</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleNavbar}>Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;