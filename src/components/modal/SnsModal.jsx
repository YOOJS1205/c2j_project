import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "../../recoil/ModalAtom";

import Auction from "../../assets/auction.png";
import Gmarket from "../../assets/gmarket.svg";

export default function DefaultModal() {
  const navigate = useNavigate();
  const setIsModalOpen = useSetRecoilState(modalStateAtom);

  const handleClickOutsideModal = () => {
    setIsModalOpen(false);
  };

  // 지마켓 로그인
  const handleClickGmarketLogin = () => {
    navigate("/product-regist");
  };

  // 옥션 로그인
  const handleClickAuctionLogin = () => {
    navigate("/product-list");
  };
  return (
    <ModalContainer onClick={handleClickOutsideModal}>
      <ModalItem onClick={(e) => e.stopPropagation()}>
        <OptionContainer>
          <Button color="green" onClick={handleClickGmarketLogin}>
            <img src={Gmarket} alt="지마켓 로고" /> 지마켓 로그인
          </Button>
          <Button color="red" onClick={handleClickAuctionLogin}>
            <img src={Auction} alt="옥션 로고" /> 옥션 로그인
          </Button>
        </OptionContainer>
      </ModalItem>
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
