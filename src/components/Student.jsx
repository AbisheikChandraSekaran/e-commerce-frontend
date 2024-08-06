import React from 'react'

const Student = (props) => {
    const{student}=props
    const{name,age}=student
    console.log(props)
  return (
    <>
    <div>Student Name: {name}</div>
    <div>Student Age: {age}</div>
    </>
  )
}

export default Student

