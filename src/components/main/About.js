import React from 'react';

class About extends React.Component {
    render() {
        const changeValue = this.props.handleChange('about');
        return (
            <form>
                <fieldset>
                    <h1>About</h1>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text'
                        id='name'
                        name='name'
                        onChange={changeValue}
                        value={this.props.properties.name || ''}
                        /> <br></br>

                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email'
                        id='email'
                        name='email'
                        onChange={changeValue}
                        value={this.props.properties.email || ''}
                        /> <br></br>

                    <label htmlFor='phone'>Phone Number</label>
                    <input 
                        pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$'
                        id='phone'
                        name='phone'
                        onChange={changeValue}
                        value={this.props.properties.phone || ''}
                        /> <br></br>
                    {/* <input type='submit'/> */}
                </fieldset>
            </form>
        );
    }
}

export default About;