import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Celender } from "../assets/imgs/icons/celender";
import { GroupIcon } from "../assets/imgs/icons/peopleGroup";
import { theme } from "../styles/theme";
import textLogo from "../assets/imgs/textLogo.svg";
import { NoteBook } from "../assets/imgs/icons/noteBook";
import { MapIcon } from "../assets/imgs/icons/mapIcon";
import profile from "../assets/imgs/profile.svg";
import { text } from "stream/consumers";

interface NavProps {
    to: string;
    children: any;
}

const NavWrapper = styled.div<{ selected: boolean }>`
  color: ${({ selected }) =>
        selected ? theme.color.three : theme.color.black_1};
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${theme.color.three};
  }
`;

const Nav = ({ to, children }: NavProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(location.pathname.includes(to));
    }, [location.pathname, to]);

    const handleClick = () => {
        navigate(to);
    };

    return (
        <NavWrapper selected={selected} onClick={handleClick}>
            {children}
        </NavWrapper>
    );
};

export const Header = () => {
    return (
        <Position>
            <Layout>
                <Left>
                    <Img src={textLogo} alt="" />
                    <NavWrap>
                        <Nav to="/schedule">
                            <Celender />
                            스케줄
                        </Nav>
                        <Nav to="/map">
                            <MapIcon />
                            생카지도
                        </Nav>
                    </NavWrap>
                </Left>
                <Img src={profile} alt="" />
            </Layout>
        </Position>
    );
};

const Img = styled.img``;

const Position = styled.div`
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.color.white};
`;

const Layout = styled.div`
  padding: 20px 28px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  gap: 300px;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 44px;
`;
