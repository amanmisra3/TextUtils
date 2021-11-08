import React, { useState } from 'react';

export default function TextForm(props) {

    // const myStyle = {
    //     color: 'white',
    //     backgroundColor: 'black'
    // }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase', 'success')
        
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase', 'success')
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Text cleared', 'success')
    }

    const handleCapitalizedClick = () => {
        let newText = text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        setText(newText)
        props.showAlert('Text capitalized', 'success')
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied successfully', 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed', 'success')
        }

    const [text, setText] = useState('');

    return (
        <div >
            <div className="mb-3" >
                <h2 htmlFor="mytext" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
                <textarea className="form-control" id="mytext" value={text} style={{backgroundColor: props.mode==='dark'?'#082032':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleTextChange} rows="8"></textarea>
            </div>
            <button disabled={text.length === 0 } className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0 } className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0 } className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0 } className="btn btn-primary mx-2 my-1" onClick={handleCapitalizedClick}>Capitalize Text</button>
            <button disabled={text.length === 0 } className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length === 0 } className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2> Your Text Summary</h2>
                <p> {text.split(/\s+/).filter((element)=> {return element.length !==0 }).length} Words and {text.length} Characters [with spaces] </p>
                <p> {0.008 * text.split(" ").filter((element)=> {return element.length !==0 }).length} minutes read</p>
                <h3> Preview </h3>
                <p> {text.length>0 ? text:'Nothing to preview'} </p>
            </div>

        </div>
    )
}
