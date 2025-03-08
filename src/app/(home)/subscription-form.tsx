'use client'

import Button from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { subscribeToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export default function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  const handleSubscribe = async ({ name, email }: SubscriptionSchema) => {
    const referrer = searchParams.get('referrer')

    const { subscriberId } = await subscribeToEvent({ name, email, referrer })

    router.push(`/invite/${subscriberId}`)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubscribe)}
      className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 lg:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField placeholder="Nome completo" {...register('name')} />
          </InputRoot>

          {errors.name && (
            <p className="font-semibold text-danger text-xs">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>

          {errors.email && (
            <p className="font-semibold text-danger text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}

export function SubscriptionFormFallback() {
  return (
    <form className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 lg:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField placeholder="Nome completo" disabled />
          </InputRoot>
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField type="email" placeholder="E-mail" disabled />
          </InputRoot>
        </div>
      </div>

      <Button type="submit" disabled>
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
