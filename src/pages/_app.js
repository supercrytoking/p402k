import Meta from '../components/Meta'
import Nav from '../components/Nav'
import '../global.scss'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Meta />
            <Nav />
            <Component {...pageProps} />
        </>
    )
}
