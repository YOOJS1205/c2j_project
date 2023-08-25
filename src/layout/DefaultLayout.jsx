import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useSetRecoilState, useResetRecoilState } from "recoil";

import {
  PiMagnifyingGlass,
  PiBell,
  PiListMagnifyingGlassDuotone,
} from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { RiHome5Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsChatDots, BsPerson } from "react-icons/bs";

import Logo from "../assets/logo.svg";
import { modalStateAtom } from "../recoil/ModalAtom";
import { productInfoAtom } from "../recoil/ProductInfoAtom";

export default function DefaultLayout({ children, isFooter }) {
  const navigate = useNavigate();
  const location = useLocation();
  const setIsModalOpen = useSetRecoilState(modalStateAtom);
  const resetProductInfo = useResetRecoilState(productInfoAtom);

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickProductRegistButton = () => {
    setIsModalOpen(true);
  };

  const handleClickGoBack = () => {
    navigate(-1);
    setIsModalOpen(false);
  };
  return (
    <Container>
      {location.pathname === "/" && (
        <Header>
          <img src={Logo} alt="중고나라 로고" onClick={handleClickLogo} />
          <FuncContainer>
            <PiMagnifyingGlass />
            <PiBell />
          </FuncContainer>
        </Header>
      )}

      {location.pathname === "/product-list" && (
        <Header>
          <IoIosArrowBack
            onClick={() => {
              handleClickGoBack();
              resetProductInfo();
            }}
            style={{ cursor: "pointer" }}
          />
          <h1 style={{ fontWeight: "600" }}>내 상품목록</h1>
          <p style={{ width: "24px" }}></p>
        </Header>
      )}

      {location.pathname === "/product-regist" && (
        <Header>
          <IoIosArrowBack
            onClick={() => {
              handleClickGoBack();
              resetProductInfo();
            }}
            style={{ cursor: "pointer" }}
          />
          <h1 style={{ fontWeight: "600" }}>상품 등록</h1>
          <p style={{ width: "24px" }}></p>
        </Header>
      )}

      {location.pathname === "/product-detail" && (
        <Header>
          <IoIosArrowBack
            onClick={() => {
              resetProductInfo();
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />
        </Header>
      )}

      <div
        style={{
          height: isFooter ? "calc(100% - 128px)" : "calc(100% - 64px)",
          overflow: "scroll",
        }}
      >
        {children}
      </div>

      {isFooter && (
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
      )}
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
