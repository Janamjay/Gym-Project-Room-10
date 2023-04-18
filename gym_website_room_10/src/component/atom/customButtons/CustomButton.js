import React from 'react'

export default function CustomButton(props) {
  return (
    <div>
      <button className={props.style}>{props.btntxt}</button>
    </div>
  )
}
