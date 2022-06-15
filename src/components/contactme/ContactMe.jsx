import React, { useState } from 'react'
import './contactme.css'

export default function ContactMe() {
    return (
        <div className="cardC">
            <div className="cardBody">
                <div className="cardHeader">
                    Contact
                    <hr></hr>
                    <div className="cardDescriptionC">
                        <a href="mailto:richardwu720@gmail.com" className="submitBtn">Email Me!</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}