import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import {
  PiMagnifyingGlass,
  PiBell,
  PiListMagnifyingGlassDuotone,
} from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsChatDots, BsPerson } from "react-icons/bs";

import Logo from "../assets/logo.svg";
import { modalStateAtom } from "../recoil/ModalAtom";

export default function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const setIsModalOpen = useSetRecoilState(modalStateAtom);

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickProductRegistButton = () => {
    setIsModalOpen(true);
  };
  return (
    <Container>
      <Header>
        <img src={Logo} alt="중고나라 로고" onClick={handleClickLogo} />
        <FuncContainer>
          <PiMagnifyingGlass />
          <PiBell />
        </FuncContainer>
      </Header>
      {children}
      <Footer>
        <div>
          <RiHome5Line />
          <p>홈</p>
        </div>
        <div>
          <PiListMagnifyingGlassDuotone />
          <p>검색</p>
        </div>
        <div onClick={handleClickProductRegistButton}>
          <AiOutlinePlusCircle />
          <p>등록</p>
        </div>
        <div>
          <BsChatDots />
          <p>채팅</p>
        </div>
        <div>
          <BsPerson />
          <p>마이</p>
        </div>
      </Footer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const FuncContainer = styled.article`
  display: flex;
  gap: 8px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  width: 100%;
  height: 64px;

  img {
    cursor: pointer;
    width: 200px;
    height: 40px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;

  div {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
