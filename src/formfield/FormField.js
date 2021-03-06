import React from 'react';
import './FormField.css';
import 'bulma/css/bulma.css';


export default function FormField(props) {
    console.log(props)
    return (
        <div className="field">
            <label className="label">{ props.label }</label>
            <div className="control">
                <input className="input" type={ props.type } placeholder={ props.placeholder } />
            </div>
        </div>
    )
}
