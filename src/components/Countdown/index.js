import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';

import { 
  Time,
  Container,
  Title,
  Section,
  Name,
  Dots,
  ButtonsContainer,
  Button,
  SectionsContainer,
} from './styles';



const Countdown = (props) => {



  const [timerDays, setTimerDays] = useState(0)
  const [timerHours, setTimerHours] = useState(0)
  const [timerMinutes, setTimerMinutes] = useState(0)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [intervalId, setIntervalId] = useState(null)
  const [active, setActive] = useState(true)
  

  
  const startTimer=()=>{
    const countDownDate= new Date(`${props.startingDate}`+","+`${props.startingYear}`).getTime()
    setActive(!active)
    if(active){
      setIntervalId(setInterval(()=>{
      const now = new Date().getTime()

      let distance= countDownDate - now
      let days= Math.floor(distance /(24*60*60*1000))
      let hours= Math.floor((distance % (24*60*60*1000)) / (1000*60*60))
      let minutes = Math.floor((distance % (60*60*1000)) / (1000*60))
      let seconds = Math.floor((distance % (60*1000)) / (1000))

        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
    }))
    }
    
  }
  const stopTimer=()=>{
    setActive(!active)
    clearInterval(intervalId)
  }

  return (
    <Container borderColor={props.borderColor}
    backgroundColor={props.backgroundColor}
    >
      <Title color={props.titleColor}>Countdown from today to {props.startingDate} {props.startingYear}</Title>
      <SectionsContainer>  
      <Section>
        <Time color={props.numberTextColor}>{timerDays}</Time>
        <Name color={props.datesTextColor}>Days</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time color={props.numberTextColor}>{timerHours}</Time>
        <Name color={props.datesTextColor}>Hours</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time color={props.numberTextColor}>{timerMinutes}</Time>
        <Name color={props.datesTextColor}>Minutes</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time color={props.numberTextColor}>{timerSeconds}</Time>
        <Name color={props.datesTextColor}>Seconds</Name>
      </Section>
      </SectionsContainer>
      <ButtonsContainer>
        <Button backgroundcolor={props.buttonBackgroundColor}
         borderColor={props.buttonBorderColor} 
         color={props.buttonTextColor}
         hoverColor={props.buttonHoverTextColor}
         hoverBackground={props.buttonHoverBackgroundColor} 
         onClick={startTimer}
        >
          Start Count Up
        </Button>
        <Button backgroundcolor={props.buttonBackgroundColor}
         borderColor={props.buttonBorderColor} 
         color={props.buttonTextColor}
         hoverColor={props.buttonHoverTextColor}
         hoverBackground={props.buttonHoverBackgroundColor} 
         onClick={stopTimer}
         >
          Stop Count Up
        </Button>
      </ButtonsContainer>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    </style>
    </Container>
  );
};

Countdown.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countdown.defaultProps = {
  time: [],
  startingDate:"May 10",
  startingYear:"2030",
  backgroundColor:"#2C2C2C",
  titleColor:"#fff",
  borderColor:"#402DD6",
  numberTextColor:"#fff",
  datesTextColor:"#fff",
  buttonBackgroundColor:"#402DD6",
  buttonBorderColor:"#402DD6",
  buttonTextColor:"#fff",
  buttonHoverTextColor:"#402DD6",
  buttonHoverBackgroundColor:"#fff",
};

export default Countdown;
