import React from 'react';
import useModal from '../hooks/useModal';
import { RxCross2 } from 'react-icons/rx';

const Modal = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal} className='bg-white text-black'>Open Modal</button>
      {isOpen && (
        <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[400px] w-[400px]">
          <div className="modal-content">
            <h2>Modal Content</h2>
            <p>This is the modal content.</p>
            <button onClick={closeModal} className='absolute top-[10px] right-[10px]'><RxCross2/></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;