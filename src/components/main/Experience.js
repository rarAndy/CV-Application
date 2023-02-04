import React from 'react';

class Experience extends React.Component {
    render() {
        const id = this.props.id
        const changeValue = this.props.handleChange('experience', id);
        const deleteItem = this.props.handleDelete('experience', id);
        return (
            <form>
                <fieldset>
                    <h1>Experience</h1>
                    <div id={id} className='delete-button' onClick={deleteItem}>x</div>
                    <label htmlFor='company'>Company Name</label>
                    <input 
                        type='text'
                        id='company'
                        name='company'
                        onChange={changeValue}
                        value={this.props.properties[id]?.company || ''}
                        /> <br></br>

                    <label htmlFor='position'>Position Title</label>
                    <input 
                        type='text'
                        id='position'
                        name='position'
                        onChange={changeValue}
                        value={this.props.properties[id]?.position || ''}
                        /> <br></br>

                    <label htmlFor='tasks'>Main Tasks</label>
                    
                    <textarea
                        id='tasks'
                        name='tasks'
                        onChange={changeValue}
                        value={this.props.properties[id]?.tasks || ''}
                    >
                    </textarea>
                    <br></br>
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

export default Experience;