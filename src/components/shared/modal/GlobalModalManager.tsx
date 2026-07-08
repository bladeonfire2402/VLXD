'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { closeModal } from '@/store/slices/modalSlice';
import { MODAL_COMPONENTS } from './ModalRegistry';

export function GlobalModalManager() {
  const dispatch = useDispatch();
  const { isOpen, modalType, modalProps } = useSelector(
    (state: RootState) => state.modal
  );

  if (!isOpen || !modalType) return null;

  const SpecificModal = MODAL_COMPONENTS[modalType];
  
  if (!SpecificModal) {
    console.warn(`Modal component '${modalType}' chưa được đăng ký trong ModalRegistry.`);
    return null;
  }

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal-layer-overlay">
      <div className="modal-layer-backdrop" onClick={handleClose}></div>
      <div className="modal-layer-content">
        <SpecificModal {...modalProps} />
        <button className="modal-layer-close-btn" onClick={handleClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
