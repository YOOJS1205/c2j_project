import React from "react";
import { useRecoilState } from "recoil";

import DefaultLayout from "../layout/DefaultLayout";
import ModalPortal from "../components/modal/ModalPortal";
import DefaultModal from "../components/modal/DefaultModal";
import { modalStateAtom } from "../recoil/ModalAtom";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalStateAtom);
  return (
    <DefaultLayout isFooter={true}>
      <img
        src="/asset/screenshot.jpeg"
        alt="홈 화면 이미지"
        width={480}
        height={850}
      />
      <ModalPortal>{isModalOpen && <DefaultModal />}</ModalPortal>
    </DefaultLayout>
  );
}
