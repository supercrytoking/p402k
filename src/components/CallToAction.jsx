import { defaults } from "autoprefixer";

export default function CallToAction() {
  return (
    <>
      <a
        href="https://onlyfans.plus/"
        className="relative overflow-hidden block bg-gradient-to-br from-purple-600 via-pink-600 to-red-700  transition ease-in-out duration-500  group text-shadow-lg px-12 py-24 relative z-40 shadow-lg text-white"
      >
        {/* <svg
          className="bg-gray-800 absolute top-0 w-screen left-0 transform rotate-180 -translate-y-1/2 scale-y-50"
          style={{ backgroundColor: "transparent", marginBottom: "100px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#212936"
            fill-opacity="1"
            d="M0,96L36.9,160L73.8,128L110.8,320L147.7,96L184.6,288L221.5,160L258.5,288L295.4,192L332.3,192L369.2,32L406.2,96L443.1,96L480,192L516.9,96L553.8,128L590.8,160L627.7,64L664.6,96L701.5,288L738.5,128L775.4,288L812.3,128L849.2,64L886.2,192L923.1,0L960,288L996.9,96L1033.8,256L1070.8,320L1107.7,288L1144.6,224L1181.5,96L1218.5,160L1255.4,128L1292.3,128L1329.2,32L1366.2,256L1403.1,160L1440,64L1440,320L1403.1,320L1366.2,320L1329.2,320L1292.3,320L1255.4,320L1218.5,320L1181.5,320L1144.6,320L1107.7,320L1070.8,320L1033.8,320L996.9,320L960,320L923.1,320L886.2,320L849.2,320L812.3,320L775.4,320L738.5,320L701.5,320L664.6,320L627.7,320L590.8,320L553.8,320L516.9,320L480,320L443.1,320L406.2,320L369.2,320L332.3,320L295.4,320L258.5,320L221.5,320L184.6,320L147.7,320L110.8,320L73.8,320L36.9,320L0,320Z"
          ></path>
        </svg> */}
        <div className="max-w-7xl mx-auto flex items-center  transition ease-in-out duration-500 transform hover:scale-110">
          <div className="space-y-4">
            <p className="text-xl sm:text-5xl font-extrabold">
              What are you waiting for?
            </p>
            <p className="text-xl sm:text-2xl font-light">
              Your most exciting gaming sessions are just a few clicks away.
            </p>
            <div
              className="sm:hidden shadow-lg inline-block whitespace-nowrap text-sm sm:text-4xl font-extrabold uppercase px-4 py-2 bg-white text-red-600 rounded"
              href=""
            >
              Shop Now
            </div>
          </div>
          <div className="hidden sm:block ml-auto w-12"></div>
          <div className="hidden sm:block ">
            <div
              className="block shadow-lg whitespace-nowrap text-sm sm:text-4xl font-extrabold uppercase px-4 py-2 bg-white text-red-600 rounded"
              href=""
            >
              Shop Now
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
