import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { productInfoAtom } from "../recoil/ProductInfoAtom";
import { AiOutlineCamera } from "react-icons/ai";

import DefaultLayout from "../layout/DefaultLayout";

export default function ProductRegist() {
  const productInfo = useRecoilValue(productInfoAtom);
  return (
    <DefaultLayout>
      <FormContainer>
        <ImageContainer>
          <button>
            <AiOutlineCamera />
          </button>
          {productInfo.imgUrl && (
            <img src={productInfo?.imgUrl} alt="상품 사진" />
          )}
        </ImageContainer>
        <input
          placeholder="상품명"
          defaultValue={productInfo.productName && productInfo.productName}
        />
        <input placeholder="카테고리" />
        <input
          placeholder="판매가격"
          defaultValue={productInfo.productPrice && productInfo.productPrice}
        />
        <input placeholder="거래옵션" />
        {!productInfo.productName && (
          <textarea placeholder="- 상품명(브랜드) &#13;- 구매 시기 &#13;- 사용 기간 &#13;- 하자 여부 &#13;* 실제 촬영한 사진과 함께 상세 정보를 입력해주세요. &#13;* 카카오톡 아이디 첨부 시 게시물 삭제 및 이용제재 처리될 수 있어요." />
        )}
        {productInfo.productName && (
          <ProductInfo>
            <p>상품명(브랜드) : {productInfo.productName}</p>
            <p>구매 플랫폼 : {productInfo.platform}</p>
            <p>구매시기 : {productInfo.purchaseDate}</p>
          </ProductInfo>
        )}
      </FormContainer>

      <Button>상품 등록</Button>
    </DefaultLayout>
  );
}

const FormContainer = styled.form`
  padding: 12px 5% 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  input {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  textarea {
    padding: 10px 12px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
`;

const ImageContainer = styled.section`
  display: flex;
  gap: 12px;
  & > img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }

  button {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    border: none;

    svg {
      width: 24px;
      height: 24px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const ProductInfo = styled.div`
  padding: 10px 12px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 300px;
`;

const Button = styled.button`
  background-color: black;
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
