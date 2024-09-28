import type { AppProps } from 'next/app'
import "../app/globals.css";
import { UserProvider } from '@/context/UserContext';
import { CartProvider } from '@/context/CartContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Home({ Component, pageProps }: AppProps) {

    return (
        <>
            <UserProvider>
                <CartProvider>
                    <Component {...pageProps} />
                </CartProvider>
            </UserProvider>
        </>
    );

}

export default Home; 