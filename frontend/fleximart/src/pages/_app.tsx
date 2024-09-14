import type { AppProps } from 'next/app'
import "../app/globals.css";
import { UserProvider } from '@/context/UserContext';

function Home({ Component, pageProps }: AppProps) {

    return  (
        <>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </>
    );
    
}

export default Home;