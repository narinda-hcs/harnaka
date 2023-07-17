import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className=" min-h-screen flex flex-col items-center justify-center">
        <Image 
          src="/HCS.png"
          width={250}
          height={500}
          alt='harnaka cristal sejahtra'
          className=''
        />
        <h2 className='text-center text-9xl font-extrabold'>HCS</h2>
        <h2 className='text-center text-2xl'>Kebutuhan anda prioritas kami.</h2>
      </div>
    </main>
  )
}
