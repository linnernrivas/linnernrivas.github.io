import React, {useState} from 'react'
import Video from '../../videos/video_red.mp4'
import {Button} from '../ButtonElements'
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroHeader1,
    HeroParagraph
    // HeroButtonWrapper,
    // ArrowForward,
    // ArrowRight
} from './HeroElements'

const HeroSection = () => {
    // const [hover,setHover] = useState(false)
    // const onHover = () => {
    //     setHover(!hover)
    // }
    return (
        <HeroContainer id="home">
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'></VideoBackground>
            </HeroBackground>
            <HeroContent>
                <HeroHeader1>Welcome To Linner Rivas website</HeroHeader1>
                <HeroParagraph>My Name is Linner Rivas. I am your friendly developer!</HeroParagraph>
                {/* <HeroButtonWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>signup{hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroButtonWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
