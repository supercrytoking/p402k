import Typed from 'react-typed'

export default function Landing() {
    return (
        <>
            <div
                className='flex border-b px-6 border-gray-800 shadow-xl relative z-20 h-screen w-full text-white flex-col bg-cover bg-center'
                style={{
                    backgroundImage: 'url("/img/pexels-lucie-liz-3165335.jpg")'
                    // borderRadius: '0 0 50% 50% / 50px'
                }}>
                <div className='absolute z-0 inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80' />

                <div className='m-auto max-w-2xl text-center space-y-8 relative z-10'>
                    <h3 className='opacity-50 uppercase font-extrabold text-sm tracking-widest'>LastCheat.io</h3>
                    <h1 className='font-extrabold text-4xl sm:text-7xl'>
                        Always have the upper hand with <span className=''>LastCheat</span>.
                    </h1>
                    <h2 className='text-xl sm:text-2xl font-mono'>
                        <Typed
                            strings={[`Reliable cheats`, `Undetectable hacks`, `Multiple platforms`]}
                            typeSpeed={30}
                            backSpeed={20}
                            loop
                        />
                    </h2>

                    <div className='buttons flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-4 sm:space-y-0'>
                        <a
                            className='block px-4 py-2 rounded border-4 border-white bg-white text-purple-900 font-extrabold uppercase'
                            href='#products'>
                            <span className='align-middle'>Products</span>
                            <svg
                                className='w-5  ml-2 inline-block align-middle'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                                />
                            </svg>
                        </a>
                        <a
                            className='block px-4 py-2 rounded border-4 border-white text-white font-extrabold uppercase'
                            href='#reviews'>
                            <span className='align-middle'>Features</span>
                            <svg
                                className='w-5  ml-2 inline-block align-middle'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'>
                                <path
                                    fillRule='evenodd'
                                    d='M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* <div className='p-6 absolute w-full space-x-4 text-center font-medium'>
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
                </div> */}
            </div>

            <div className='h-1 bg-gradient-to-br from-purple-600 via-pink-600 to-red-700'></div>
        </>
    )
}
