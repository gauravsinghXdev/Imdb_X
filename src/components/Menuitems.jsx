import Link from 'next/link'

export default function Menuitems({ title, address, Icon }) {
  return (
    <Link href={address} className=''>
      <span className='text-2xl sm:hidden'>{Icon}</span>
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

