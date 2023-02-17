import React, { useState, useRef } from 'react';
import deleteButton from '../../assets/remove-icon.svg';

function ItemForm(props) {
    if (props.visible){
        return (
            <form className='item-form' onSubmit={props.submit}>
                
                <div className="form-group">
                    <label>Item</label>
                    <input
                        name='item'
                        /> <br></br>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input
                        name='description'
                        /> <br></br>
                </div>

                <img style={{left: 100, bottom: 135}} className='delete-button' src={deleteButton} onClick={props.delete} alt='delete'></img>
                <button type='submit'>Submit Item</button>
                
            </form>
        );
    }
}

export default ItemForm