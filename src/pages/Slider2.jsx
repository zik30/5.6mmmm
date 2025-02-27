import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSlider2 } from '../store/slider2Slice'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function Slider2() {

  const dispatch = useDispatch()
  const dogs = useSelector( state => state.slider2Reducer.dogs)
  console.log(dogs);
  

  const getData = ()=>{
    dispatch(getSlider2())
  }

  useEffect( () =>{
    getData()
  }, [])

  return (
    <div>
      <h2>Slider2 ------- DOGS</h2>
      <Swiper
        style={{height: 550}}
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          dogs.map( (dog, i) => (
              <SwiperSlide key={i}><img style={{height: 300}} src={dog} alt="" />{i+1}</SwiperSlide>
          ) )
        }
      </Swiper>
    </div>
  )
}

export default Slider2