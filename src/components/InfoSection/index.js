import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ButtonElements';
import {
    InfoContainer,
    InfoWrapper, 
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ButtonWrapper,
    Column2,
    ImgWrapper,
    Img
} from './InfoElements'

const InfoSection = ({lightBg,id, imgStart,topLine,lightText,
    headLine,darkText,description,buttonLabel,img,alt,
primary,dark,dark2, path}) => {
    const [hover,setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <ButtonWrapper> 
                                    <Link to={path}>
                                        <Button onClick={path} to={path} onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} 
                                        duration={500} 
                                        spy={true} 
                                        exact="true" 
                                        offset={-80}
                                        primary={ primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                                    </Link>
                                </ButtonWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img src={img}  alt={alt}/>
                            </ImgWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
