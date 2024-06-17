import React from 'react'

export default function Alert(props) {
  if(props.alert ===null){
    return (
      <>
      <div  style={{height:'25px'}} className='dark:bg-[#111827]'>
      </div>
      </>
  
    )}
  else{  
  if(props.alert.type==="good"){
  return (
    <>
    <div  style={{height:'25px'}} className='bg-[#111827]'>
    {props.alert && <div>
        <div className={`alert bg-[#93f0b5] flex justify-center`} role="alert">
        <strong className='text-[#174428]'>{props.alert.msg}</strong>
        </div>
    </div>}
    </div>
    </>

  )}
  if(props.alert.type==="bad"){
    return (
      <>
      <div  style={{height:'25px'}} className='bg-[#111827]'>
      {props.alert && <div>
          <div className={`alert bg-[#f0a593] flex justify-center`} role="alert">
          <strong className='text-[#441817]'>{props.alert.msg}</strong>
          </div>
      </div>}
      </div>
      </>
  
    )}}
}
