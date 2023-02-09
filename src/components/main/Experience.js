import React from 'react';
import deleteButton from '../../assets/remove-icon.svg';

function Experience(props) {
    const id = props.id
    const changeValue = props.handleChange('experience', id);
    const deleteItem = props.handleDelete('experience', id);
    
    return (
        <form>
            <fieldset>
                <h1>Experience</h1>
                <img className='delete-button' src={deleteButton} onClick={deleteItem} alt='delete'></img>
                <label htmlFor='company'>Company Name</label>
                <input 
                    type='text'
                    id='company'
                    name='company'
                    onChange={changeValue}
                    value={props.properties[id]?.company || ''}
                    /> <br></br>

                <label htmlFor='position'>Position Title</label>
                <input 
                    type='text'
                    id='position'
                    name='position'
                    onChange={changeValue}
                    value={props.properties[id]?.position || ''}
                    /> <br></br>

                <label htmlFor='tasks'>Main Tasks</label>
                
                <textarea
                    id='tasks'
                    name='tasks'
                    onChange={changeValue}
                    value={props.properties[id]?.tasks || ''}
                >
                </textarea>
                <br></br>
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

export default Experience;