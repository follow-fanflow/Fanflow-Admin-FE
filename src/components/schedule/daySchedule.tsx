import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import Button from "../common/button/button";
import { Modal } from "../common/modal/Modal";

interface DayProps {
  date: string;
  group: string;
  schedule: string[];
}

export const DaySchedule = ({ date, schedule, group }: DayProps) => {
  const [refuse, setRefuse] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);
  const [selectedSchedule, setSelectedSchedule] = useState<string | null>(null);

  const refuseonClick = (item: string) => {
    setSelectedSchedule(item);
    setRefuse(true);
  };

  const deleteRef = () => {
    setRefuse(false);
  };

  const scheduleAccept = () => {
    setAccept(false);
  };

  const ref = () => {
    setRefuse(false);
  };

  const cancelAcc = () => {
    setAccept(false);
  };

  const acceptModal = (item: string) => {
    setSelectedSchedule(item);
    setAccept(true);
  };

  return (
    <>
      <Wrapper>
        <DateGroup>
          <Date>{date}</Date>
        </DateGroup>
        <ScheduleList>
          {schedule.length > 0 ? (
            <ScheduleList>
              {schedule.map((item, index) => (
                <ScheduleAc key={index}>
                  <ScheduleItem>•{item}</ScheduleItem>
                  <ButtonWrap>
                    <Button
                      content="거절"
                      backgroundColor="#fff"
                      borderColor={`${theme.color.three}`}
                      width={80}
                      height={30}
                      textColor={`${theme.color.three}`}
                      onClick={() => refuseonClick(item)}
                    />
                    <Button
                      content="수락"
                      width={80}
                      height={30}
                      onClick={() => acceptModal(item)}
                    />
                  </ButtonWrap>
                </ScheduleAc>
              ))}
            </ScheduleList>
          ) : (
            <ScheduleItem>
              •여러분을 위해 무언가 열심히 준비중일수도..?
            </ScheduleItem>
          )}
        </ScheduleList>
      </Wrapper>
      {refuse && selectedSchedule && (
        <Modal
          title={`${selectedSchedule}를 거절하시겠습니까?`}
          buttonText="거절"
          onCancel={ref}
          onClick={deleteRef}
        />
      )}
      {accept && selectedSchedule && (
        <Modal
          title={`${selectedSchedule}를 수락하시겠습니까?`}
          buttonText="수락"
          onCancel={cancelAcc}
          onClick={scheduleAccept}
        />
      )}
    </>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
`;

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

const ScheduleAc = styled.div`
  display: flex;
  align-items: center;
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
