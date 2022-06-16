import React from 'react';
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaDesktop, FaDiscord} from 'react-icons/fa'
import { IoRestaurant } from 'react-icons/io5'

import './projects.css'

export default function Projects() {

    return (
        <div className="cardP">
            <div className="cardBodyP">
                <div className="cardHeaderP">
                    Projects
                    <hr></hr>
                </div>
                <div className="cards">
                    <div className="projectCard">
                       <div className="projectCardHeader"> Virtual Desktop </div>
                       <div className="projectCardDesc"> Fully-responsive and mobile-friendly web application comprised of MongoDB, Express, React, and NodeJS that acts as a one-stop shop for tools to help users maximize their productivity </div>
                       <hr className="cardDivider"></hr>
                       <div className="externalLinks">
                            <a href="https://a9-sleepers-demo.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="icon-styleP"><HiExternalLink size="2rem"/></a>
                            <a href="https://github.com/git-richardwu/virtual-desktop/" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size="1.9rem"/></a>
                       </div>
                       <div className="projectCardList">
                           <ul className="alignBullet">
                               <li>Devised and delivered features for weekly project meeting alongside a team of four following the Scrum technique</li>
                               <li>Co-lead front-end development of application with React and conceptualized prototype of user interface</li>
                               <li>Collaborated closely with the team to resolve bugs within modules before deployment</li>
                               <li>Assembled a series of quality-of-life widgets that include global timer, dark mode, and search bar</li>
                               <li>Oversaw and maintained proper pipelining of application on Zenhub</li>
                           </ul>
                       </div>
                       <div className="date">2020</div>
                       <div className="iconP"><FaDesktop size="1.5rem"/></div>
                    </div>
                    <div className="projectCard">
                        <div className="projectCardHeader">Food for Thought</div>
                        <div className="projectCardDesc"> Recipe sharing social media platform that employs a tag-based filtering system through utilizing user preferences</div>
                        <hr className="cardDivider"></hr>
                        <div className="externalLinks">
                            <a href="https://webdev.cse.buffalo.edu/hci/diamond/" rel="noopener noreferrer" target="_blank" className="icon-styleP"><HiExternalLink size="2rem"/></a>
                            <a href="https://github.com/git-richardwu/food-for-thought" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size="1.9rem"/></a>
                        </div>
                       <div className="projectCardList">
                           <ul className="alignBullet">
                               <li>Designed wireframe with interactive flows using Figma to streamline production time</li>
                               <li>Spearheaded implementation of features (including persistent profile picture, onboarding process, and profile navigation with React) to improve user experience</li>
                               <li>Utilized Agile methodology to collaborate as a member of a five-person team to punctually deliver project components</li>
                               <li>Composed and reviewed user stories, acceptance tests, and task tests</li>
                               <li>Conducted usability tests and contributed design ideas with user accessibility in mind</li>
                           </ul>
                       </div>
                       <div className="date">2021</div>
                       <div className="bgCircle">
                            <div className="iconP"><IoRestaurant size="1.6rem"/></div>
                       </div>
                    </div>
                    <div className="projectCard">
                        <div className="projectCardHeader">Bao</div>
                        <div className="projectCardDesc">Discord bot maintained via the cloud that responds to user messages and commands with continuous uptime</div>
                        <hr className="cardDivider"></hr>
                        <div className="externalLinks">
                            <a href="https://replit.com/@RichardWu9/beepBoop?v=1" rel="noopener noreferrer" target="_blank" className="icon-styleP"><HiExternalLink size="2rem"/></a>
                            <a href="https://github.com/git-richardwu/Bao" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size="1.9rem"/></a>
                       </div>
                        <div className="projectCardList">
                           <ul className="alignBullet">
                               <li>Designed and implemented subscription-based system that allows users to request recipes from different cuisines</li>
                               <li>Expanded functionality by developing user command to easily fetch trending Reddit posts from specific subreddits</li>
                               <li>Revamped structure of code by introducing modularity to improve scalability and efficiency</li>
                           </ul>
                       </div>
                        <div className="date">2021</div>
                        <div className="iconP"><FaDiscord size="2rem"/></div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}