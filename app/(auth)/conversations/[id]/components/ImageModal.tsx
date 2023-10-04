'use client'

import React, { useCallback, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FiAlertTriangle } from 'react-icons/fi'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import useConversation from '@/app/hooks/useConversation'
import { toast } from 'react-hot-toast'
import Button from '@/app/components/button/Button'
import Modal from '@/app/components/modals/Modal'
import Image from 'next/image'

interface ImageModalProps {
  src?: string | null
  isOpen?: boolean
  onClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
   return null
 }

  return <Modal isOpen={isOpen} onClose={onClose}>
    <div className='w-80 h-96'>
      <Image
        alt="image"
        className='object-cover'
        fill
        src={src}
      />
      
</div>

  </Modal>
}

export default ImageModal
