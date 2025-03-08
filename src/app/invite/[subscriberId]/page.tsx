import InviteLinkInput from '@/app/invite/[subscriberId]/invite-link-input'
import Ranking from '@/app/invite/[subscriberId]/ranking'
import Stats from '@/app/invite/[subscriberId]/stats'
import logo from '@/assets/logo.svg'
import Image from 'next/image'

interface InvitePageProps {
  params: Promise<{
    subscriberId: string
  }>
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { subscriberId } = await params

  const inviteLink = `${process.env.NEXT_PUBLIC_API_URL}/invites/${subscriberId}`

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between gap-16 lg:flex-row">
      <div className="flex w-full max-w-[550px] flex-col gap-10">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="font-heading font-semibold text-4xl text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acess o link enviado no seu email.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas e concorra a prêmios!
              <br />
              Compartilhe o link e acompanhe as inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats subscriberId={subscriberId} />
        </div>
      </div>

      <Ranking />
    </div>
  )
}
