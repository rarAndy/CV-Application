import React from 'react';
import deleteButton from '../../assets/remove-icon.svg';

function Education(props) {
    const id = props.id
    const changeValue = props.handleChange('education', id);
    const deleteItem = props.handleDelete('education', id);
    
    return (
        <form>
            <fieldset>
                <h1>Education</h1>
                <img className='delete-button' src={deleteButton} onClick={deleteItem} alt='delete'></img>
                <label htmlFor='school'>School</label>
                <input 
                    type='text'
                    id='school'
                    name='school'
                    onChange={changeValue}
                    value={props.properties[id]?.school || ''}
                    /> <br></br>

                <label htmlFor='title'>Title of Study</label>
                <input 
                    type='text'
                    id='title'
                    name='title'
                    onChange={changeValue}
                    value={props.properties[id]?.title || ''}
                    /> <br></br>

                <label htmlFor='fromDate'>From</label>
                <input 
                    type='month'
                    id='fromDate'
                    name='fromDate'
                    onChange={changeValue}
                    value={props.properties[id]?.fromDate || ''}
                    /> <br></br>
        
                <label htmlFor='toDate'>To</label>
                <input 
                    type='month'
                    id='toDate'
                    name='toDate'
                    onChange={changeValue}
                    value={props.properties[id]?.toDate || ''}
                    /> <br></br>
            </fieldset>
        </form>
    );
}

export default Education;