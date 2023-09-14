import getConversationById from '@/app/actions/getConversationById'
import getMessages from '@/app/actions/getMessages'
import EmptyState from '@/app/components/emptyState/EmptyState'
import Header from './components/Header'
import Body from './components/Body'
import Form from './components/Form'

interface ConversationProps {
  params: {
    id: string
  }
}

export default async function Conversation({ params }: ConversationProps) {
  const conversation = await getConversationById(params.id)
  const messages = await getMessages(params.id)

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    )
  }
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body />
        <Form />
      </div>
    </div>
  )
}
