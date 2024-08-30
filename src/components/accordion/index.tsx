import { CaretDown, CaretUp, Minus, Plus } from '@phosphor-icons/react';
import React, { useState } from 'react';

// Define the props interface
interface AccordionProps {
  title: string;
  children: React.ReactNode; // Allows any valid React children
}

// Accordion component
const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b border-[#C4C4C4] bg-white ${isOpen ? 'mb-2' : ''}`}>
      <div
        className="w-full py-6 cursor-pointer flex gap-6 items-start"
        onClick={toggleAccordion}
      >
        <div className='bg-[#520B1F] p-2 text-white rounded-full'>{isOpen ? <Minus size={24} weight='bold' /> : <Plus size={24} weight='bold' />}</div>
        <div><div className='font-bold text-xl text-[#2B1139] lg:text-2xl pt-1 mb-4'>{title}</div>
        <div
        className={` overflow-hidden text-sm transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}
      >
        {children}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;