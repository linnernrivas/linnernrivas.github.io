import React from 'react'
import Icon1 from '../../images/services/svg-3.svg'
import Icon2 from '../../images/services/svg-1.svg'
import Icon3 from '../../images/services/svg-2.svg'
import {ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <>
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Web Development</ServicesH2>
                    <ServicesP>Building and Maintence of websites. Making the website look great, work fast and perfome well.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Tech Support</ServicesH2>
                    <ServicesP>Here to help your PC problems, 24 hour a day - 7 days a week. Technology is very important right now during this times.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>SEO</ServicesH2>
                    <ServicesP>Search Engine Optimization, our way to improve the quality and quantity of your website traffic to a web page from the Serach Engines.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services
