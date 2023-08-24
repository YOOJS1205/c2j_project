import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { productInfoAtom } from "../recoil/ProductInfoAtom";
import ModalPortal from "../components/modal/ModalPortal";
import SnsModal from "../components/modal/SnsModal";
import { AiOutlineRight } from "react-icons/ai";

import DefaultLayout from "../layout/DefaultLayout";
import ProductItem from "../components/myProductList/ProductItem";
import {
  myProductList,
  myProductListAfterGmarketLogin,
} from "../const/myProductList";
import { modalStateAtom } from "../recoil/ModalAtom";
import { gmarketLoginAtom } from "../recoil/gmarketLoginAtom";

export default function MyProductList() {
  const navigate = useNavigate();
  const productInfo = useRecoilValue(productInfoAtom);
  const isGmarketLogin = useRecoilValue(gmarketLoginAtom);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalStateAtom);
  const handleClickProductReigst = () => {
    navigate("/product-regist");
  };
  return (
    <DefaultLayout isFooter={false}>
      <InfoContainer onClick={() => setIsModalOpen((prev) => !prev)}>
        <h2>플랫폼 로그인을 통해 내 상품을 가져와보세요!</h2>
        <AiOutlineRight />
      </InfoContainer>
      <ProductContainer>
        {(isGmarketLogin ? myProductListAfterGmarketLogin : myProductList).map(
          (item) => (
            <ProductItem
              key={item.id}
              imgUrl={item.imgUrl}
              productName={item.productName}
              productPrice={item.productPrice}
              productPlatform={item.productPlatform}
              purchaseDate={item.purchaseDate}
              platform={item.platform}
              url={item.url}
            />
          )
        )}
      </ProductContainer>
      <Button
        onClick={handleClickProductReigst}
        enabled={productInfo.productName}
        disabled={!productInfo.productName}
      >
        상품등록
      </Button>
      <ModalPortal>{isModalOpen && <SnsModal />}</ModalPortal>
    </DefaultLayout>
  );
}

const InfoContainer = styled.section`
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;

  h2 {
    font-weight: 600;
    font-size: 18px;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 5%;
`;

const Button = styled.button`
  background-color: ${({ enabled }) =>
    enabled ? "black" : "rgba(0, 0, 0, 0.3)"};
  color: white;
  width: calc(480px * 0.9);
  display: block;
  margin: 0 auto;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  border: none;
  padding: 12px 0;
  border-radius: 8px;
  font-weight: 600;
`;
