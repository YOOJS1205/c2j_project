import React from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productInfoAtom } from "../recoil/ProductInfoAtom";
import { AiOutlineCamera } from "react-icons/ai";
import { useForm } from "react-hook-form";

import DefaultLayout from "../layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
import { newProductInfoAtom } from "../recoil/NewProductInfoAtom";

export default function ProductRegist() {
  const navigate = useNavigate();
  const productInfo = useRecoilValue(productInfoAtom);
  const setNewProductInfo = useSetRecoilState(newProductInfoAtom);

  const { register, handleSubmit, getValues, watch } = useForm({
    defaultValues: {
      productName: productInfo.productName ? productInfo.productName : "",
      productImgUrl: productInfo.productName ? productInfo.imgUrl : "",
      productPrice: productInfo.productName ? productInfo.productPrice : "",
      productDescription: productInfo.productName
        ? `상품명(브랜드) : ${productInfo.productName} \n구매 플랫폼 : ${productInfo.platform} \n구매시기 : ${productInfo.purchaseDate}`
        : "",
    },
  });

  const handleClickProductRegistButton = () => {
    setNewProductInfo((prev) => ({ ...prev, ...getValues() }));
    navigate("/product-detail");
  };

  return (
    <DefaultLayout>
      <FormContainer>
        <ImageContainer>
          <button>
            <AiOutlineCamera />
          </button>
          {productInfo.imgUrl && (
            <img
              {...register("productImgUrl")}
              src={productInfo?.imgUrl}
              alt="상품 사진"
            />
          )}
        </ImageContainer>
        <input {...register("productName")} placeholder="상품명" />
        <input placeholder="카테고리" />
        <input
          {...register("productPrice")}
          placeholder="판매가격"
          defaultValue={watch("productPrice")}
        />
        <input
          type="range"
          {...register("productPrice")}
          onInput={(e) => console.log(e.target.value)}
          min={0}
          step={1000}
          max={Number(productInfo.productPrice.replace(",", "")) * 1.2}
          defaultValue={Number(productInfo.productPrice.replace(",", ""))}
        />
        <input placeholder="거래옵션" />
        {!productInfo.productName && (
          <textarea
            {...register("productDescription")}
            placeholder="- 상품명(브랜드) &#13;- 구매 시기 &#13;- 사용 기간 &#13;- 하자 여부 &#13;* 실제 촬영한 사진과 함께 상세 정보를 입력해주세요. &#13;* 카카오톡 아이디 첨부 시 게시물 삭제 및 이용제재 처리될 수 있어요."
          />
        )}
        {productInfo.productName && (
          <textarea
            {...register("productDescription")}
            placeholder="- 상품명(브랜드) &#13;- 구매 시기 &#13;- 사용 기간 &#13;- 하자 여부 &#13;* 실제 촬영한 사진과 함께 상세 정보를 입력해주세요. &#13;* 카카오톡 아이디 첨부 시 게시물 삭제 및 이용제재 처리될 수 있어요."
          />
        )}
      </FormContainer>

      <Button onClick={handleClickProductRegistButton}>상품 등록</Button>
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
    height: 300px;
    font-family: sans-serif;
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
