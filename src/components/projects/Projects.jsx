import React from 'react';
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaDesktop, FaDiscord, FaImages } from 'react-icons/fa'
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
                    <div className="column">
                        <div id="virtualDesktop" className="projectCard">
                            <div className="projectCardHeader"> Virtual Desktop </div>
                            <div className="projectCardDesc">Dashboard of virtual tools and services to help users maximize their productivity</div>
                            <hr className="cardDivider"></hr>
                            <div className="externalLinks">
                                <a href="https://github.com/git-richardwu/virtual-desktop/" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size={35} /></a>
                            </div>
                            <div className="projectCardList">
                                <ul className="alignBullet">
                                    <li>Devised and punctually delivered features for weekly project meetings alongside a team of four following the Scrum technique</li>
                                    <li>Co-lead front-end development of application with React and prototyped user interface</li>
                                    <li>Produced a series of quality-of-life components (including global timer, dark mode, and search bar)</li>
                                    <li>Oversaw and maintained proper pipelining of application on Zenhub to evaluate task priorities</li>
                                </ul>
                            </div>
                            <hr className="cardDivider"></hr>
                            <div className="projectCardDesc">MongoDB, Express, React, NodeJS, Heroku, Javascript</div>
                            <div className="date">2020</div>
                            <div className="iconP"><FaDesktop size={25} /></div>
                        </div>
                    </div>
                    <div className="column">
                        <div id="bao" className="projectCard">
                            <div className="projectCardHeader">Bao</div>
                            <div className="projectCardDesc">Discord bot maintained via the cloud that responds to user messages and commands</div>
                            <hr className="cardDivider"></hr>
                            <div className="externalLinks">
                                <a href="https://replit.com/@RichardWu9/beepBoop?v=1" rel="noopener noreferrer" target="_blank" className="icon-styleP"><HiExternalLink size={35} /></a>
                                <a href="https://github.com/git-richardwu/Bao" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size={35} /></a>
                            </div>
                            <div className="projectCardList">
                                <ul className="alignBullet">
                                    <li>Designed and implemented subscription-based system where users can request recipes from different cuisines</li>
                                    <li>Expanded functionality to fetch trending Reddit posts from specific forums with PRAW</li>
                                    <li>Revamped structure of code by introducing modularity to improve scalability and maintainability</li>
                                </ul>
                            </div>
                            <hr className="cardDivider"></hr>
                            <div className="projectCardDesc">Python, Flask</div>
                            <div className="date">2021</div>
                            <div className="iconP"><FaDiscord size={29} /></div>
                        </div>
                    </div>
                    <div className="column">
                        <div id="collaj" className="projectCard">
                            <div className="projectCardHeader">Collaj</div>
                            <div className="projectCardDesc">MERN-based web application of a responsive art gallery that sorts entries by hue</div>
                            <hr className="cardDivider"></hr>
                            <div className="externalLinks">
                                <a href="https://collaj.onrender.com" rel="noopener noreferrer" target="_blank" className="icon-styleP"><HiExternalLink size={35} /></a>
                                <a href="https://github.com/git-richardwu/Collaj" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size={35} /></a>
                            </div>
                            <div className="projectCardList">
                                <ul className="alignBullet">
                                    <li>Built and deployed REST API using Express and NodeJS to perform CRUD operations with MongoDB</li>
                                    <li>Developed encrypted authentication system with JWT and BCrypt for persistent user sessions</li>
                                    <li>Utilized Puppeteer to scrape relevant artwork data (including image link, project title, and artist name) from URL submissions</li>
                                    <li>Integrated an automated test suite with Mocha and Chai to verify behavior and performance</li>
                                </ul>
                            </div>
                            <hr className="cardDivider"></hr>
                            <div className="projectCardDesc">MongoDB, Express, React, NodeJS, Render, Javascript</div>
                            <div className="date">2022</div>
                            <div className="iconP"><FaImages size={29} /></div>
                        </div>
                    </div>
                    <div className="column">
                        <div id="foodForThought" className="projectCard">
                            <div className="projectCardHeader">Food for Thought</div>
                            <div className="projectCardDesc">Recipe sharing social media platform with a tag-based recommendation system</div>
                            <hr className="cardDivider"></hr>
                            <div className="externalLinks">
                                <a href="https://github.com/git-richardwu/food-for-thought" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size={35} /></a>
                            </div>
                            <div className="projectCardList">
                                <ul className="alignBullet">
                                    <li>Designed wireframe with interactive flows using Figma to streamline production time by a week</li>
                                    <li>Spearheaded implementation of features (including profile picture, onboarding process, and profile navigation) to enhance user experience and usability</li>
                                    <li>Composed and reviewed user stories, acceptance tests, and task tests to ensure code quality</li>
                                    <li>Conducted usability tests and highlighted design decisions with accessibility principles in mind</li>
                                </ul>
                            </div>
                            <hr className="cardDivider"></hr>
                            <div className="projectCardDesc">Swagger, React, Javascript</div>
                            <div className="date">2021</div>
                            <div className="iconP"><IoRestaurant size={25} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}