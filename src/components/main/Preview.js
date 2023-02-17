import React, { useRef }  from 'react'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'
import './Preview.css'

function Preview(props) {
    let {aboutSection, educationSection, experienceSection} = props;

    const previewRef = useRef();

    const extraProps = Object.entries(aboutSection).filter((item => {
        return (item[0] !== 'email' && item[0] !== 'name' && item[0] !== 'phone')
    }))
    const addAbout = extraProps.map((item => 
                <p>{item[0]}: {item[1]}</p>
        ))
    
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

    const handleGeneratePDF = async () => {
        /* previewRef.current.style.border = 'none' */
        const element = previewRef.current;
        const canvas = await html2canvas(element, {
            scale: 4
        })
        /* previewRef.current.style.border = '1px solid black' */
        const data = canvas.toDataURL('image/png')
        const doc = new jsPDF({
            orientation: 'portrait'
        })
        const imgProps = doc.getImageProperties(data);
        const width = doc.internal.pageSize.getWidth();
        const height = (imgProps.height * width) / imgProps.width;
        doc.addImage(data, 'PNG', 0, 0, width, height)
        doc.save('Resume')
    }
    
    return (
    <>
        <div className='preview-wrapper' >
            <div className='preview' ref={previewRef}>
                <div className='p-about-section'>
                    <p className='name-header'>{aboutSection.name}</p>
                    <div className='about-info'>
                        <p>{aboutSection.email}</p>
                        <p>{aboutSection.phone}</p>
                        {addAbout}
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
        </div>
        <div>
            <button className='pdf-button' onClick={handleGeneratePDF}>Generate PDF</button>
        </div>
    </>
    )
}

export default Preview