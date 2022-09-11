import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../hooks";
import { setOpenModal } from "./reducer";
import { ApplicationModal } from "./reducer";
import { AppState } from "../store";

export function useModalIsOpen(modal: ApplicationModal): boolean {
  const openModal = useAppSelector(
    (state: AppState) => state.application.openModal
  );
  return openModal === modal;
}

export function useOpenModal(modal: ApplicationModal): () => void {
  const dispatch = useAppDispatch();
  return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal]);
}

export function useCloseModal(_modal: ApplicationModal): () => void {
  const dispatch = useAppDispatch();
  return useCallback(() => dispatch(setOpenModal(null)), [dispatch]);
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const isOpen = useModalIsOpen(modal);
  const dispatch = useAppDispatch();
  return useCallback(
    () => dispatch(setOpenModal(isOpen ? null : modal)),
    [dispatch, modal, isOpen]
  );
}
