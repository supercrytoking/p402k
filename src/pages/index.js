import Particles from 'react-particles-js'
import ParticlesParams from '../ParticlesParams.json'
import Typed from 'react-typed'
import Landing from '../components/Landing'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Products from '../components/Products'
import News from '../components/News'

export default function IndexPage() {
    return (
        <>
            <Particles className='z-0 h-full w-full fixed pointer-events-none' params={ParticlesParams} />
            <Landing />
            <Products />
            <Features />
            <Testimonials />
            <News />
            <Footer />
        </>
    )
}
