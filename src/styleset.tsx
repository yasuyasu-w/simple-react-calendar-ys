import styled, { css } from 'styled-components';

export const Frame = styled.div`
  width: 800px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px #eee;
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const DaysOfWeek = styled.div`
  width: 13.7%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Day = styled.div`
  width: 13.7%;
  height: 60px;
  display: flex;
  align-items: ;
  justify-content: ;
  cursor: pointer;
  border: 1px solid #eee;

  ${props =>
    props.isToday &&
    css`
      border: 1px solid orange;
    `}

  ${props =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
`;
