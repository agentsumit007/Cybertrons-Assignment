import React from 'react'
import { useState } from 'react';
// import data from './dataFile.json';

export default function ListItem(props) {
    const [buttontext,changeButtontext] = useState('Add');
    const handleClickOnButton = () => {

        // add to json
        const data = require('./dataFile.json');
        // console.log(data);
        
        if(buttontext === 'Add') {
            let obj = {
                name: props.name,
                cal: props.cal,
                size: props.size,
                price: props.price,
                url: props.url

            }
            console.log(obj);
            // data.writeFile('./dataFile.json', JSON.stringify(updatedJSON), (err) => {
            //     if (err) console.log('Error writing file:', err);
            // })

            changeButtontext('Remove');
        }
        else {
            changeButtontext('Add');
        }
    }
    return (
        <div>

            <div className='row border'>
                <div className='col-lg-4 '>
                    <img src={props.url} height='200px' width='300px' alt='image not found' />
                </div>
                <div className='col-lg-8 '>

                    <span className='display-5 mx-1'>{props.name}</span><span className='item-cal'>{props.cal+'cal'}</span>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
                    <p>{props.price} dollors</p>

                    <div className='row'>
                        <div className='col lead'>Size:<span class="badge bg-secondary mx-1">{props.size + 'gm'}</span></div>

                        <div className='col'><button className='btn btn-outline-primary' onClick={handleClickOnButton}>{buttontext}</button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
