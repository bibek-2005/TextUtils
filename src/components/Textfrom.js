import React,{useState} from 'react'

  

export default function Textfrom(props){
    const handleUppercaseClick=()=>{
    // console.log("uppercase was cliked"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("Text converted to uppercase", "success");
  }
  const handleLowercaseClick=()=>{
    // console.log("uppercase was cliked"+text);
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Text converted to lowercase", "success");
  }

   const handleCleartextClick=()=>{
    // console.log("uppercase was cliked"+text);
    let newtext="";
    setText(newtext);
  }
   const handleFirstLetterClick=()=>{
    // console.log("uppercase was cliked"+text);
    let newtext=text.charAt(0,1).toUpperCase()+text.slice(1);;
    setText(newtext);
  }
const handleDownloadClick=()=>{
  const element = document.createElement("a");
  const file =new Blob([text],{type:"text/plain"});
  element.href=URL.createObjectURL(file);
  element.download="mytext.txt";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const handleCopyClick=()=>{
  var text=document.getElementById("Mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
const handleExtraSpace=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
}


 const handleOnChange=(event)=>{
    // console.log("on change");
    setText(event.target.value)
 }    
    
 const [text,setText] = useState("");
  return (
    <>
    <div className="container" >
<div className="mb-3">
    <h1  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
  <textarea className="form-control" id="Mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCleartextClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleFirstLetterClick}>Capitalize First Letter</button>
<button className="btn btn-primary mx-2" onClick={handleDownloadClick}>Download Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>

    <div className="container my-200"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>your text summary</h2>
        <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters {text.split(".").length-1} sentences</p>
        <p>{0.008*text.split(" ").length} minuts to read the the text</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>

    </>
  )

}