'use client'

import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Users() {



  return (
    <div>
      <button onClick={() => signOut()}>SignOut</button>
      Hello User!
    </div>
  )
}
