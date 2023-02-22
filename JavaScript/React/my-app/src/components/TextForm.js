import React, {useState} from 'react'


export default function TextForm(props) {
    const handleClear = () => {
        let newText = "";
        setText(newText);
    }
        
    const handleLwrClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();

        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("OnChange was activated");
        setText(event.target.value);
    }
    const [text, setText] = useState("");

  return (
    <>
    <div className='container'>
        {/* Heading  */}
        <h1 className='my-3'>
            {props.heading}
        </h1>

        {/* TextArea  */}
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1"  value= {text} rows="10" onChange={handleOnChange} placeholder="Enter text here."></textarea>
        </div>

        {/* Buttons  */}
        <button className="btn btn-primary" onClick={handleUpClick} >Convert to uppercase</button>
        
        <button className="btn btn-primary mx-3" onClick={handleLwrClick} >Convert to lowercase</button>

        <button className="btn btn-primary mx-3" onClick={handleClear} >Clear all</button>
    </div>

    {/* Text details and preview  */}
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
