import React from 'react'

function Alerts(props) {
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return (
    props.Alerts && <div className="alert alert-warning alert-dismissible fade showing to me" role="alert">

  <strong>{capitalize(props.Alerts.type)}</strong>:{capitalize(props.Alerts.msg)}
  
</div>
  )
}

export default Alerts
