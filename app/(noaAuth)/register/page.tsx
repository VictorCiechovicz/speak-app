import Image from 'next/image'
import Logo from '../../../public/images/logo.png'
import AuthForm from '@/app/(noaAuth)/components/AuthForm'

export default function Register() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Image
            alt="logo"
            height="58"
            width="58"
            className="mx:auto w-auto"
            src={Logo}
          />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  )
}
