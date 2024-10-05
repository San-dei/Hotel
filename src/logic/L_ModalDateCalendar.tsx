import React from 'react'

interface Props{
  activeDate: ()=> void
  toggleButton: boolean
}
const L_ModalDateCalendar = ({activeDate,toggleButton}:Props) => {
  return (
    <>
      <span onClick={activeDate}> X </span>
    </>
  )
}

export default L_ModalDateCalendar