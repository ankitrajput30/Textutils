import React, { useState } from "react";

export default function FormText(props) {
     const handleUpClick = () => {
          let newText = text.toUpperCase();
          setText(newText);
     };

     const handleOnChange = (event) => {
          setText(event.target.value);
     };

     const handleLoClick = () => {
          let newText = text.toLowerCase();
          setText(newText);
     };

     const handleClearClick = (event) => {
          setText(event.target.value);
     };

     const handleCaptClick = () => {
          let newText = text.toLowerCase().split(" ");
          for (let i = 0; i < newText.length; i++) {
               let newText11 = newText[i][0].toUpperCase();
               let newText12 = newText[i].slice(1);
               newText[i] = newText11 + newText12;
          }
          setText(newText.join(" "));
     };

     const handleSentClick = () => {
          let newText = text.charAt(0).toUpperCase() + text.slice(1);
          setText(newText);
     };

     const handleInvClick = () => {
          let newText = text.split("").reverse().join("");
          setText(newText);
     };

     const handleCopyClick = () => {
          navigator.clipboard.writeText(text);
          // setText(newText);
          props.showAlert("Copied to clipboard!", "success");
     }

     const [text, setText] = useState('');
     //text = "new text"; //Wrong Way to change the state
     //setText("new text"); //Correct Way to change the state
     return (
          <>
               <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                         <textarea
                              className="form-control"
                              value={text}
                              onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                              id="myBox"
                              rows="8"
                         ></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-outline-warning mx-1 my-1" onClick={handleUpClick}>UPPER</button>
                    <button disabled={text.length===0} className="btn btn-outline-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
                    <button disabled={text.length===0} className="btn btn-outline-info mx-1 my-1" onClick={handleLoClick}>lower</button>
                    <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCaptClick}>Captalized</button>
                    <button disabled={text.length===0} className="btn btn-outline-success mx-1 my-1" onClick={handleSentClick}>Sentence</button>
                    <button disabled={text.length===0} className="btn btn-outline-dark mx-1 my-1" onClick={handleInvClick}>InVeRsE</button>
                    <button disabled={text.length===0} className="btn btn-outline-secondary mx-1 my-1" onClick={handleCopyClick}>Copy(Clipboard)</button>
               </div>
               <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1>Your text Summary</h1>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                    <p>{0.007 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes you need to Read the whole text.</p>
               </div>
               <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1>Preview</h1>
                    <p>{text}</p>
               </div>
          </>
     );
}
