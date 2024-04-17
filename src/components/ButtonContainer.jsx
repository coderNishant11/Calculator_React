/* eslint-disable react/prop-types */

const ButtonContainer = ({calBtn,addInput}) => {
    return <div className="btn-container">
    {calBtn.map(btn => <button className='cal-btn' key={btn} onClick={()=>addInput(btn)}>{btn}</button>)}
  </div>
}

export default ButtonContainer;