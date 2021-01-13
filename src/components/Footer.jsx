export default function Footer() {
  return (
    <>
      <div className="bg-gray-800 text-gray-600 text-gray-400 px-6 py-12">
        <div className="container  text-sm max-w-4xl gap-8 sm:gap-2 mx-auto grid grid-cols-1 sm:grid-cols-4">
          <div className="space-y-2">
            <p className="font-bold">Quick Links</p>
            <ul className="underline">
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Send us an Email</a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 col-span-2">
            <p className="font-bold">Our Commitment</p>
            <p>
              Mollit irure consequat consequat et. Tempor veniam non Lorem ea in
              ad duis velit aliqua aute nostrud labore proident ea. Quis ipsum
              ea pariatur duis eu ipsum minim commodo irure. Cillum do magna
              sint minim laboris laboris amet dolore mollit. Fugiat dolor do
              consequat aliquip amet duis et consectetur. Aliquip sint
              exercitation Lorem laborum officia reprehenderit.
            </p>
          </div>

          <div>
            <img
              className="block sm:ml-auto w-20 opacity-10"
              src="/img/logo-white.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border-t border-gray-700 text-gray-400 text-xs text-right p-6">
        <div className="container mx-auto">
          <p className="uppercase opacity-50 font-bold">
            &copy;&nbsp;
            <span className="font-extrabold">
              LastCheat {new Date().getFullYear()}
            </span>
            <span className="opacity-50">&nbsp; All Rights Reserved</span>
          </p>
        </div>
      </div>
    </>
  );
}
