import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMemes } from '../store/memesSlice'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


function Slider5() {
  
  const dispatch = useDispatch()
  const memes = useSelector( state => state.memesReducer.memes)
  console.log(memes);
  

  const getData = ()=>{
    dispatch(getMemes())
  }

  useEffect( ()=>{
    getData()
  }, [])

  return (
    <div>
      <h2>MEMES</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          memes.map( (meme, i) =>(
            <SwiperSlide>
              <img style={{width: 300}} src={meme.url} alt="" />
              <h3>{meme.name}</h3>
            </SwiperSlide>
          ))
        }
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Slider5