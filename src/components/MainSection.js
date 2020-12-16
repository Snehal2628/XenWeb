import React from 'react'
import '../App.css';
import { Button } from './Button'
import './MainSection.css';

function MainSection() {
    return (
        <div className='main-container'>
            <video src="/videos/bg1.mp4" autoPlay loop muted ></video>
            <h1><i>Unleash the Scientist in you.</i></h1>
            <div>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Learn More
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Walkthrough <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default MainSection

