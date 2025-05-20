import React from 'react'
import { FaGlasses  } from 'react-icons/fa'
import './experience.css'

export default function Experience() {
    return (
        <div className="cardP">
            <div className="cardBodyS">
            <div className="cardHeaderP">
                    Work Experience
                    <hr></hr>
                </div>
            </div>
            <div className="cards">
                {/* <div className="column"> */}
                    <div id="newDesign" className="jobCard">
                        <div className="jobCardHeader"> New Design High School </div>
                        <div className="jobCardDesc">Coding and Robotics Instructor/Technology Support Specialist</div>
                        <hr className="cardDividerJ"></hr>
                        <div className="jobCardList">
                            <ul className="alignBullet">
                                <li>Designed and taught a project-based coding curriculum for 12 students using Sphero BOLTs, introducing core programming concepts through hands-on robotics projects</li>
                                <li>Facilitated classroom activities to reinforce problem-solving and debugging skills, mentoring students to build a foundation for iterative development - mirroring Agile prototyping cycles</li>
                                <li>Utilized Google Apps Script to auto-populate staff absences into calendars, eliminating manual data entry and ensuring real-time accuracy for administrative scheduling</li>
                            </ul>
                        </div>
                            <hr className="cardDividerJ"></hr>
                            <div className="dateJ">2023 - Present</div>
                            <div className="iconJ"><FaGlasses size={25} /></div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}