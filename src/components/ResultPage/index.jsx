import { useState } from "react"
import './ResultPage.css'

const ResultPage = (props)=>{

  const handleOk=()=>{
    props.setShowResult(false)
  }

  console.log(props.showResult)
  return(<div className="RPMain" style={{display: props.showResult ? 'block' : 'none'}}>
   <div className="RPData">
   <h1 id="t">Risk of injury !</h1>
    <h1 >{props.result}%</h1>
   </div>
   <div className="RPOk">
   <button onClick={handleOk}>OK</button>

   </div>
  </div>)
}

export default ResultPage