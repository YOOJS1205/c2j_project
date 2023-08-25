import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "../../recoil/ModalAtom";

import Auction from "../../assets/auction.png";
import Gmarket from "../../assets/gmarket.svg";
import { gmarketLoginAtom } from "../../recoil/gmarketLoginAtom";

export default function DefaultModal() {
  const [isClickLogin, setIsClickLogin] = useState(false);
  const navigate = useNavigate();
  const setIsModalOpen = useSetRecoilState(modalStateAtom);
  const setIsGmarketLogin = useSetRecoilState(gmarketLoginAtom);

  const handleClickOutsideModal = () => {
    setIsModalOpen(false);
  };

  // 지마켓 로그인
  const handleClickGmarketLogin = () => {
    setIsClickLogin(true);
  };

  // 옥션 로그인
  const handleClickAuctionLogin = () => {
    setIsClickLogin(true);
  };

  const handleClickJnLogin = () => {
    setIsModalOpen(false);
    setIsGmarketLogin(true);
  };
  return (
    <ModalContainer onClick={handleClickOutsideModal}>
      {!isClickLogin ? (
        <ModalItem onClick={(e) => e.stopPropagation()}>
          <ModalTitle>쇼핑몰 계정 연동</ModalTitle>
          <OptionContainer>
            <Button color="green" onClick={handleClickGmarketLogin}>
              <img src={Gmarket} alt="지마켓 로고" /> 지마켓 로그인
            </Button>
            <Button color="red" onClick={handleClickAuctionLogin}>
              <img src={Auction} alt="옥션 로고" /> 옥션 로그인
            </Button>
          </OptionContainer>
        </ModalItem>
      ) : (
        <ModalItem onClick={(e) => e.stopPropagation()}>
          <ModalTitle>중고나라 쇼핑몰 로그인</ModalTitle>
          <LoginOptionContainer>
            <div>
              <input type="text" placeholder="아이디" />
              <input type="password" placeholder="비밀번호" />
            </div>
            <CenterButton color="black" onClick={handleClickJnLogin}>
              로그인
            </CenterButton>
            <div style={{ width: "100%" }}>
              <p style={{ display: "flex", width: "100%" }}>
                <input
                  type="checkbox"
                  style={{ width: "16px", marginTop: "-1px" }}
                />
                자동 로그인
              </p>
              <p style={{ display: "flex", width: "100%" }}>
                <input
                  type="checkbox"
                  style={{ width: "16px", marginTop: "-1px" }}
                />
                쇼핑몰 아이디, 비밀번호{" "}
                <strong
                  style={{ textDecoration: "underline", marginLeft: "4px" }}
                >
                  제공
                </strong>
                에 동의합니다.
              </p>
              <p></p>
            </div>
          </LoginOptionContainer>
        </ModalItem>
      )}
    </ModalContainer>
  );
}

const ModalContainer = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  text-align: center;
`;

const ModalItem = styled.section`
  width: 300px;
  height: 300px;
  text-align: center;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 30px 20px;
`;

const ModalTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  margin-bottom: 12px;
`;

const OptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 10px;
  margin-top: -28px;

  p {
    font-size: 13px;
  }
`;

const LoginOptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  margin-top: 20px;

  input {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 100%;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
  }
`;

const Option = styled.section`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: 2px solid black;
  text-align: left;
  padding: 20px 10px;
  cursor: pointer;

  h3 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #0dcc5a;
  }
`;

const Button = styled.button`
  background-color: ${({ color }) => color};
  border: none;
  height: 42px;
  border-radius: 8px;
  display: flex;
  gap: 20px;
  align-items: center;
  color: white;
  font-weight: 600;

  img {
    width: 32px;
    height: 32px;
  }
`;

const CenterButton = styled.button`
  background-color: ${({ color }) => color};
  border: none;
  height: 42px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  text-align: center;
  margin-bottom: 12px;
`;
