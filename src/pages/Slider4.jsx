import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSlider4 } from '../store/slider4Slice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function Slider4() {

  const dispatch = useDispatch()
  const data = useSelector( state => state.slider4Reducer.data)
  console.log(data);
  

  const getData = () =>{
    dispatch(getSlider4())
  }

  useEffect( () =>{
    getData()
  }, [])

  return (
    <div>
      <h2>Slider4</h2>
      <Swiper
      style={{height:450}}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          data.map( (data, i) =>(
            <SwiperSlide key={i}>
              <img style={{width: 300}} src={data.images[0]} alt="" />
              <p>{data.description}</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Slider4