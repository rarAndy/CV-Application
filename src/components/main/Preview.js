import React from 'react'
import './Preview.css'

class Preview extends React.Component {
    
    render() {
        let {aboutSection, educationSection, experienceSection} = this.props.properties

        const dateKey = {'01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May','06': 'Jun', 
                         '07': 'Jul', '08': 'Aug', '09': 'Sept', '10': 'Oct', '11': 'Nov', '12': 'Dec'}

        
        const addEducation = Object.keys(educationSection).map(key => 
            <div className='p-education-container'>
                <div className='school-container'>
                    <h3>{educationSection[key].school}</h3>
                    <div className='formatted-date'>
                        {(educationSection[key]?.fromDate && educationSection[key]?.toDate) !== undefined ?
                        <div>
                            <p>{dateKey[educationSection[key]?.fromDate.split('-')[1]]}, {educationSection[key]?.fromDate.split('-')[0]}</p>
                            <p>-</p>
                            <p>{dateKey[educationSection[key]?.toDate.split('-')[1]]}, {educationSection[key]?.toDate.split('-')[0]}</p>
                        </div>    
                        : ''}
                    </div>
                </div>
                <p>{educationSection[key].title}</p>
            </div>
        )

        const addExperience = Object.keys(experienceSection).map(key => 
            <div className='p-experience-container'>
                <div className='company-container'>
                    <h3>{experienceSection[key].company}</h3>
                    <div className='formatted-date'>
                        {(experienceSection[key]?.fromDate && experienceSection[key]?.toDate) !== undefined ?
                        <div>
                            <p>{dateKey[experienceSection[key]?.fromDate.split('-')[1]]}, {experienceSection[key]?.fromDate.split('-')[0]}</p>
                            <p>-</p>
                            <p>{dateKey[experienceSection[key]?.toDate.split('-')[1]]}, {experienceSection[key]?.toDate.split('-')[0]}</p>
                        </div>    
                        : ''}
                    </div>
                </div>
                
                <p>{experienceSection[key].position}</p>
                
                <li>{experienceSection[key].tasks}</li>
                
                
                
            </div>
        )
        return (
        <div className='preview'>                    
            {/* {aboutSection.map((param) => <div>{param[0]}: {param[1]}</div>)}
            {educationSection.map((block) => {
                return Object.entries(block[1]).map((param) => <div>{param[0]}: {param[1]}</div>)
            })}
            {experienceSection.map((block) => {
                return Object.entries(block[1]).map((param) => <div>{param[0]}: {param[1]}</div>)
            })} */}
            <div className='p-about-section'>
                <p className='name-header'>{aboutSection.name}</p>
                <div className='contacts'>
                    <p>{aboutSection.email}</p>
                    <p>{aboutSection.phone}</p>
                </div>
            </div>
            <div className='p-education-section'>
                <h2>Education</h2>
                {addEducation}
            </div>
            <div className='p-experience-section'>
                <h2>Experience</h2>
                {addExperience}
            </div>
        </div>
        )
    }

}

export default Preview