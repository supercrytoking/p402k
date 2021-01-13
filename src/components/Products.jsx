import useSWR from "swr";

export default function Products() {
  const { data: products, error } = useSWR(
    `https://onlyfans.plus/wp-json/wc/v2/products?category=44&consumer_key=${process.env.NEXT_PUBLIC_WOOCOMMERCE_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOOCOMMERCE_SECRET}`
  );

  if (!products || error) return <></>;
  return (
    <>
      <div className="bg-gray-900 md:py-24 text-gray-200 relative z-10">
        {/* <div className='bg-gradient-to-br from-gray-800 to-gray-900 text-gray-200 relative z-10 border-b border-gray-800 shadow-xl'> */}
        <div id="products" className="container mx-auto py-24 px-6 space-y-16">
          <div className="max-w-2xl space-y-8">
            <p className="font-extrabold text-4xl sm:text-7xl">
              Hacks, mods, and extensions for your favorite games.
            </p>
            <p className="font-light text-3xl sm:text-5xl">
              Time to get your game on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
            {products?.map((product, index) => (
              <a
                key={index}
                href={product.permalink}
                className="block space-y-4 transition ease-in-out duration-150 transform group hover:-translate-y-2"
              >
                <div
                  className="border border-gray-800 rounded-lg transition ease-in-out duration-150 shadow group-hover:shadow-lg w-100 square overflow-hidden bg-center bg-cover"
                  style={{
                    backgroundImage: `url("${product.images?.[0]?.src}")`,
                  }}
                />

                <div className="flex text-xl">
                  <p className="font-extrabold text-2xl group-hover:underline">
                    {product.name}
                  </p>
                  <div className="ml-auto"></div>
                  <p className="opacity-50">
                    ${new Intl.NumberFormat().format(product.price)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <svg
        className="bg-gray-800 transform rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#121826"
          fill-opacity="1"
          d="M0,96L36.9,160L73.8,128L110.8,320L147.7,96L184.6,288L221.5,160L258.5,288L295.4,192L332.3,192L369.2,32L406.2,96L443.1,96L480,192L516.9,96L553.8,128L590.8,160L627.7,64L664.6,96L701.5,288L738.5,128L775.4,288L812.3,128L849.2,64L886.2,192L923.1,0L960,288L996.9,96L1033.8,256L1070.8,320L1107.7,288L1144.6,224L1181.5,96L1218.5,160L1255.4,128L1292.3,128L1329.2,32L1366.2,256L1403.1,160L1440,64L1440,320L1403.1,320L1366.2,320L1329.2,320L1292.3,320L1255.4,320L1218.5,320L1181.5,320L1144.6,320L1107.7,320L1070.8,320L1033.8,320L996.9,320L960,320L923.1,320L886.2,320L849.2,320L812.3,320L775.4,320L738.5,320L701.5,320L664.6,320L627.7,320L590.8,320L553.8,320L516.9,320L480,320L443.1,320L406.2,320L369.2,320L332.3,320L295.4,320L258.5,320L221.5,320L184.6,320L147.7,320L110.8,320L73.8,320L36.9,320L0,320Z"
        ></path>
      </svg>

      {/* <svg
        className="bg-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#212936"
          fill-opacity="1"
          d="M0,0L288,160L576,192L864,96L1152,224L1440,32L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg> */}
    </>
  );
}
