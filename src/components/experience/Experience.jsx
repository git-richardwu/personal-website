import React from 'react'
import { FaGlasses  } from 'react-icons/fa'
import './experience.css'

export default function Experience() {
    return (
        <div className="cardP">
            <div className="cardBodyS">
            <div className="cardHeaderP">
                    Experience
                    <hr></hr>
                </div>
            </div>
            <div className="cards">
                {/* <div className="column"> */}
                    <div id="newDesign" className="jobCard">
                        <div className="jobCardHeader"> New Design High School </div>
                        <div className="jobCardDesc">Technology Support Specialist</div>
                        <hr className="cardDividerJ"></hr>
                        <div className="jobCardList">
                            <ul className="alignBullet">
                                <li>Devise and implement script for updating spreadsheet and staff calendar with scheduled absences</li>
                                <li>Deliver continuous support to instructors and staff members in resolving hardware and software issues</li>
                                <li>Maintain inventory and routine diagnostics of over 500 devices and peripherals for repair records</li>
                                <li>Became an administrator for Google Workspace to manage email accounts</li>
                                <li>Coordinate and verified the operational readiness of over 250 devices for PSAT/SAT examination</li>
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