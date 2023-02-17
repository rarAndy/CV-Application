import React, { useState, useEffect } from 'react';
import Nav from './main/Nav'
import About from './main/About';
import Education from './main/Education';
import Experience from './main/Experience';
import Preview from './main/Preview';
import { v4 as uuidv4 } from 'uuid';

function Main() {
    const [aboutSection, setAboutSection] = useState({});
    const [educationSection, setEducationSection] = useState({});
    const [experienceSection, setExperienceSection] = useState({});
    const [active, setActive] = useState('About');
    const [edItems, setEdItems] = useState([]);
    const [exItems, setExItems] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        if (data) {
            const {aboutSection, educationSection, experienceSection, active, edItems, exItems} = data
            setAboutSection(aboutSection);
            setEducationSection(educationSection);
            setExperienceSection(experienceSection);
            setActive(active);
            setEdItems(edItems);
            setExItems(exItems);
        }
    }, [])

    useEffect(() => {
        const data = {aboutSection, educationSection, experienceSection, active, edItems, exItems}
        localStorage.setItem('data', JSON.stringify(data))
    },[aboutSection, educationSection, experienceSection, active, edItems, exItems])

    const handleNavClick = (e) => {
        document.querySelectorAll('.nav-tab').forEach(e => e.style=``)
        e.target.style=`background-color: rgb(160, 193, 221)`;
        setActive(e.target.innerText)
    }

    function handleAddSection(section){
        const newId = uuidv4();
        if (section === 'education') {
            setEdItems(edItems => [...edItems, newId])
        }
        if (section === 'experience') {
            setExItems(exItems => [...exItems, newId])
        }
    }

    function handleAddItem(items) {
        Object.entries(items).forEach((item => {
            setAboutSection({
                ...aboutSection,
                [item[0]]: item[1]
            })
        }))
    }

    function handleDeleteItem(e) {
        console.log(e.target.parentElement.firstChild.textContent)
        const filtered = Object.entries(aboutSection).filter((item => {
            return item[0] !== e.target.parentElement.firstChild.textContent
        }))
        const toObj = Object.fromEntries(filtered)
        setAboutSection(toObj)
    }
    
    function handleChange(section, index = null) {
        return e => {
            const {value, name} = e.target;
            const i = index;
            if (section === 'about') {
                setAboutSection({
                    ...aboutSection,
                    [name]: value
                })
            }
            if (section === 'education') {
                setEducationSection({
                    ...educationSection,
                    [i] : {
                        ...educationSection[i],
                        [name]: value
                    }
                })
            }
            if (section === 'experience') {
                setExperienceSection({
                    ...experienceSection,
                    [i] : {
                        ...experienceSection[i],
                        [name]: value
                    }
                })
            }
        }
    }
    function handleDeleteSection(section, id) {
        return () => {
            if (section === 'education') {
                const filteredEd = Object.entries((educationSection)).filter(
                    (item) => item[0] !== `${id}`)
                const toObj = Object.fromEntries(filteredEd)
                setEducationSection(toObj)
                setEdItems(edItems.filter(function(item) {return item !== id}))
            }
            if (section === 'experience') {
                const filteredExp = Object.entries((experienceSection)).filter(
                    (item) => item[0] !== `${id}`)
                const toObj = Object.fromEntries(filteredExp)
                setExperienceSection(toObj)
                setExItems(exItems.filter(function(item) {return item !== id}))
            }
        }
    }

    function loadEdSection() {
        return (
        <div className={`education-section ${active === 'Education' ? 'active' : ''}`}>
            <div className="form-container">
                {edItems.map((key, i) => <Education id={key} key={key} properties={educationSection} handleChange={handleChange} handleDelete={handleDeleteSection}/>)}
            </div>
            <div className='button-container'>
                <button className='add-section' onClick={() => handleAddSection('education')}>Add Section</button>
            </div>
        </div>
        )
    }

    function loadExSection() {
        return (
        <div className={`experience-section ${active === 'Experience' ? 'active' : ''}`}>
            <div className='form-container'>
                {exItems.map((key, i) => <Experience id={key} key={key} properties={experienceSection} handleChange={handleChange} handleDelete={handleDeleteSection}/>)}
            </div>
            <div className="button-container">
                <button className='add-section' onClick={() => handleAddSection('experience')}>Add Section</button>
            </div>
        </div>
        )
    }
    

    return (
        <div className='main-container'>
            <Nav handleNavClick={handleNavClick} active={active}/>
            <div className='information-container'>
                <div className={`about-section ${active === 'About' ? 'active' : ''}`}>
                    <About properties={aboutSection} handleChange={handleChange} addItem={handleAddItem} deleteItem={handleDeleteItem}/>
                </div>
                {loadEdSection()}
                {loadExSection()}
            </div>
            
            <div className = 'preview-container'>
                <p>Live Preview</p>
                {<Preview
                aboutSection={aboutSection}
                educationSection={educationSection}
                experienceSection={experienceSection}
                />}
            </div> 
        </div>
    );
}

export default Main;