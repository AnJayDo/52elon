import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='bg-glow-pink w-full flex flex-col overflow-x-hidden'>
      <div className='fixed top-6 left-6 flex w-fit z-10'>
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
      <div className='min-h-screen w-full max-w-[1600px] max-h-[1100px] mx-auto flex relative'>
        <Image
          className='absolute bottom-10 -left-12 flex w-full scale-150 md:scale-100 md:w-3/4 h-auto'
          width={1900}
          height={1000}
          src={'/elonwithcake.png'}
          alt='52 Elon with cake'
        />
        <div className='md:absolute flex flex-col justify-start items-center mx-auto mt-32 md:mt-0 md:right-12 md:top-24'>
          <Image
            className='flex'
            width={600}
            height={600}
            src={'/hpbd52.png'}
            alt='Happy birhtday 52 Elon'
          />
          <div className='flex mx-auto'>
            <Link
              className='rounded-full border-4 border-[#3B90CD] bg-gradient-to-b from-[#81C8FB] to-[#5EADE6] px-5 py-2 text-white font-bold text-xl'
              href={
                'https://www.pinksale.finance/launchpad/0x2EFac431a2E98020f3Ef5ea75C9Fb544D2d35Ba4?chain=ETH'
              }
              target='_blank'
            >
              CHART
            </Link>
            <Link
              className='rounded-full border-4 border-[#B54D68] bg-gradient-to-b from-[#FF8B9F] to-[#E65E7D] ml-3 px-5 py-2 text-white font-bold text-xl'
              href={
                'https://www.pinksale.finance/launchpad/0x2EFac431a2E98020f3Ef5ea75C9Fb544D2d35Ba4?chain=ETH'
              }
              target='_blank'
            >
              PRESALE
            </Link>
            <Link
              className='rounded-full border-4 border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 ml-3 px-5 py-2 text-white font-bold text-xl'
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
      <div className='my-24 lg:my-0 min-h-screen w-full mx-auto flex relative'>
        <div className='flex flex-col lg:flex-row mx-auto my-auto'>
          <div className='lg:mr-24'>
            <Image width={600} height={600} src={'/tokenomics.png'} alt="Tokenomics of 50 Elon"/>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-5xl text-shadow-2C3970'>PRESALE</h1>
            <div className='px-6 py-4 rounded-xl bg-gradient-to-b from-[#FF8B9F] to-[#E65E7D] mt-5'>
              <table className='presale table-auto text-white text-xl'>
                <tbody>
                  <tr>
                    <td className='font-extrabold'>Total supply</td>
                    <td className='font-extrabold'>1.000.000.000.0000</td>
                  </tr>
                  <tr>
                    <td>Fairlaunch</td>
                    <td>500.000.000.000</td>
                  </tr>
                  <tr>
                    <td>Add lp</td>
                    <td>250.000.000.000</td>
                  </tr>
                  <tr>
                    <td>Marketing</td>
                    <td>200.000.000.000</td>
                  </tr>
                  <tr>
                    <td>Team</td>
                    <td>50.000.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <footer className='w-full fixed bottom-0 bg-[#FA8198] flex justify-center items-center py-2'>
        <Link
          className='rounded-md bg-[#F95192] w-12 h-12 flex justify-center items-center mr-2'
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
          className='rounded-md bg-[#34AADF] w-12 h-12 flex justify-center items-center mr-2'
          href={'https://t.me/happy52thelonportal'}
          target='_blank'
        >
          <FaTelegram size={28} color={'white'} />
        </Link>
        <Link
          className='rounded-md bg-[#33CCFF] w-12 h-12 flex justify-center items-center'
          href={'https://twitter.com/52thElon'}
          target='_blank'
        >
          <FaTwitter size={24} color={'white'} />
        </Link>
      </footer>
    </main>
  );
}
