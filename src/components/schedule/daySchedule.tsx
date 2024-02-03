import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface DayProps {
  date: string;
  group: string;
  schedule: string[];
}

export const DaySchedule = ({ date, schedule }: DayProps) => {
  return (
    <Wrapper>
      <DateGroup>
        <Date>{date}</Date>
      </DateGroup>
      <ScheduleList>
        {schedule.length > 0 ? (
          <ScheduleList>
            {schedule.map((item, index) => (
              <ScheduleItem key={index}>•{item}</ScheduleItem>
            ))}
          </ScheduleList>
        ) : (
          <ScheduleItem>
            •여러분을 위해 무언가 열심히 준비중일수도..?
          </ScheduleItem>
        )}
      </ScheduleList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: ${theme.color.zero};
  padding: 40px;
  height: 578px;
  display: flex;
  gap: 40px;

  flex-direction: column;
  align-items: center;
  color: ${theme.color.white};
`;

const DateGroup = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.color.white};
  padding: 4px;
`;

const Date = styled.div``;

const ScheduleList = styled.ul`
  display: flex;
  gap: 40px;
  width: 486px;
  flex-direction: column;
  align-items: flex-start;
  font-size: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ScheduleItem = styled.li`
  margin-bottom: 5px;
`;

