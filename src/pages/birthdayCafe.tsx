import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { AutoInput } from "../components/common/input/autoInput";
import Logo from "../assets/imgs/logo1.svg";
import textlogo from "../assets/imgs/textLogo.svg";
import { theme } from "../styles/theme";
import Map from "../components/map";

export const BirthdayCafe = () => {
    const suggest = ["세븐틴", "react", "ff", "avre", "ateez"];

    return (
        <Wrapper>
            <Header />
            <SearchWarp>
                <Top>
                    <img src={Logo} alt="" width={80} />
                    <AutoInput
                        suggestions={suggest}
                        placeholder="멤버명"
                        label="내 최애 생일카페가 어디어디에 있나?"
                    />
                </Top>
                <img src={textlogo} />
            </SearchWarp>
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

const SearchWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px 55px 55px 55px;
  border-right: 1px solid ${theme.color.gray__1};
  justify-content: space-between;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
`;
