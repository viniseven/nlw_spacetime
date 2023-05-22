import { getUser } from '@/lib/auth'

import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="text-lef flex items-center gap-3">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
