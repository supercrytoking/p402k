import useSWR from 'swr'

export default function Products() {
    const { data: products, error } = useSWR(
        'https://onlyfans.plus/wp-json/wc/v2/products/?consumer_key=ck_e0a503ffced04bc4e3d48745d6efbcdfc32f9919&consumer_secret=cs_b100b34f97a125fc080d32861d4abb6f7bbe4bed'
    )

    if (!products || error) return <></>
    return (
        <>
            <div className='bg-gray-700 text-gray-400 relative z-10 border-b border-gray-600 shadow-xl'>
                <div id='products' className='container mx-auto py-24 px-6 space-y-16'>
                    <div className='space-y-2'>
                        <p className='font-extrabold text-4xl'>Hacks, mods, and extensions for your favorite games.</p>
                        <p className='text-2xl font-light'>Time to get your game on.</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16'>
                        {products.map((product, index) => {
                            return (
                                <a
                                    href={product.permalink}
                                    key={index}
                                    className='block space-y-4 transition ease-in-out duration-150 transform group hover:-translate-y-2'>
                                    <div
                                        className='rounded-lg transition ease-in-out duration-150 shadow group-hover:shadow-lg w-100 square overflow-hidden bg-center bg-cover'
                                        style={{
                                            backgroundImage: `url("${product.images?.[0]?.src}")`
                                        }}
                                    />

                                    <div className='flex text-xl'>
                                        <p className='font-extrabold text-2xl group-hover:underline'>{product.name}</p>
                                        <div className='ml-auto'></div>
                                        <p className='opacity-50'>${new Intl.NumberFormat().format(product.price)}</p>
                                    </div>

                                    {/* <div>{product.categories.map((cat, index) => cat.name)}</div> */}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
