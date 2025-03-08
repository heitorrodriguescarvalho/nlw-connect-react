import medalCooper from '@/assets/medal-cooper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'
import { getRanking } from '@/http/api'
import Image from 'next/image'

const medals = [
  {
    image: medalGold,
    label: 'Gold medal',
  },
  {
    image: medalSilver,
    label: 'Silver medal',
  },
  {
    image: medalCooper,
    label: 'Cooper medal',
  },
]

export default async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de Indicações
      </h2>
      <div className="space-y-4">
        {ranking.map(({ id, name, score }, index) => (
          <div
            key={id}
            className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6"
          >
            <span className="text-gray-300 text-sm leading-none">
              <span className="font-semibold">{index + 1}º</span> | {name}
            </span>
            <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
              {score}
            </span>
            <Image
              src={medals[index].image}
              alt={medals[index].label}
              width={40}
              height={40}
              className="absolute top-0 right-8"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
