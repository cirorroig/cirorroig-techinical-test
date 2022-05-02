import styled from 'styled-components';

export const Time = styled.p`
  color:${props => props.color?props.color:"#fff"};
  font-size: 32px;
  margin: 0;
`;
export const Name = styled.small`
  color:${props => props.color?props.color:"#fff"};
  font-size: 16px;
`;
export const Title = styled.small`
  color:${props => props.color?props.color:"#fff"};
  font-size: 16px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  border: 5px solid ${props => props.borderColor?props.borderColor:"#402DD6"};
  border-radius: 25px;
  padding:15px;
  background-color:${props => props.backgroundColor? props.backgroundColor:"#2C2C2C"};
  font-weight: 600;
  font-size: 5px;
  font-family: 'Inter', sans-serif;
  width: 500px;
`;
export const SectionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  color:${props => props.timerTextColor?props.timerTextColor:"#fff"};
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:1rem;
  
`;
export const Dots = styled.span`
  color:white;
  font-size: 20px;

`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

export const Button = styled.button`
  background-color:${props => props.backgroundcolor?props.backgroundcolor:"#402DD6"};
  padding: 6px;
	font-size: 14px;
  border: 3px solid ${props => props.borderColor?props.borderColor:"#402DD6"};
	height: 40px;
	color: ${props => props.color?props.color:"#fff"};
	border-radius: 10px;
  transition:0.4s;
  font-family: 'Inter', sans-serif;
  :hover{
    background-color:${props => props.hoverBackground?props.hoverBackground:"#fff"};
    color: ${props => props.hoverColor?props.hoverColor:"#402DD6"};
    cursor:pointer;
  }
`;