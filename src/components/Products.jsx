import useSWR from 'swr'

export default function Products() {
    const { data: products, error } = useSWR(
        'https://onlyfans.plus/wp-json/wc/v2/products?category=57&consumer_key=ck_e0a503ffced04bc4e3d48745d6efbcdfc32f9919&consumer_secret=cs_b100b34f97a125fc080d32861d4abb6f7bbe4bed'
    )

    if (!products || error) return <></>
    return (
        <>
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200 relative z-10 border-b border-gray-800 shadow-xl'>
                <div id='products' className='container mx-auto py-24 px-6 space-y-16'>
                    <div className='max-w-2xl space-y-8'>
                        <p className='font-extrabold text-4xl sm:text-7xl'>
                            Hacks, mods, and extensions for your favorite games.
                        </p>
                        <p className='font-light text-3xl sm:text-5xl'>Time to get your game on.</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16'>
                        {products.map((product, index) => (
                            <a
                                key={index}
                                href={product.permalink}
                                className='block space-y-4 transition ease-in-out duration-150 transform group hover:-translate-y-2'>
                                <div
                                    className='border border-gray-800 rounded-lg transition ease-in-out duration-150 shadow group-hover:shadow-lg w-100 square overflow-hidden bg-center bg-cover'
                                    style={{
                                        backgroundImage: `url("${product.images?.[0]?.src}")`
                                    }}
                                />

                                <div className='flex text-xl'>
                                    <p className='font-extrabold text-2xl group-hover:underline'>{product.name}</p>
                                    <div className='ml-auto'></div>
                                    <p className='opacity-50'>${new Intl.NumberFormat().format(product.price)}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
