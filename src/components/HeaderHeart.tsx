'use client'

import Link from 'next/link'
import Image from 'next/image'
import black_heart from '../../public/black_heart.svg'
import active_heart from '../../public/active_heart.svg'
import { useFavouritesStore } from '@/store/favStore'

export default function HeaderHeart() {
  const { getFavouriteProducts, setClicked, isClicked } = useFavouritesStore()

  const handleClick = async () => {
    await getFavouriteProducts()

    setClicked(true)
  }

  return (
    <Link href={'/favourites'}>
      <button
        onClick={handleClick}
        className={
          'relative flex items-center gap-2 rounded-full px-4 py-2 font-medium text-primary'
        }
      >
        <div className={'h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]'}>
          <Image src={isClicked ? active_heart : black_heart} />
        </div>
      </button>
    </Link>
  )
}
