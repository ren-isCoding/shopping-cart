import React, { useState, useEffect } from "react"

export default function Notification({ message, color, dispatch, id }) {
  const [exit, setExit] = useState(false)
  const [width, setWidth] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  function startTimer() {
    const id = setInterval(() => {
      setWidth((prevState) => {
        if (prevState < 100) {
          return prevState + 0.5
        } else {
          clearInterval(id)
          closeNotification()
        }
      })
    }, 10)
    setIntervalId(id)
  }

  function pauseTimer() {
    clearInterval(intervalId)
  }

  function closeNotification() {
    pauseTimer()
    setExit(true)
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id,
      })
    }, 400)
  }

  useEffect(() => {
    startTimer()
  }, [])

  return (
    <div
      className={`notification ${color} ${exit ? "exit" : ""}`}
      onMouseEnter={pauseTimer}
      onMouseLeave={startTimer}
    >
      <p className="message">{message}</p>
      <button className="close-btn" onClick={closeNotification}>
        CLOSE
      </button>
      <div className="timeout-bar" style={{ width: `${width}%` }}></div>
    </div>
  )
}
