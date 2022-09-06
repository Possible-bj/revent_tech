import React from 'react';
import SubHeader from './SubHeader';
import '../styles/Experience.css'

const Experience = () => {
  return (
    <div id='experience'>
      <SubHeader> Resume </SubHeader>
      <div className='resumeFrame'>
        <div className='resumeLeft'>
          <div>
            <h2 className='resumeYear'>2017</h2>
            <p className='resumeInstitution'>Louisanna State University</p>
            <p className='resumeInstitution'>Lorem Ipseum</p>
          </div>

          <div>
            <h2 className='resumeYear'>2018</h2>
            <p className='resumeInstitution'>Havard EdX</p>
            <p className='resumeInstitution'>Principles of Design</p>
          </div>

        </div>
        <div className='resumeRight'>
          <div>
            <h2 className='resumeYear'>2019</h2>
            <p className='resumeInstitution'>Udacity</p>
            <p className='resumeInstitution'>Product Design</p>
          </div>

          <div>
            <h2 className='resumeYear'>2020</h2>
            <p className='resumeInstitution'>Microsoft Partner</p>
            <p className='resumeInstitution'>Platinum</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Experience;
