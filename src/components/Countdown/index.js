import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';

import { 
  Time,
  Container,
  Section,
  Name,
  Dots,
  ButtonsContainer,
  Button,
  SectionsContainer,
} from './styles';



const Countdown = ({}) => {



  const [timerDays, setTimerDays] = useState(0)
  const [timerHours, setTimerHours] = useState(0)
  const [timerMinutes, setTimerMinutes] = useState(0)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [intervalId, setIntervalId] = useState(null)
  const [active, setActive] = useState(true)
  
  // useEffect(() => {
  //   setTimerDays(0)
  //   setTimerHours(0)
  //   setTimerMinutes(0)
  //   setTimerSeconds(0)
  // },[])
  
  const startTimer=()=>{
    const countDownDate= new Date("May 3,2022").getTime()
    setActive(!active)
    console.log(active);
    if(active){
      setIntervalId(setInterval(()=>{
      const now = new Date().getTime()

      let distance= countDownDate - now
      let days= Math.floor(distance /(24*60*60*1000))
      let hours= Math.floor((distance % (24*60*60*1000)) /(1000*60*60))
      let minutes =Math.floor((distance % (60*60*1000)) /(1000*60))

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
    console.log(active);
    clearInterval(intervalId)
  }

  return (
    <Container>
      <Name>Countdown from today to May 3 2022</Name>
      <SectionsContainer>
      <Section>
        <Time>{timerDays}</Time>
        <Name>Days</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time>{timerHours}</Time>
        <Name>Hours</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time>{timerMinutes}</Time>
        <Name>Minutes</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time>{timerSeconds}</Time>
        <Name>Seconds</Name>
      </Section>
      </SectionsContainer>
      <ButtonsContainer>
        <Button onClick={startTimer}>
          Start Countdown
        </Button>
        <Button onClick={stopTimer}>
          Stop Countdown
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
};

export default Countdown;
