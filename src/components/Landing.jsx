import Typed from 'react-typed'

export default function Landing() {
    return (
        <>
            <div className='h-screen gradient w-full text-white flex flex-col'>
                <div className='p-6 absolute w-full space-x-4 text-center font-medium'>
                    <a href='#products' className='whitespace-no-wrap'>
                        Featured Products
                    </a>
                    <a href='#news'>News</a>
                    <a href='#reviews'>Reviews</a>
                </div>
                <div className='m-auto max-w-xl p-6 w-full space-y-4 text-shadow-lg'>
                    <div className='flex'>
                        <img className='w-24' src='/img/logo-white.png' alt='' />
                        <div className='ml-auto' />
                        <div>
                            <p className='px-2 py-1 bg-white rounded text-xs text-red-400 font-medium animate-pulse'>
                                NEW!
                            </p>
                        </div>
                    </div>
                    <h1 className='text-4xl font-extrabold'>
                        Always have the upper hand with <span className=''>LastCheat</span>.
                    </h1>
                    <p className='font-mono text-lg'>
                        <Typed
                            strings={[`Reliable cheats`, `Undetectable hacks`, `Multiple platforms`]}
                            typeSpeed={30}
                            backSpeed={20}
                            loop
                        />
                    </p>
                </div>
            </div>
        </>
    )
}
