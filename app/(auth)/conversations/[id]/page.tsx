'use client'

import clsx from 'clsx'

import useConversation from '@/app/hooks/useConversation'
import EmptyState from '@/app/components/emptyState/EmptyState'

export default function Home() {
  const { isOpen } = useConversation()

  return (
    <div>
      <EmptyState />
    </div>
  )
}
