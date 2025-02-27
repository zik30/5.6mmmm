import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSlider3 } from '../store/slider3Slice'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Slider3() {

  const dispatch = useDispatch()
  const data = useSelector( state => state.slider3Reducer.data)
  console.log(data);
  

  const getData = () =>{
    dispatch(getSlider3())
  }

  useEffect( () =>{
    getData()
  }, [])

  return (
    <div>
      <h2>slider 3 --------- ANIME</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.map( (data, i) =>(
            <SwiperSlide  key={i}>
              <h3>{data.title}</h3>
              <h5>Genre: {data.tags[0]}</h5>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Slider3