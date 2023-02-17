import React, { useEffect, useState } from 'react';
import ItemForm from './ItemForm';
import deleteButton from '../../assets/remove-icon.svg';

function About(props) {
    const changeValue = props.handleChange('about');
    const [extraProps, setExtraProps] = useState({})
    const [itemForm, setItemForm] = useState(false)

    useEffect(() => {
        props.addItem(extraProps)
    },[extraProps])

    function deleteItem(e) {
        props.deleteItem(e)
        const filtered = Object.entries(extraProps).filter((item) => {
            return item[0] !== e.target.parentElement.firstChild.textContent
        })
        const toObj = Object.fromEntries(filtered)
        setExtraProps(toObj)
    }

    function generateExtraProps() {
        const newProps = Object.fromEntries(Object.entries(props.properties).filter((item) => {
            return (item[0] !== 'email' && item[0] !== 'name' && item[0] !== 'phone')
        }))

        return (
            Object.entries(newProps).map((key, i) => {
                return(
                    <div className='form-group'>
                        <label>{key[0]}</label>
                        <input
                            name={key[0]}
                            onChange={changeValue}
                            value={key[1]}
                        />
                        <img style={{left: 200, bottom: 50}} className='delete-button' src={deleteButton}
                             onClick={deleteItem} alt='delete'></img>
                    </div>
                )
            })
        )
    }

    function handleItemForm() {
        setItemForm(true)
    }

    function handleDeleteItemForm() {
        setItemForm(false)
    }

    function handleItemSubmit(e) {
        e.preventDefault();
        if (e.target[0].value && e.target[1].value !== '') {
            setExtraProps({
                ...extraProps,
                [e.target[0].value]: e.target[1].value
            })
            setItemForm(false)
        } 
    }
    
    return (
        <>
            <div className="form-container">
                <form>
                    <fieldset>
                        <h1>About</h1>
                        <div className="form-groups">
                            <div className="form-group">
                                <label htmlFor='name'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    onChange={changeValue}
                                    value={props.properties?.name || ''}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    onChange={changeValue}
                                    value={props.properties?.email || ''}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='phone'>Phone Number</label>
                                <input
                                    pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$'
                                    id='phone'
                                    name='phone'
                                    onChange={changeValue}
                                    value={props.properties?.phone || ''}
                                />
                            </div>
                            {/* Add Props Here */}
                            {generateExtraProps()}
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className='button-container'>
                <button className='add-item' onClick={handleItemForm}>Add Item</button>
                <ItemForm visible={itemForm} delete={handleDeleteItemForm} submit={handleItemSubmit}/>
            </div>
        </>
    );
}

export default About;