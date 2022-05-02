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

const Countup = (props) => {
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
    <Container borderColor={props.borderColor}
    backgroundColor={props.backgroundColor}
    >
      <SectionsContainer >
      <Section>
        <Time color={props.numberTextColor}>{state.countDay}</Time>
        <Name color={props.datesTextColor}>Days</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time color={props.numberTextColor}>{state.countHr}</Time>
        <Name color={props.datesTextColor}>Hours</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time color={props.numberTextColor}>{state.countMin}</Time>
        <Name color={props.datesTextColor}>Minutes</Name>
      </Section>
      <Dots>:</Dots>
      <Section>
        <Time color={props.numberTextColor}>{state.countSec}</Time>
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

Countup.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countup.defaultProps = {
  time: [],
};

export default Countup;
