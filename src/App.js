import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
// import About from './components/About';
import Alert from './components/Alerts';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);

    }, 3000);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgba(15, 38, 72, 1)';
      showalert("Dark mode has been enabled", "success");
      document.title="TextUtils-Dark mode"
    } else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled", "success");
      document.title="TextUtils-Light Mode"
    }
  }

  return (
 <>
 {/* <Router> */}
<Navbar title="TextUtils" any="About" mode={mode} toggleMode={toggleMode} />
<Alert Alerts={alert} />
<div className="container">
  {/* <Routes> */}
          {/* <Route exact path="/about"  element={<About />} /> */}
           <Textfrom showalert={showalert} heading="Enter the text for analysis" mode={mode}/>
        {/* </Routes> */}

{/* <About/> */}

</div>
{/* </Router> */}


 </>
  );
}

export default App;