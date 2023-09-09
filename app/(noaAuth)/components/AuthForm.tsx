'use client'

import axios from 'axios'
import Button from '@/app/components/button/Button'
import Input from '@/app/components/inputs/input'
import { useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import AuthSocialButton from './AuthSocialButton'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'
interface AuthFormProps {
  isLogin?: boolean
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true)
    if (isLogin) {
      signIn('credentials', {
        ...data,
        redirect: false
      })
        .then(callback => {
          if (callback?.error) {
            toast.error('Invalid credentials')
          }

          if (callback?.ok && !callback?.error) {
            toast.success('Logged In!')
          }
        })
        .finally(() => setIsLoading(false))
    }
    if (!isLogin) {
      axios
        .post('/api/register', data)
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false))
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)
    //nextsocila login
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
          {!isLogin ? (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          ) : null}

          <Input
            id="email"
            label="Email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {isLogin ? 'SignIn' : 'Register'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>{isLogin ? 'New to SpeakApp?' : 'Already have an account?'}</div>
          <div
            className="underline cursor-pointer"
            onClick={() => router.push(isLogin ? '/register' : '/login')}
          >
            {isLogin ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  )
}
