import styled from "styled-components";
import Button from "../button/button";
import { useState } from "react";
import { theme } from "../../../styles/theme";

interface ModalProps {
    onClick?: () => void;
    onCancel?: () => void;
    title: string;
    buttonText: string;
}

export const Modal: React.FC<ModalProps> = ({
    onClick,
    onCancel,
    title,
    buttonText,
}) => {
    const [isModalVisible, setModalVisible] = useState(true);

    const handleButtonClick = () => {
        setModalVisible(false);
        onClick && onClick();
    };

    const handleCancel = () => {
        setModalVisible(false);
        onCancel && onCancel();
    };

    return (
        <>
        {isModalVisible && (
            <ModalWrapper>
                <div style={{ fontSize: "20px" }}>
                    {title}
                </div>
                <ButtonWrapper>
                    <Button
                        width={140}
                        height={38}
                        backgroundColor="#FFA495"
                        content={buttonText}
                        onClick={handleButtonClick}
                    />
                    <Button
                        width={140}
                        height={38}
                        backgroundColor="white"
                        content="취소"
                        borderColor="#FFA495"
                        hoverColor="none"
                        textColor="#FFA495"
                        onClick={handleCancel}
                    />
                </ButtonWrapper>
            </ModalWrapper>
        )}
        </>
    );
};

const ModalWrapper = styled.div`
    width: 481px;
    height: 190px;
    background-color: ${theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.gray_1};
    border-radius: 10px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 310px;
    margin-top: 30px;
`;

export const AcceptModal: React.FC<ModalProps> = ({
    onClick,
    onCancel,
    title,
    buttonText,
}) => {
    return (
        <Modal
            onClick={onClick}
            onCancel={onCancel}
            title={title}
            buttonText={buttonText}
        />
    );
};

export const DeleteModal: React.FC<ModalProps> = ({
    onClick,
    onCancel,
    title,
    buttonText,
}) => {
    return (
        <Modal
            onClick={onClick}
            onCancel={onCancel}
            title={title}
            buttonText={buttonText}
        />
    );
};
