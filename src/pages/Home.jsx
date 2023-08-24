import React from "react";
import { useRecoilState } from "recoil";

import DefaultLayout from "../layout/DefaultLayout";
import ModalPortal from "../components/modal/ModalPortal";
import DefaultModal from "../components/modal/DefaultModal";
import { modalStateAtom } from "../recoil/ModalAtom";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalStateAtom);
  return (
    <DefaultLayout>
      Home
      <ModalPortal>{isModalOpen && <DefaultModal />}</ModalPortal>
    </DefaultLayout>
  );
}
