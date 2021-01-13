// import { useEffect, useState } from 'react'

export default function Nav() {
  // const [isAtTop, setIsAtTop] = useState(true)

  // useEffect(() => {
  //     const handler = () => {
  //         setIsAtTop(window.scrollY <= 50 ? true : false)
  //     }

  //     handler()

  //     window.addEventListener('scroll', handler)
  //     return () => window.removeEventListener('scroll', handler)
  // }, [window])

  return (
    <>
      <div
        className={`w-full p-6 transform transition ease-out duration-150 px-6 border-b border-gray-800 shadow-xl relative z-50 bg-gray-900 text-gray-400 flex`}
      >
        <div className="container m-auto flex flex-col space-y-2 sm:flex-row sm:space-y-0 items-center">
          <div className="text-xl text-center font-extrabold tracking-tighter text-shadow">
            <p>LASTCHEAT</p>
            <p className="text-xs uppercase">Your Gaming Src</p>
          </div>
          <div className="ml-auto"></div>
          <div className="space-x-4 font-medium text-xs sm:text-base">
            <a href="#products">Products</a>
            <a href="#features">Features</a>
            <a href="#reviews">Reviews</a>
            <a href="#news">News</a>
          </div>
        </div>
      </div>
    </>
  );
}
