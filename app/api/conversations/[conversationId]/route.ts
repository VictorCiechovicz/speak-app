import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb'


interface IParams {
  conversationId?: string
}


export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {

  try {
    const currentUser = await getCurrentUser()
    const { conversationId } = params

    if (!currentUser?.id || !currentUser.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }


    const existingConversations = await prisma.conversation.findUnique({
      where: {
        id: conversationId
      },
      include: {
        users: true
      }
    })

    if (!existingConversations) {
      return new NextResponse('Conversation not existing', { status: 400 });
    }


    const deleteConversation = await prisma.conversation.deleteMany({
      where: {
        id: conversationId,
        userIds: {
          hasSome: [currentUser.id]
        }
      }
    })

    return NextResponse.json(deleteConversation);
  } catch (error: any) {
    console.log(error, "ERROR_CONVERSATION_DELETE")
    return new NextResponse('Internal Error', { status: 500 });
  }

}