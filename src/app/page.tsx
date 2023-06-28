import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='bg-glow-pink w-full flex flex-col'>
      <div className='fixed top-6 left-6 flex w-fit'>
        <Image
          width={109}
          height={113}
          src={'/logo.png'}
          alt='Logo of 52 Elon'
        />
        <Image
          width={303}
          height={113}
          src={'/elonmusk-text.png'}
          alt='Name of 52 Elon'
        />
      </div>
      <div className='h-screen w-full max-w-[1600px] max-h-[1100px] mx-auto flex relative'>
        <Image
          className='absolute bottom-10 -left-12 flex w-3/4 h-auto'
          width={1900}
          height={1000}
          src={'/elonwithcake.png'}
          alt='52 Elon with cake'
        />
        <div className='absolute flex flex-col justify-start items-center right-12 top-24'>
          <Image
            className='flex'
            width={600}
            height={600}
            src={'/hpbd52.png'}
            alt='Happy birhtday 52 Elon'
          />
          <div className='flex mx-auto'>
            <Link
              className='rounded-full bg-[#3B90CD] px-5 py-2 text-white font-bold text-xl'
              href={
                'https://www.pinksale.finance/launchpad/0x2EFac431a2E98020f3Ef5ea75C9Fb544D2d35Ba4?chain=ETH'
              }
              target='_blank'
            >
              CHART
            </Link>
            <Link
              className='rounded-full bg-[#B54D68] ml-3 px-5 py-2 text-white font-bold text-xl'
              href={
                'https://www.pinksale.finance/launchpad/0x2EFac431a2E98020f3Ef5ea75C9Fb544D2d35Ba4?chain=ETH'
              }
              target='_blank'
            >
              PRESALE
            </Link>
            <Link
              className='rounded-full bg-orange-500 ml-3 px-5 py-2 text-white font-bold text-xl'
              href={
                'https://blocksafu.com/audit/0xE636043F8f9E5407f8E70e0D4E71c7F0a0AcD5F8'
              }
              target='_blank'
            >
              AUDIT
            </Link>
          </div>
        </div>
      </div>
      <footer className='w-full fixed bottom-0 bg-[#FA8198] flex justify-center items-center py-2'>
        <Link
          className='rounded-sm bg-[#F95192] w-12 h-12 flex justify-center items-center mr-2'
          href={
            'https://www.pinksale.finance/launchpad/0x2EFac431a2E98020f3Ef5ea75C9Fb544D2d35Ba4?chain=ETH'
          }
          target='_blank'
        >
          <Image
            width={28}
            height={28}
            src={'/pinksale.png'}
            alt='PinkSale of 52 Elon'
          />
        </Link>
        <Link
          className='rounded-sm bg-[#34AADF] w-12 h-12 flex justify-center items-center mr-2'
          href={'https://t.me/happy52thelonportal'}
          target='_blank'
        >
          <FaTelegram size={26} color={'white'} />
        </Link>
        <Link
          className='rounded-sm bg-[#33CCFF] w-12 h-12 flex justify-center items-center'
          href={'https://twitter.com/52thElon'}
          target='_blank'
        >
          <FaTwitter size={24} color={'white'} />
        </Link>
      </footer>
    </main>
  );
}
