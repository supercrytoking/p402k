export default function Footer() {
    return (
        <>
            <div className='bg-gray-800 text-gray-400 text-center px-6 py-12'>
                <p className='uppercase opacity-50 font-bold'>
                    &copy;&nbsp;<span className='font-extrabold'>LastCheat {new Date().getFullYear()}</span>
                    <span className='opacity-50'>&nbsp; All Rights Reserved</span>
                </p>
            </div>
        </>
    )
}
