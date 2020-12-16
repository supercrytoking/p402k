import Particles from 'react-particles-js'
import ParticlesParams from '../ParticlesParams.json'
import Typed from 'react-typed'
import Faker from 'faker'

export default function IndexPage() {
    return (
        <>
            <Particles className='z-0 h-full w-full fixed pointer-events-none' params={ParticlesParams} />

            <div className='min-h-full h-auto w-full bg-gradient-to-br from-red-600 via-red-500 to-yellow-600 text-white flex flex-col'>
                <div className='p-6 absolute w-full space-x-4 text-center font-medium'>
                    <a href='' className='whitespace-no-wrap'>
                        Featured Products
                    </a>
                    <a href=''>News</a>
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

            <div className='container mx-auto py-24 px-6 text-gray-600'>
                <div className='grid grid-cols-1 gap-16 md:grid-cols-3 text-center'>
                    <div className='space-y-4'>
                        <img className='inline-block w-32' src='/img/icon-pack/019-gambler.svg' alt='' />
                        <p className='text-lg font-medium'>Always Undetected</p>
                        <p className='max-w-sm mx-auto'>
                            Remain sure the integrity of your account remains intact with undetectable mods. LastCheat
                            has a success rate of over 98.76%. Aliquip minim veniam adipisicing est tempor laboris.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <img className='inline-block w-32' src='/img/icon-pack/014-dice.svg' alt='' />
                        <p className='text-lg font-medium'>Easy to use</p>
                        <p className='max-w-sm mx-auto'>
                            Simple set-up makes sure you spend more time in-game winning than configuring your mods.
                            Labore ad laborum ex officia sunt aute fugiat in ad excepteur elit culpa incididunt labore.
                        </p>
                    </div>
                    <div className='space-y-4 hidden md:block'>
                        <img className='inline-block w-32' src='/img/icon-pack/027-online gambling.svg' alt='' />
                        <p className='text-lg font-medium'>Affordable and Transparent</p>
                        <p className='max-w-sm mx-auto'>
                            A single, one-time payment so you never have to worry about pesky subscriptions. Occaecat
                            qui irure cillum quis labore amet id ut proident.
                        </p>
                    </div>
                </div>
            </div>

            <div className='h-auto w-full bg-gray-800 text-gray-400'>
                <div className=' relative  container mx-auto py-24 px-6 text space-y-6'>
                    <div className='text-yellow-400 text-center'>
                        <p className='font-extrabold text-4xl'>Don't believe us?</p>
                        <p>Don't listen to us — listen to our clients.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {[
                            {
                                date: '6 months ago',
                                message:
                                    'Been playing Apex Legends for weeks with LastCheats mods... almost forgot I had them!',
                                name: Faker.name.findName()
                            },
                            {
                                date: '3 months ago',
                                message: 'Fugiat adipisicing dolore consectetur proident laboris.',
                                name: Faker.name.findName()
                            },
                            {
                                date: '2 hours ago',
                                message: 'Duis nostrud magna consequat fugiat tempor aliquip.',
                                name: Faker.name.findName()
                            },
                            {
                                date: '1 month ago',
                                message: 'Ullamco fugiat amet tempor qui quis.',
                                name: Faker.name.findName()
                            },
                            {
                                date: '6 hours ago',
                                message: 'Sint enim dolore officia nulla nulla sunt nisi incididunt eiusmod nulla.',
                                name: Faker.name.findName()
                            },
                            {
                                date: '1 hour ago',
                                message: 'Ad culpa est nostrud veniam ad.',
                                name: Faker.name.findName()
                            }
                        ].map((testimonial, index) => (
                            <div
                                className='w-full p-6 bg-yellow-400 text-yellow-800 shadow-xl rounded-lg flex flex-col'
                                key=''>
                                <div className='mb-4 flex items-center space-x-4'>
                                    <img
                                        className='h-12 w-12 rounded-full opacity-50'
                                        src={Faker.random.image()}
                                        alt=''
                                    />

                                    <p className='text-lg'>"{testimonial.message}"</p>
                                </div>
                                <p className='text-sm text-right font-medium mt-auto'>
                                    {testimonial.date} &bull; {testimonial.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='text-yellow-400 text-center'>
                        {/* <p className='font-extrabold text-4xl'>Don't believe us?</p> */}
                        <p className='opacity-50'>
                            Proudly servicing more than <b>1,827 clients</b> across <b>32 countries</b>.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-800 relative z-10 text-gray-400 border-t border-gray-700'>
                <grid className='container px-6 py-4 mx-auto grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-3'>
                    {/* <div>
                        <a href=''>Home</a>
                    </div> */}
                    {/* <div>2</div> */}
                    <div></div>
                    <div></div>
                    <div className='text-center lg:text-right'>
                        <p className='uppercase'>
                            &copy;&nbsp;<span class='font-medium'>LastCheat</span> {new Date().getFullYear()}
                            <span className='opacity-50'>&nbsp; All Rights Reserved</span>
                        </p>
                    </div>
                </grid>
            </div>
        </>
    )
}
