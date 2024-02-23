import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import Map from "../components/birthdayCafe/map";

export const BirthdayCafe = () => {

    return (
        <Wrapper>
            <Header />
            <ContentWrapper>
                <Map />
            </ContentWrapper>
        </Wrapper>
    );
};

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 75px;
  height: 91vh;
`;
