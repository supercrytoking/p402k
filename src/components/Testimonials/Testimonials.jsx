import Faker from 'faker'
import Shuffle from 'shuffle-array'
import TestimonialsList from './Testimonals.json'

export default function Testimonials() {
    return (
        <>
            <div id='reviews' className='h-auto w-full bg-gray-800 text-gray-400'>
                <div className=' relative  container mx-auto py-24 px-6 text space-y-8'>
                    <div className='text-yellow-400 text-center space-y-4'>
                        <p className='font-extrabold text-4xl'>Don't believe us?</p>
                        <p className='text-lg'>Don't listen to us — listen to our clients.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {Shuffle(TestimonialsList)
                            .slice(0, 6)
                            .map((testimonial, index) => (
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
                        <p className='opacity-50'>
                            Proudly servicing more than <b>1,827 clients</b> across <b>32 countries</b>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
