import { defaults } from 'autoprefixer'

export default function CallToAction() {
    return (
        <>
            <a
                href='https://onlyfans.plus/'
                className='block bg-gradient-to-br from-purple-600 via-pink-600 to-red-700  transition ease-in-out duration-500  group text-shadow-lg px-6 py-24 relative z-40 shadow-lg text-white'>
                <div className='max-w-7xl mx-auto flex items-center  transition ease-in-out duration-500 transform hover:scale-110'>
                    <div className='space-y-4'>
                        <p className='text-xl sm:text-5xl font-extrabold'>What are you waiting for?</p>
                        <p className='text-xl sm:text-2xl font-light'>
                            Your most exciting gaming sessions are just a few clicks away.
                        </p>
                        <div
                            className='sm:hidden shadow-lg inline-block whitespace-nowrap text-sm sm:text-4xl font-extrabold uppercase px-4 py-2 bg-white text-red-600 rounded'
                            href=''>
                            Shop Now
                        </div>
                    </div>
                    <div className='hidden sm:block ml-auto w-12'></div>
                    <div className='hidden sm:block '>
                        <div
                            className='block shadow-lg whitespace-nowrap text-sm sm:text-4xl font-extrabold uppercase px-4 py-2 bg-white text-red-600 rounded'
                            href=''>
                            Shop Now
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
