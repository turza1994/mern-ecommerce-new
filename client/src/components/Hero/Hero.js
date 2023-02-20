import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import Image from 'next/image'
import { EffectFade } from 'swiper'

function Hero(props) {
  return (
    <div className='relative h-full'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image src='/banner-10.png' width={1920} height={900} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/banner-11.png' width={1920} height={900} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/banner-12.png' width={1920} height={900} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
