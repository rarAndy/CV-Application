import React, { useState, useEffect} from 'react';
import Nav from './main/Nav'
import About from './main/About';
import Education from './main/Education';
import Experience from './main/Experience';
import Preview from './main/Preview'
import { v4 as uuidv4} from 'uuid';

function Main() {
    const [aboutSection, setAboutSection] = useState({});
    const [educationSection, setEducationSection] = useState({});
    const [experienceSection, setExperienceSection] = useState({});
    const [active, setActive] = useState('About');
    const [edItems, setEdItems] = useState([]);
    const [exItems, setExItems] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        const {aboutSection, educationSection, experienceSection, active, edItems, exItems} = data
        if (data){
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
            {edItems.map((key, i) => <Education id={key} key={key} properties={educationSection} handleChange={handleChange} handleDelete={handleDeleteSection}/>)}
            <button className='add-section' onClick={() => handleAddSection('education')}>Add Section</button>
        </div>
        )
    }

    function loadExSection() {
        return (
        <div className={`experience-section ${active === 'Experience' ? 'active' : ''}`}>
            {exItems.map((key, i) => <Experience id={key} key={key} properties={experienceSection} handleChange={handleChange} handleDelete={handleDeleteSection}/>)}
            <button className='add-section' onClick={() => handleAddSection('experience')}>Add Section</button>
        </div>
        )
    }

    return (
        <div className='main-container'>
            <Nav handleNavClick={handleNavClick}/>
            <div className='information-container'>
                <div className={`about-section ${active === 'About' ? 'active' : ''}`}>
                    <About properties={aboutSection} handleChange={handleChange}/>
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

/* class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutSection: {},
            educationSection: {},
            experienceSection: {},
            active: 'About',
            edItems: [],
            exItems: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleNavClick = this.handleNavClick.bind(this)
        this.handleAddSection = this.handleAddSection.bind(this)
        this.handleDeleteSection = this.handleDeleteSection.bind(this)
    }

    handleNavClick = (e) => {
        this.setState({
            active: e.target.innerText
        })
    }

    handleAddSection(section) {
        const newId = uuidv4()
        console.log('add section')
        if (section === 'education') {
            this.setState(prevState => ({
                edItems: [...prevState.edItems, newId]
            })
        )}
        if (section === 'experience') {
            this.setState(prevState => ({
                exItems: [...prevState.exItems, newId]
            })
        )}
    }

    handleDeleteSection(section, id) {
        return e => {
            console.log(section, id)
            if (section === 'education') {
                console.log('deleteExp')
                const filteredEd = Object.entries((this.state.educationSection)).filter(
                    (item) => item[0] !== `${id}`
                )
                const toObj = Object.fromEntries(filteredEd)
                console.log(toObj)
                this.setState({
                    educationSection: toObj,
                    edItems: this.state.edItems.filter(function(item) {
                        return item !== id
                    })
                })
            }
            if (section === 'experience') {
                console.log('deleteExp')
                const filteredEd = Object.entries((this.state.experienceSection)).filter(
                    (item) => item[0] !== `${id}`
                )
                const toObj = Object.fromEntries(filteredEd)
                console.log(toObj)
                this.setState({
                    experienceSection: toObj,
                    exItems: this.state.exItems.filter(function(item) {
                        return item !== id
                    })
                })
            }
        }
    }
    
    handleChange(section, index=null){
        
        return e => {
            
            const {value, name} = e.target
            const i= index;
            
        
            if (section === 'about') {
                this.setState({
                    aboutSection: {
                        ...this.state.aboutSection,
                    [name]: value
                    },
                })
            }
            if (section === 'education') {
                this.setState({
                    educationSection: {
                        ...this.state.educationSection,
                        [i]: {
                            ...this.state.educationSection[i],
                            [name]: value
                        }
                    }

                })  
            }
            if (section === 'experience') {
                this.setState({
                    experienceSection: {
                        ...this.state.experienceSection,
                        [i]: {
                            ...this.state.experienceSection[i],
                            [name]: value
                        }
                    }

                })  
            }
        }
    }

    componentDidUpdate() {
        localStorage.setItem('data', JSON.stringify(this.state))
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'))
        console.log(data)
        if (data === null){return}

        for (const [key, value] of Object.entries(data)) {
            this.setState({
                [key]: value
            })
        }
    }

    loadEdSection() {
        return (
        <div className={`education-section ${this.state.active === 'Education' ? 'active' : ''}`}>
            {this.state.edItems.map((key, i) => <Education id={key} key={key} properties={this.state.educationSection} handleChange={this.handleChange} handleDelete={this.handleDeleteSection}/>)}
            <button className='add-section' onClick={() => this.handleAddSection('education')}>Add Section</button>
        </div>
        )
    }

    loadExSection() {
        return (
        <div className={`experience-section ${this.state.active === 'Experience' ? 'active' : ''}`}>
            {this.state.exItems.map((key, i) => <Experience id={key} key={key} properties={this.state.experienceSection} handleChange={this.handleChange} handleDelete={this.handleDeleteSection}/>)}
            <button className='add-section' onClick={() => this.handleAddSection('experience')}>Add Section</button>
        </div>
        )
    }

    render() {
        console.log(this.state)
        
        return (
            <div className='main-container'>
                <Nav handleNavClick={this.handleNavClick}/>
                <div className='information-container'>
                    <div className={`about-section ${this.state.active === 'About' ? 'active' : ''}`}>
                        <About properties={this.state.aboutSection} handleChange={this.handleChange}/>
                    </div>
                    {this.loadEdSection()}
                    {this.loadExSection()}
                </div>
                
                <div className = 'preview-container'>
                    <p>Live Preview</p>
                    <Preview properties={this.state}/>
                </div>
                
            </div>
        );
    }
} */

export default Main;