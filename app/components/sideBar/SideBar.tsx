import getCurrentUser from '@/app/actions/getCurrentUser'
import DesktopSideBar from './DesktopSideBar'
import MobileFooter from './MobileFooter'

export default async function SideBar({
  children
}: {
  children: React.ReactNode
}) {
  const currentuser = await getCurrentUser()

  return (
    <div className="h-full">
      <DesktopSideBar currentUser={currentuser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  )
}
