import { useDispatch, useSelector } from 'react-redux'
import { getSlider } from '../store/sliderSlice'

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './slider1.module.css';

import { Navigation } from 'swiper/modules';

function Slider1() {

    const dispatch = useDispatch()
    const jokes = useSelector( state => state.slidersReducer.jokes)    
    
    const getData=()=>{
        dispatch(getSlider())
    }
    useEffect(()=>{
         getData()
    }, [])

  return (
    <div>
      <h2>Slider 1 -------- JOKES</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          jokes.map( (joke, id) => <SwiperSlide>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}


export default Slider1