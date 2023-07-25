import React, { useState } from 'react'
import './MobailNav.css'
import { FiMenu } from 'react-icons/fi'
import { BiMenuAltRight } from 'react-icons/bi'
import {
    FcAbout,
    FcBusinessContact,
    FcHome,
    FcVideoProjector,
    FcAutomatic,
    FcBookmark,
} from "react-icons/fc";
import { Link } from "react-scroll"; //you want go to specific page


const MobailNav = () => {
    const [open, setOpen] = useState(false)

    //handle show icons
    const handleOpen = () => {
        setOpen(!open)
    }

    //handle hide icons
    const handleHideIcons = () => {
        setOpen(false)
    }
    return (
        <>
            <div className="mobail-nav-div-main">
                <div className="mobail-nav-header">
                    {open ? (<BiMenuAltRight size={40} onClick={handleOpen} />) : (<FiMenu size={40} onClick={handleOpen} />)}

                    <span className='mobail-title'>My Portfolio</span>
                </div>
                {
                    open && (
                        <div className='mobile-nav-icons'>
                            <div className="nav-icons">
                                <div className="nav-link">
                                    <Link
                                        to="home"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={handleHideIcons}
                                    >
                                        <FcHome /> Home
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link
                                        to="about"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={handleHideIcons}
                                    >
                                        <FcAbout /> About
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link
                                        to="skills"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={handleHideIcons}
                                    >
                                        <FcAutomatic /> Tech Skills
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link
                                        to="project"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={handleHideIcons}
                                    >
                                        <FcVideoProjector /> Projects
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link
                                        to="education"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={handleHideIcons}
                                    >
                                        <FcBookmark /> Education
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link to="contact" spy={true} smooth={true} duration={500} onClick={handleHideIcons}>
                                        <FcBusinessContact /> Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default MobailNav