import medalCooper from '@/assets/medal-cooper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'
import Image from 'next/image'

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de Indicações
      </h2>
      <div className="space-y-4">
        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-gray-300 text-sm leading-none">
            <span className="font-semibold">1º</span> | Heitor Rodrigues
          </span>
          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1030
          </span>
          <Image
            src={medalGold}
            alt="Gold medal"
            width={40}
            height={40}
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-gray-300 text-sm leading-none">
            <span className="font-semibold">2º</span> | Heitor Rodrigues
          </span>
          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1030
          </span>
          <Image
            src={medalSilver}
            alt="Silver medal"
            width={40}
            height={40}
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-gray-300 text-sm leading-none">
            <span className="font-semibold">3º</span> | Heitor Rodrigues
          </span>
          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1030
          </span>
          <Image
            src={medalCooper}
            alt="Cooper medal"
            width={40}
            height={40}
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
