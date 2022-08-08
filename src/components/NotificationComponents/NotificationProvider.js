import React, { useReducer, createContext } from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import Notification from "./Notification"

export const NotificationContext = createContext()

export default function NotificationProvider(props) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "ADD_NOTIFICATION":
          return [...state, { ...action.payload }]
        case "REMOVE_NOTIFICATION":
          return state.filter((noti) => noti.id !== action.id)
        default:
          return state
      }
    },
    [
      {
        id: v4(),
        color: "green",
        type: "ADD_NOTIFICATION",
        message: "Added new item to cart.",
      },
      {
        id: v4(),
        color: "green",
        type: "ADD_NOTIFICATION",
        message: "Added 2 new items to cart. ",
      },
    ]
  )

  return (
    <NotificationContext.Provider value={dispatch}>
      <NotificationContainer>
        {state.map((noti) => {
          return <Notification dispatch={dispatch} key={noti.id} {...noti} />
        })}
      </NotificationContainer>
      {props.children}
    </NotificationContext.Provider>
  )
}

const NotificationContainer = styled.div`
  position: fixed;
  right: 0;
  top: 14rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .notification {
    color: whitesmoke;
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    gap: 2rem;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    white-space: nowrap;
    animation: SlideLeft 0.4s;
    animation-fill-mode: forwards;

    &.exit {
      animation: SlideRight 0.4s;
      animation-fill-mode: forwards;
    }

    &.green {
      background: #3cb371;
    }
    &.green .close-btn {
      color: #3cb371;
    }
    &.red {
    }
    &.red .close-btn {
    }
  }

  .close-btn {
    background: whitesmoke;
    border-radius: 0.5rem;
    padding: 0 1rem;
    font-weight: 600;
  }

  .timeout-bar {
    background: whitesmoke;
    height: 0.4rem;
    position: absolute;
    bottom: 0rem;
    right: 0;
  }

  @keyframes SlideLeft {
    0% {
      margin-right: -100%;
    }
    100% {
      margin-right: 0;
    }
  }
  @keyframes SlideRight {
    0% {
      margin-right: 0;
    }
    100% {
      margin-right: -100%;
    }
  }
`
