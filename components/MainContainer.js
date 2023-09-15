import React from 'react';
import Link from 'next/link';
import A from '../components/A';
import Head from 'next/head';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'то и то ' + keywords}></meta>
        <title>Main</title>
      </Head>
      <div className='navbar'>
        <A href={'/'}>Главная</A>
        <A href={'/users'}>Пользователи</A>
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
