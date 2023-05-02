import React from 'react'

export const Notif = (props) => {
  return (
    <div className={`notif ${props.style}`}>{props.message}</div>
  )
}
