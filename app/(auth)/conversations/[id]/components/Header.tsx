'use client'

import useOtherUser from '@/app/hooks/useOtherUser'
import Link from 'next/link'
import { Conversation, User } from '@prisma/client'
import { useMemo } from 'react'
import { HiChevronDoubleDown } from 'react-icons/hi2'

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
}

export default function Header({ conversation }: HeaderProps) {
  const otherUser = useOtherUser(conversation)
  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`
    }
    return 'Active'
  }, [conversation])

  return (
    <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <Link
          className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer "
          href="/conversation"
        >
          <HiChevronDoubleDown size={32} />
        </Link>
      </div>
    </div>
  )
}
