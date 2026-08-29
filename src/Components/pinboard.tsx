import './pinboard.scss'
import ScrollToTop from 'react-scroll-to-top'
import crouch from '../assets/pinpics/crouch.jpg'
import smile from '../assets/pinpics/smile.jpg'
import group from '../assets/pinpics/group.jpg'
import ferrari from '../assets/pinpics/ferrari.jpg'
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide'

const Pinboard = () => {
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
            <img src={crouch} alt="Chelsea Li in comedy film - The inbetweeners 2 movie" />
        </SplideSlide><SplideSlide>
                <img src={group} alt="Chelsea Li in comedy film - The inbetweeners 2 movie" />
            </SplideSlide><SplideSlide>
                <img src={smile} alt="Chelsea Li in comedy film - The inbetweeners 2 movie" />
            </SplideSlide><SplideSlide>
                <img src={ferrari} alt="Chelsea Li in comedy film - The inbetweeners 2 movie" />
            </SplideSlide><ScrollToTop smooth />
    </Splide>

    )
}

export default Pinboard;







