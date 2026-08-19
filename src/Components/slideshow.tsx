import bath from "../assets/welcomepic/bath.png"
import hand2 from "../assets/welcomepic/hand2.png"
import garage from "../assets/welcomepic/garage.png"
import mickey from "../assets/welcomepic/mickey17.png"
import inb from "../assets/welcomepic/inb.png"
import detective from "../assets/welcomepic/detective.png"
import betrayal from "../assets/welcomepic/betrayal.png"
import phonegirl from "../assets/welcomepic/phonegirl.png"
import emotional from "../assets/welcomepic/emotional.png"
import makeup from "../assets/welcomepic/makeup.png"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import './slideshow.scss'

const Slideshow = () => {
    return (

        <Splide
        options={ {
          rewind: true,
          width: "100%",
          gap   : '1rem',
        } }
        aria-label="slideshow"
      >

        <SplideSlide>
          <img src={bath} alt="Chelsea Li in music video kilo jugg - IDWIWT"/>
        </SplideSlide>
        <SplideSlide>
          <img src={inb} alt="Chelsea Li in comedy film - The inbetweeners 2 movie"/>
        </SplideSlide>
        <SplideSlide>
          <img loading="eager" src={betrayal} alt="Chelsea Li in Betrayal Short scene Astrid from Crazy Rich Asians"/>
        </SplideSlide>
        <SplideSlide>
          <img loading="eager" src={makeup} alt="Chelsea Li in self tape for a tv pilot"/>
        </SplideSlide>
        <SplideSlide>
          <img src={garage} alt="Chelsea Li in thriller / horror short film"/>
        </SplideSlide>
        <SplideSlide>
          <img src={emotional} alt="Chelsea Li in music video kilo jugg - IDWIWT"/>
        </SplideSlide>
        <SplideSlide>
          <img src={phonegirl} alt="Chelsea Li in self tape for a tv pilot"/>
        </SplideSlide>
        <SplideSlide>
          <img src={hand2} alt="Chelsea Li in music video KT Tunstall"/>
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







