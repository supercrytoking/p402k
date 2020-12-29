import Faker from 'faker'

export default function Testimonials() {
    return (
        <>
            <div id='reviews' className='h-auto w-full bg-gray-800 text-gray-400'>
                <div className=' relative  container mx-auto py-24 px-6 text space-y-6'>
                    <div className='text-yellow-400 text-center space-y-2'>
                        <p className='font-extrabold text-4xl'>Don't believe us?</p>
                        <p className='text-lg'>Don't listen to us — listen to our clients.</p>
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
        </>
    )
}
