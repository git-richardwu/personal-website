import React from 'react';
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaDesktop, FaDiscord, FaImages, FaCat, FaDiceSix  } from 'react-icons/fa'
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
                <div className="masonry">
                    <div id="numBRRR" className="projectCard">
                        <div className="projectCardHeader">numBRR</div>
                        <div className="projectCardDesc">Browser-Based Multiplayer Auto-Battler Game</div>
                        <hr className="cardDivider"></hr>
                        <div className="externalLinks">
                            <a href="https://num-brrr.onrender.com/" rel="noopener noreferrer" target="_blank" className="icon-styleP"><HiExternalLink size={35} /></a>
                            <a href="https://github.com/git-richardwu/num-brrr" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size={35} /></a>
                        </div>
                        <div className="projectCardList">
                            <ul className="alignBullet">
                                <li>Developed real-time client-server synchronization using Socket.IO’s event-driven architecture, with    React (TypeScript) for state management via custom hooks and Context API to reduce latency</li>
                                <li>Architected scalable matchmaking on Node.js/Socket.IO (Render) using room partitioning and targeted event broadcasting to support 200+ concurrent users</li>
                                <li>Formulated a template-driven item system using weighted randomness and parametric inheritance, reducing new feature prototyping time by 60% while driving a 30% improvement in user engagement via level-based drop rates</li>
                                <li>Optimized UI with React hooks and prioritized visual hierarchy, cutting first-time user errors by 50%</li>
                            </ul>
                        </div>
                        <hr className="cardDivider"></hr>
                        <div className="projectCardDesc">React, TypeScript, Node.js, Render, Socket.IO, Sass</div>
                        <div className="date">2025</div>
                        <div className="iconP"><FaDiceSix size={25} /></div>
                    </div>
                    <div id="foodForThought" className="projectCard">
                        <div className="projectCardHeader">Food for Thought</div>
                        <div className="projectCardDesc">Recipe sharing social media platform with a tag-based recommendation system</div>
                        <hr className="cardDivider"></hr>
                        <div className="externalLinks">
                            <a href="https://github.com/git-richardwu/food-for-thought" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size={35} /></a>
                        </div>
                        <div className="projectCardList">
                            <ul className="alignBullet">
                                <li>Led wireframe prototyping in Figma, streamlining production time by a week and accelerating feature delivery for a team of 4 engineers</li>
                                <li>Delivered user-centric features (profile picture uploads, intuitive onboarding process, and streamlined navigation), enhancing usability based on user feedback</li>
                                <li>Authored comprehensive user stories and acceptance tests, reducing sprint-end defect discovery</li>
                                <li>Conducted usability tests and highlighted design decisions with accessibility principles in mind</li>
                            </ul>
                        </div>
                        <hr className="cardDivider"></hr>
                        <div className="projectCardDesc">Swagger, React, Javascript</div>
                        <div className="date">2021</div>
                        <div className="iconP"><IoRestaurant size={25} /></div>
                    </div>
                    <div id="feedTheCat" className="projectCard">
                        <div className="projectCardHeader">feed the cat.</div>
                        <div className="projectCardDesc">Fast-paced browser game that involves accurately preparing and delivering dishes to feline patrons</div>
                        <hr className="cardDivider"></hr>
                        <div className="externalLinks">
                            <a href="https://git-richardwu.github.io/feed-the-cats/" rel="noopener noreferrer" target="_blank" className="icon-styleP"><HiExternalLink size={35} /></a>
                            <a href="https://github.com/git-richardwu/feed-the-cats" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size={35} /></a>
                        </div>
                        <div className="projectCardList">
                            <ul className="alignBullet">
                                <li>Wrote the game's logic in React and TypeScript to efficiently update components and assets, optimizing overall responsiveness and fluidity of gameplay loop</li>
                                <li>Configured random sequence and position generation along with a retentive scoring system to increase player engagement</li>
                                <li>Incorporated minimalist interface with animations to provide visual feedback and readability</li>
                                <li>Leveraged the benefits of TypeScript's static typing to allow for smooth integration with React, improving code reliability and maintainability</li>
                            </ul>
                        </div>
                        <hr className="cardDivider"></hr>
                        <div className="projectCardDesc">React, TypeScript, Sass</div>
                        <div className="date">2023</div>
                        <div className="iconP"><FaCat size={25} /></div>
                    </div>

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
                                <li>Revamped structure of code by introducing modularity to improve scalability and clarity</li>
                            </ul>
                        </div>
                        <hr className="cardDivider"></hr>
                        <div className="projectCardDesc">Python, Flask</div>
                        <div className="date">2021</div>
                        <div className="iconP"><FaDiscord size={29} /></div>
                    </div>
                    <div id="collaj" className="projectCard">
                        <div className="projectCardHeader">Collaj</div>
                        <div className="projectCardDesc">MERN-based web application of a dynamic art gallery that sorts entries by hue</div>
                        <hr className="cardDivider"></hr>
                        <div className="externalLinks">
                            <a href="https://collaj.onrender.com" rel="noopener noreferrer" target="_blank" className="icon-styleP"><HiExternalLink size={35} /></a>
                            <a href="https://github.com/git-richardwu/Collaj" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size={35} /></a>
                        </div>
                        <div className="projectCardList">
                            <ul className="alignBullet">
                                <li>Deployed a RESTful API using Express/Node.js for seamless CRUD operations, leveraging MongoDB for efficient data storage and retrieval</li>
                                <li>Automated artwork data collection using Puppeteer to scrape and parse dynamic web content (titles, artist names, URLs) via DOM traversal</li>
                                <li>Secured user sessions via JWT/BCrypt authentication and encrypted data storage</li>
                                <li>Validated API reliability with Mocha/Chai test suites for performance and edge-case handling</li>
                            </ul>
                        </div>
                        <hr className="cardDivider"></hr>
                        <div className="projectCardDesc">MongoDB, Express, React, NodeJS, Render, Javascript</div>
                        <div className="date">2022</div>
                        <div className="iconP"><FaImages size={29} /></div>
                    </div>
                    <div id="virtualDesktop" className="projectCard">
                        <div className="projectCardHeader"> Virtual Desktop </div>
                        <div className="projectCardDesc">Dashboard of virtual tools and services to help users maximize their productivity</div>
                        <hr className="cardDivider"></hr>
                        <div className="externalLinks">
                            <a href="https://github.com/git-richardwu/virtual-desktop/" rel="noopener noreferrer" target="_blank" className="icon-styleP"><FaGithub size={35} /></a>
                        </div>
                        <div className="projectCardList">
                            <ul className="alignBullet">
                                <li>Achieved 100% on-time delivery in 3 months using Scrum with a 4-person team</li>
                                <li>Co-led React front-end development and UI prototyping</li>
                                <li>Produced a series of quality-of-life components (including global timer, dark mode, and search bar)</li>
                                <li>Oversaw and maintained task prioritization and pipeline of application on Zenhub</li>
                            </ul>
                        </div>
                        <hr className="cardDivider"></hr>
                        <div className="projectCardDesc">MongoDB, Express, React, NodeJS, Heroku, Javascript</div>
                        <div className="date">2020</div>
                        <div className="iconP"><FaDesktop size={25} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}