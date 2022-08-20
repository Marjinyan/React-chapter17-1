import React from 'react'

Date.currentTime = function(){
    let temp = new Date()
    let hour = temp.getHours()
    let min = temp.getMinutes()
    let seconds = temp.getSeconds()
    return `${hour}:${min}:${seconds}`
}

const Child = ({count}) => {
    console.log("Child renders....")
    return <>
        <h3>Count - {count}</h3>
        <p>current time - {Date.currentTime()} </p>
    </>
}

export default React.memo(Child)