import React, { useEffect, useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import CheckoutPage from './common/checkout-page';
import Login from '../../page/account/login-auth'

const Checkout = () => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('user'));
    useEffect(() => {
        setCurrentUser(localStorage.getItem('user'))
    }, [localStorage.getItem('user')])
    return (
        <>
            {currentUser !== null ?
                <CommonLayout parent="home" title="checkout">
                    <CheckoutPage />
                </CommonLayout>
                :
                <Login />
            }
        </>
    )
}

export default Checkout;