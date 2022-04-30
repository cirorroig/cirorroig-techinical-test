import React,{useState,useEffect,useReducer} from 'react';
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

const initialState = ()=>({
  countSec:0,
  countMin:0,
  countHr:0,
  countDay:0,
} )

const reducer = (state=initialState(),action ={})=>{
  if(action.type=="INCREMENT"){
    if(state.countSec==59){
      return{...state,countMin:state.countMin+1,countSec:0}
    }
     if(state.countMin==60){
       return {...state,countHr:state.countHr+1,countMin:0}
     }
     if (state.countHr==24) {
      return {...state,countDay:state.countDay+1,countHr:0}
     }
    return {...state, countSec:state.countSec+1}
  }
  return state
}

const Countup = ({}) => {
  const [intervalId, setIntervalId] = useState(null) // State to save the interval Id
  const [active, setActive] = useState(false) // Boolean to start or stop the counter
  const [state,dispatch]= useReducer(reducer,reducer())

  // useEffect to start the counter interval
  useEffect(() => {
        if(active){
          setIntervalId(setInterval(() => {
            dispatch({type: "INCREMENT" });
          }, 1000))
        }
        }, [active]);
  
  const startTimer=()=>{
    setActive(true)
  }
  const stopTimer=()=>{
    setActive(false)
    clearInterval(intervalId)
  }

  return (
    <Container>
      <SectionsContainer>
      <Section>
        <Time>{state.countDay}</Time>
        <Name>Days</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time>{state.countHr}</Time>
        <Name>Hours</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time>{state.countMin}</Time>
        <Name>Minutes</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time>{state.countSec}</Time>
        <Name>Seconds</Name>
      </Section>
      </SectionsContainer>
      <ButtonsContainer>
        <Button onClick={startTimer}>
          Start Count Up
        </Button>
        <Button onClick={stopTimer}>
          Stop Count Up
        </Button>
      </ButtonsContainer>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    </style>
    </Container>
  );
};

Countup.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countup.defaultProps = {
  time: [],
};

export default Countup;
