import SideBar from '@/app/components/sideBar/SideBar'
import ConversationList from './components/ConversationList'
import getConversations from '@/app/actions/getConversations'
import getUsers from '@/app/actions/getUsers'

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode
}) {
  const conversations = await getConversations()
const users= await getUsers()
  return (
    <SideBar>
      <div className="h-full">
        <ConversationList
          users={users}
          initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  )
}
