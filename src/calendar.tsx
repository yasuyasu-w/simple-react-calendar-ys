import * as React from 'react';
import { useState, useEffect } from 'react';
import { Frame, Header, Button, Body, DaysOfWeek, Day } from './styleset';
import Infotime from './infotime';

export function Calendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const GOMISYU = [
    '✖',
    '缶と瓶',
    '燃ゴミ',
    'ペットボトル',
    '多種',
    '燃えるゴミ',
    '✖',
    '✖',
    '缶と瓶',
    '燃ゴミ',
    'ペットボトル',
    '多種',
    '燃えるゴミ',
    '✖',
    '✖',
    '缶と瓶',
    '燃ゴミ',
    'ペットボトル',
    '多種',
    '燃えるゴミ',
    '✖',
    '✖',
    '缶と瓶',
    '燃ゴミ',
    'ペットボトル',
    '多種',
    '燃えるゴミ',
    '✖',
    '✖',
    '缶と瓶',
    '燃ゴミ',
    'ペットボトル',
    '多種',
    '燃えるゴミ',
    '✖',
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear ? DAYS_LEAP : DAYS;

  return (
    <>
      <Frame>
        <Header>
          <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
          <div>
            {MONTHS[month]} {year}
          </div>
          <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
        </Header>
        <Body>
          {DAYS_OF_THE_WEEK.map(d => (
            <DaysOfWeek key={d}>
              <strong>{d}</strong>
            </DaysOfWeek>
          ))}
          {Array(days[month] + startDay)
            .fill(null)
            .map((_, index) => {
              const d = index - (startDay - 1);
              return (
                <Day
                  key={index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                  onClick={() => setDate(new Date(year, month, d))}
                >
                  {d > 0 ? d : ''} <br />
                  {index >= startDay ? GOMISYU[index] : ''}
                </Day>
              );
            })}
        </Body>
      </Frame>
      <Infotime GOMISYU={GOMISYU} />
    </>
  );
}
