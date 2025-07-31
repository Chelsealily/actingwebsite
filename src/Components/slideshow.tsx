import bath from "../assets/welcomepic/bath.png"
import hand2 from "../assets/welcomepic/hand2.png"
import garage from "../assets/welcomepic/garage.png"
import mickey from "../assets/welcomepic/mickey17.png"
import inb from "../assets/welcomepic/inb.png"
import club from "../assets/welcomepic/club.png"
import detective from "../assets/welcomepic/detective.png"
import land from "../assets/welcomepic/land.png"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import './slideshow.scss'

const Slideshow = () => {
    return (

        <Splide
        options={ {
          rewind: true,
          width: '50rem',
          gap   : '1rem',
        } }
        aria-label="slideshow"
      >
        <SplideSlide>
          <img src={bath} alt="Chelsea Li in music video kilo jugg - IDWIWT"/>
        </SplideSlide>
        <SplideSlide>
          <img src={garage} alt="Chelsea Li in thriller / horror short film"/>
        </SplideSlide>
        <SplideSlide>
          <img src={inb} alt="Chelsea Li in comedy film - The inbetweeners 2 movie"/>
        </SplideSlide>
        <SplideSlide>
          <img src={hand2} alt="Chelsea Li in music video KT Tunstall"/>
        </SplideSlide>
        <SplideSlide>
          <img src={land} alt="Chelsea Li in emotional family drama short film"/>
        </SplideSlide>
        <SplideSlide>
          <img src={club} alt="Chelsea Li in comedy film - Bermondsey Tales"/>
        </SplideSlide>
        <SplideSlide>
          <img src={detective} alt="Chelsea Li in detective short film"/>
        </SplideSlide>
        <SplideSlide>
          <img src={mickey} alt="Chelsea Li in thriller / horror Mickey 17 with director Bong Joon Ho and Robert Pattinson"/>
        </SplideSlide>
      </Splide>
    

    )
}

export default Slideshow;







