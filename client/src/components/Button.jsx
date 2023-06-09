import React from 'react'
import useModal from '../hooks/useModal';
import { RxCross2 } from 'react-icons/rx';

const Button = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>
        Get Started
      </button>
      {isOpen && (
        <div className="bg-[#1a1a1a] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[400px] w-[400px] z-10 rounded-xl">
          <button onClick={closeModal} className='absolute top-[10px] right-[10px] text-[1.8rem] text-white'><RxCross2 /></button>
          <h2 className='flex justify-center text-gradient uppercase mt-1 text-[1.8rem] cursor-default'>Contact us</h2>
          <div className="h-[100%] w-[100%]">
            <form className='flex flex-col h-[100%] w-[100%] absolute top-[50%] left-[50%] translate-x-[-29%] translate-y-[-30%]'>
              <input type="text" placeholder='First Name' className='bg-transparent text-black border-none outline-none rounded-[10px] p-2 mb-2 bg-blue-gradient opacity-70 placeholder:text-black placeholder:text-center placeholder:uppercase w-[60%]' />
              <input type="text" placeholder='Last Name' className='bg-transparent text-black border-none outline-none rounded-[10px] p-2 mb-2 bg-blue-gradient opacity-70 placeholder:text-black placeholder:text-center placeholder:uppercase w-[60%]' />
              <input type="tel" placeholder='Phone Number' className='bg-transparent text-black border-none outline-none rounded-[10px] p-2 mb-2 bg-blue-gradient opacity-70 placeholder:text-black placeholder:text-center placeholder:uppercase w-[60%]' />
              <textarea name="" id="" placeholder='Type your message' cols="10" rows="2" className='text-black border-none outline-none rounded-[10px] resize-none p-2 mb-2 bg-blue-gradient opacity-70 placeholder:text-black placeholder:text-center placeholder:uppercase w-[60%]'></textarea>
              <input type="submit" value="Submit" className='bg-transparent text-black border-none outline-none rounded-[10px] p-2 mb-2 bg-blue-gradient uppercase w-[60%] cursor-pointer'/>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Button
