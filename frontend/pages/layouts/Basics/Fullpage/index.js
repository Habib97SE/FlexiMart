import React, { Fragment, useEffect } from 'react';
import HeaderTwale from '../../../../components/headers/Header-twale';
import HomeSlider from './HomeSlider';
import FooterNine from '../../../../components/footers/Footer-nine';

const Parallax = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#866e6c');
    })
    return (
        <Fragment>
            <HeaderTwale logoName="logo/2.png" />
                <HomeSlider />
            <FooterNine  />
        </Fragment>
    )
}

export default Parallax;                                                                                                                                                                                                                                                                                                                                                                                                                                     