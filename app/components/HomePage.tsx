import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 
import Usp from './Sections/Usp';
import Main from './Sections/Main';

const HomePage: React.FC = () => {
    return (
        <>
            <Main/>
            <Usp/>

        </>
    );
};

export default HomePage;