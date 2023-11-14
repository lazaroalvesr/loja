// SuaPagina.tsx

import React from 'react';
import TempleateSlide from '../lib/TempleateSlide'

const imagens = [
    { src: '/img/banner_img/banner.png', width: 1090, height: 120 },
    { src: '/img/banner_img/banner_2.png', width: 990, height: 120 },
    { src: '/img/banner_img/banner_4.png', width: 990, height: 120 },
    { src: '/img/banner_img/banner_5.png', width: 990, height: 120 },
];

const Slide: React.FC = () => {
    return (
        <div>
            <TempleateSlide images={imagens} />
        </div>
    );
};

export default Slide;
