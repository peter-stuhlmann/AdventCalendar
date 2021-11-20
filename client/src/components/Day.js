import React, { useState } from 'react';
import styled from 'styled-components';

export default function DayComponent(props) {
  const { day } = props;

  const [wiggle, setWiggle] = useState(false);

  const runWiggle = () => {
    setWiggle(true);

    setTimeout(() => {
      setWiggle(false);
    }, 300);
  };

  const handleDayOpener = (day) => {
    day.allowed ? console.log(day.day) : runWiggle();
  };

  return (
    <Day onClick={() => handleDayOpener(day)} wiggle={wiggle}>
      <Number>{day.day}</Number>
    </Day>
  );
}

const Day = styled.div`
  flex: 0 0 calc(100% / 6 - 20px);
  margin: 10px;
  border: 3px solid #fff;
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  transition: 0.15s;

  @media (max-width: 1100px) {
    flex: 0 0 calc(100% / 4 - 20px);
  }

  @media (max-width: 580px) {
    flex: 0 0 calc(100% / 3 - 10px);
    margin: 5px;
    border: 2px solid #fff;
  }

  @media (max-width: 400px) {
  }

  &:hover {
    box-shadow: 0px 0px 13px 4px #000;
  }

  ${(props) =>
    props.wiggle &&
    ` animation: wiggle 50ms infinite;
  
      @keyframes wiggle {
        0% {
          transform: translate(0, 0) rotate(0deg);
        }
        20% {
          transform: translate(4px, 0) rotate(-2deg);
        }
        40% {
          transform: translate(-8px, 0) rotate(5deg);
        }
        60% {
          transform: translate(8px, 0) rotate(-5deg);
        }
        80% {
          transform: translate(-4px, 0) rotate(2deg);
        }
        100% {
          transform: translate(0, 0) rotate(0deg);
        }
      }
    `}
`;

const Number = styled.div`
  font-family: Praise, serif;
  color: #fff;
  font-size: clamp(2rem, 7vmin, 3rem);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: clamp(50px, 9vmin, 70px);
  height: clamp(50px, 9vmin, 70px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
