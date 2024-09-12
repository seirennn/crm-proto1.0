'use client'; // This tells Next.js that this component should be client-side rendered.

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useGlobalContext } from '@/app/context/store'
import { Input } from './ui/input'
import Icons from './Icons'
import { SIGNIN } from '@/app/constants'

// Define the schema for form validation
const formSchema = z.object({
  username: z.string().trim().min(3, {
    message: 'Username must be at least 3 characters',
  }),
  password: z.string().trim().min(8, {
    message: 'Password must be at least 8 characters',
  }),
})

const UserAuthForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { isLogin, setUsername, setIsLogin } = useGlobalContext()
  const router = useRouter()

  // Set up the form using react-hook-form and zod for validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setTimeout(() => {
      setUsername(values.username)
      setIsLogin(true)
      router.push('/page')
    }, 1000)
  }

  // Redirect to home if already logged in
  useLayoutEffect(() => {
    if (isLogin) {
      router.push('/page')
    }
  }, [isLogin, router])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Username' {...field} disabled={isLoading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Password'
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full border border-gray-50 hover:bg-gray-50 bg-zinc-1000 text-white-800" type="submit" disabled={isLoading}>
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          {SIGNIN}
        </Button>
      </form>
    </Form>
  )
}

export default UserAuthForm

