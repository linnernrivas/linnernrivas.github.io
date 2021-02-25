import image1  from '../../images/home/linner_with_hat.jpeg';
import image2  from '../../images/home/undraw_Portfolio_.svg';
import image3  from '../../images/home/undraw_contact_.svg';

export const homeObjOne = {
    id : 'about',
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    topLine: 'About Us',
    headLine: 'Meet Linner',
    description:'Lets learn about Linner and who she is!',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: image1,
    alt:'Linner',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id : 'portfolio',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    topLine: 'Portfolio',
    headLine: 'Let our minds create new things',
    description:'Check out our portfolio, and see what we have created!',
    buttonLabel: 'See More',
    imgStart: true,
    img: image2,
    alt:'portfolio',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id : 'contact',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    topLine: 'Contact Us',
    headLine: 'Let Chat',
    description:'Lets chat and see how we can help build your company.',
    buttonLabel: 'Contact Us',
    imgStart: false,
    img: image3,
    alt:'contact',
    dark: false,
    primary: false,
    darkText: true
}
