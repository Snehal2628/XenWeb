import React from 'react';
import './Cards.css';
import CardItems from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>XENSTACK services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src='images/Cloud.png'
              text='Cloud is about "How you do computing and not Where you the computing"'
              label='Learn More'
              path='/Cloud'
            />
            <CardItems
              src='images/AI.png'
              text='Artificial Intelligence is a way to get Human Intelligence in Machines'
              label='Dive In'
              path='/AI'
            />
          </ul>
          <ul className='cards__items'>
            <CardItems
              src='images/Data_science.png'
              text='Data Science Uses scientific formulas to retrive unstructured and structured data through machine learning, data mining and Big Data'
              label='Learn More'
              path='/dataScience'
            />
            <CardItems
              src='images/devsecops.png'
              text='DevSecOps - Development Security and Operations'
              label='More Details'
              path='/Devops'
            />
            <CardItems
              src='images/robot1.png'
              text='Electronics and Robotics 3D printing'
              label='Learn More'
              path='/elect'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
