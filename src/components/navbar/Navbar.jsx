import React, { useEffect, useState } from 'react';
import { Link, animateScroll } from 'react-scroll';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import './navbar.css'

export default function Navbar() {
    const [visibility, setVisibility] = useState(true)
    const changeNav = () => {
        if (window.scrollY > 30) {
            setVisibility(false)
        }
        else {
            setVisibility(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        return () => {
            window.removeEventListener('scroll', changeNav)
        }
    }, [])

    return (
        <div className={`navbar-style ${visibility && "navbar-style__invis"}`}>
            <div className="name">
                <h1 className="name-style">Richard Wu </h1>
                <a href="https://github.com/git-richardwu" rel="noopener noreferrer" target="_blank" className="icon-style"><FaGithubAlt size="2rem"/></a>
                <a href="https://www.linkedin.com/in/richard-wu-049b18114/" rel="noopener noreferrer" target="_blank" className="icon-style"><FaLinkedin size="2rem"/> </a>
            </div>
            <div className="content">
                <div className="link-styles">
                    <Link to="home" onClick={() => animateScroll.scrollToTop()} smooth={true} duration={1000}>Home</Link>
                    <Link to="aboutme" smooth={true} offset={-100} duration={1000}>About Me</Link>
                    <Link to="skills" smooth={true} offset={-100} duration={1000}>Skills</Link>
                    <Link to="projects" smooth={true} offset={-100} duration={1000}>Projects</Link>
                    <Link to="contactme" smooth={true} offset={-100} duration={1000}>Contact</Link>
                    <a className="resumeButton" rel="noopener noreferrer" target="_blank" href={process.env.PUBLIC_URL + '/Resume.pdf'}>Resume</a>
                    {/*Dark Mode*/}
                </div>

            </div>
        </div>
    )
}
