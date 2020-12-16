import Nav from '../components/Nav'
import '../global.scss'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
    )
}
