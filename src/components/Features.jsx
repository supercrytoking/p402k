export default function Features() {
    return (
        <>
            <div className='container relative z-10  mx-auto py-24 px-6 text-gray-600 border-b'>
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
        </>
    )
}
