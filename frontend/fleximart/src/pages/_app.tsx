import type { AppProps } from 'next/app'
import "../app/globals.css";

function Home({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default Home;