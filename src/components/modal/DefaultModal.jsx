import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "../../recoil/ModalAtom";

export default function DefaultModal() {
  const navigate = useNavigate();
  const setIsModalOpen = useSetRecoilState(modalStateAtom);
  const handleClickOutsideModal = () => {
    setIsModalOpen(false);
  };

  // 새로 등록하기
  const handleClickNewRegist = () => {
    navigate("/product-regist");
    setIsModalOpen((prev) => !prev);
  };

  // 플랫폼 상품 등록하기
  const handleClickPlatformRegist = () => {
    navigate("/product-list");
    setIsModalOpen((prev) => !prev);
  };
  return (
    <ModalContainer onClick={handleClickOutsideModal}>
      <ModalItem onClick={(e) => e.stopPropagation()}>
        <ModalTitle>상품 등록 유형을 선택하세요.</ModalTitle>
        <OptionContainer>
          <Option onClick={handleClickNewRegist}>
            <h3>새로 등록하기</h3>
            <p>자체 상품을 등록합니다.</p>
          </Option>
          <Option onClick={handleClickPlatformRegist}>
            <h3>플랫폼 상품 등록하기</h3>
            <p>타 플랫폼에서 구매한 상품을 등록합니다.</p>
          </Option>
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
