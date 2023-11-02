/* eslint-disable quotes */

import SliderNextButton from "../../../SliderNextButton";

export const leftSeriesSliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  dots: true,
  arrows: true,
  nextArrow: <SliderNextButton />,
};

export const slideContent = [
  {
    link: '/comics',
    image: 'https://s3.gify.dev/img/homepage/slide-series-1.png',
    title: `I Grow Stronger By Eating!`,
    content: `Everyone has a talent of their own. And the talent I have is 
‘eating’. A talent that shines much brighter in this world
where countless powerful organisms dwell.`,
    reviews: 215,
  },
  {
    link: '/comics',
    image: 'https://s3.gify.dev/img/homepage/slide-series-1.png',
    title: `2. I Grow Stronger By Eating!`,
    content: `Everyone has a talent of their own. And the talent I have is
‘eating’. A talent that shines much brighter in this world
where countless powerful organisms dwell.`,
    reviews: 215,
  },
  {
    link: '/comics',
    image: 'https://s3.gify.dev/img/homepage/slide-series-1.png',
    title: `3. I Grow Stronger By Eating!`,
    content: `Everyone has a talent of their own. And the talent I have is
‘eating’. A talent that shines much brighter in this world
where countless powerful organisms dwell.`,
    reviews: 215,
  },
  {
    link: '/comics',
    image: 'https://s3.gify.dev/img/homepage/slide-series-1.png',
    title: `4. I Grow Stronger By Eating!`,
    content: `Everyone has a talent of their own. And the talent I have is
‘eating’. A talent that shines much brighter in this world
where countless powerful organisms dwell.`,
    reviews: 215,
  },
];
