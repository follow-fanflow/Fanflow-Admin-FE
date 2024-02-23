import styled from "styled-components"
import Logo from "../assets/imgs/logo1.svg";
import { Input } from "../components/common/input/input";
import Button from "../components/common/button/button";

export const Login = () => {
    const handleFocus = () => {
        console.log('');
    }

    return (
        <LoginWrap>
            <Box>
                <TitleWrap>
                    <img src={Logo} style={{width: '50px'}} alt="로고"></img>
                    <div style={{fontSize: '25px'}}>로그인</div>
                </TitleWrap>
                <InputWrap>
                    <Input placeholder="아이디" onChange={handleFocus} width='318px' height='42px' />
                    <Input type="password" placeholder="비밀번호" onChange={handleFocus} width="318px" height='42px' />
                    <Button width={318} height={35} backgroundColor="#F96C85" />
                </InputWrap>
            </Box>
        </LoginWrap>
    )
}

const LoginWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 340px;
    height: 339px;
    border: 1px solid ${({ theme }) => theme.color.gray__1};
    border-radius: 20px;
    padding: 80px;
    gap: 55px;
`;

const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;