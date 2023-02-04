import React from 'react';

class Education extends React.Component {
    render() {
        const id = this.props.id
        const changeValue = this.props.handleChange('education', id);
        const deleteItem = this.props.handleDelete('education', id);
        return (
            <form>
                <fieldset>
                    <h1>Education</h1>
                    <div id={id} className='delete-button' onClick={deleteItem}>x</div>
                    <label htmlFor='school'>School</label>
                    <input 
                        type='text'
                        id='school'
                        name='school'
                        onChange={changeValue}
                        value={this.props.properties[id]?.school || ''}
                        /> <br></br>

                    <label htmlFor='title'>Title of Study</label>
                    <input 
                        type='text'
                        id='title'
                        name='title'
                        onChange={changeValue}
                        value={this.props.properties[id]?.title || ''}
                        /> <br></br>

                    <label htmlFor='fromDate'>From</label>
                    <input 
                        type='month'
                        id='fromDate'
                        name='fromDate'
                        onChange={changeValue}
                        value={this.props.properties[id]?.fromDate || ''}
                        /> <br></br>
            
                    <label htmlFor='toDate'>To</label>
                    <input 
                        type='month'
                        id='toDate'
                        name='toDate'
                        onChange={changeValue}
                        value={this.props.properties[id]?.toDate || ''}
                        /> <br></br>
                </fieldset>
            </form>
        );
    }
}

export default Education;