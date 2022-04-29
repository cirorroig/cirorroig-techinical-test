import styled from 'styled-components';

export const Time = styled.p`
  color: white;
  font-size: 32px;
  margin: 0;
`;
export const Name = styled.small`
  color: white;
  font-size: 16px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  border: 5px solid #402DD6;
  border-radius: 25px;
  padding:15px;
  background-color:#2C2C2C;
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
  background-color:#402DD6;
  padding: 6px;
	border: 3px solid #402DD6;
	font-size: 14px;
	height: 40px;
	color: #fff;
	border-radius: 10px;
  font-family: 'Inter', sans-serif;
  transition: 0.4s;
  :hover{
    background-color:#fff;
    color: #402DD6;
    cursor:pointer;
  }
`;