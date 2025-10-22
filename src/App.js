
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import Alert from './components/Alerts';
import React, { useState } from 'react';
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
    } else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled", "success");
    }
  }

  return (
 <>
<Navbar title="TextUtils" any="About" mode={mode} toggleMode={toggleMode} />
<Alert Alerts={alert} />
<div className="container">

<Textfrom showalert={showalert} heading="Enter the text for analysis" mode={mode}/>
{/* <About/> */}



</div>
 </>
  );
}

export default App;
