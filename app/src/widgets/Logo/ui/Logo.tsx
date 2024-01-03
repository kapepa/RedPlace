import Link from 'next/link'
import { RouterEnum } from '@/shared/enum/router.enum'
import { ImgIco } from '@/shared/ui/ImgIco'
import { FC } from 'react'
import classNames from 'classnames'

interface LogoProps {
  className?: string,
}

const Logo: FC<LogoProps> = (props) => {
  const { className } = props;

  return (
    <Link className={classNames( className, 'flex items-center gap-2')} href={RouterEnum.HOME}>
      <ImgIco  ico='Sprout' width={50} height={50} />
      <span className='text-2xl font-bol space-nowrap'>Red Place</span>
    </Link>
  )
}

export { Logo };