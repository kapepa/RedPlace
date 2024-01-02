import Link from 'next/link'
import { RouterEnum } from '@/shared/enum/router.enum'
import { ImgIco } from '@/shared/ui/ImgIco'

const Logo = () => {
  return (
    <Link className='flex items-center gap-2' href={RouterEnum.HOME}>
      <ImgIco  ico='Sprout' width={50} height={50} />
      <span className='text-2xl font-bol'>Red Place</span>
    </Link>
  )
}

export { Logo };