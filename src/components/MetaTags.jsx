import React from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../assets/Logo.svg';

const MetaTags = () => (
    <Helmet>
    <meta name="og:title" content="Little Lemon Rstaurant Online Reservation Page" />
    <meta name="og:description" content="A reservation page for the Little Lemon Restaurant" />
    <meta name='og:image' content={Logo}/>
    <meta name="language" content="english" />
    <meta name="rating" content="safe for kids" />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="HandheldFriendly" content="true" />
  </Helmet>
);

export default MetaTags;