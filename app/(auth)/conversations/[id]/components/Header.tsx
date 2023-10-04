'use client'

import useOtherUser from '@/app/hooks/useOtherUser'
import { Conversation, User } from '@prisma/client'
import { useMemo, useState } from 'react'
import { HiEllipsisHorizontal, HiChevronLeft } from 'react-icons/hi2'
import Avatar from '@/app/components/avatar/Avatar'
import { useRouter } from 'next/navigation'
import ProfileDrawer from './ProfileDrawer'
import AvatarGroup from '@/app/components/avatar/AvatarGroup'
import useActiveList from '@/app/hooks/useActiveList'

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
}

export default function Header({ conversation }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const otherUser = useOtherUser(conversation)
  const router = useRouter()

  const { members } = useActiveList()
  const isActive = members.indexOf(otherUser?.email!) !== -1

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`
    }
    return isActive ? 'Active' : 'Offline'
  }, [conversation, isActive])

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
        <div className="flex gap-3 items-center">
          <HiChevronLeft
            size={32}
            className="text-orange-500 hover:text-orange-600 transition cursor-pointer "
            onClick={() => router.push('/conversation')}
          />
          {conversation.isGroup ? (
            <AvatarGroup users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )}

          <div className="flex flex-col">
            <div>{conversation?.name || otherUser?.name}</div>
            <div className="text-sm font-light text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>

        <HiEllipsisHorizontal
          size={32}
          onClick={() => setDrawerOpen(true)}
          className="text-orange-500 hover:text-orange-600  transition cursor-pointer "
        />
      </div>
    </>
  )
}
