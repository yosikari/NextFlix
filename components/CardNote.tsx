import { useState } from 'react'

import { CheckIcon } from '@heroicons/react/24/solid'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { AiOutlineCopy } from 'react-icons/ai'

function CardNote() {
    const [isClipboardCard, setIsClipboardCard] = useState(false)
    const [isClipboardCVC, setIsClipboardCVC] = useState(false)
    const [isClipboardDate, setIsClipboardDate] = useState(false)

  return (
    <div className='text-left border m-auto rounded p-4' >
    <div className='flex justify-center'>
        <HiOutlineInformationCircle className='h-6 w-6 mr-1 mt-0.5' />
        <p className='text-xl'> Note - try test visa card:</p>
    </div>
    <div
        onClick={() => {
            navigator.clipboard.writeText('4242 4242 4242 4242')
            setIsClipboardCard(true)
        }}
        className='flex justify-left cursor-pointer mt-2'
        title='Copy'
    >
        <AiOutlineCopy className='h-4 w-4 mr-1 mt-1' />
        <p>Card 4242 4242 4242 4242 </p>
        {isClipboardCard &&
            <CheckIcon className="h-5 w-5 ml-1 mt-0.5 text-[#1fe509]" />
        }
    </div>
    <div
        onClick={() => {
            navigator.clipboard.writeText('424')
            setIsClipboardCVC(true)
        }}
        className='flex justify-left cursor-pointer mt-2'
        title='Copy'
    >
        <AiOutlineCopy className='h-4 w-4 mr-1 mt-1' />
        <p>CVC Any 3 digits</p>
        {isClipboardCVC &&
            <CheckIcon className="h-5 w-5 ml-1 mt-0.5 text-[#1fe509]" />
        }
    </div>
    <div
        onClick={() => {
            navigator.clipboard.writeText('4444')
            setIsClipboardDate(true)
        }}
        className='flex justify-left cursor-pointer mt-2'
        title='Copy'
    >
        <AiOutlineCopy className='h-4 w-4 mr-1 mt-1' />
        <p> Date Any future date</p>
        {isClipboardDate &&
            <CheckIcon className="h-5 w-5 ml-1 mt-0.5 text-[#1fe509]" />
        }
    </div>
</div >
  )
}

export default CardNote