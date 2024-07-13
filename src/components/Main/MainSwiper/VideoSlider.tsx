import React from 'react';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import style from './slider.module.scss';

const VideoSlider = () => {
	const videoIds = [
		'1oH8Kp4cGi4',
		'G26l2DMTYDY',
		'GMVYfZQE34k',
		'iq8z2sp0l14',
		'2dcCLj4IopU',
		'Csaq7sVFlmw',
		't9L7r9SPxYo',
		'Qeydh8ONFxI',
		'UOYZFG9iaZ4',
		'bYbOh1zqxx0',
	];

	return (
		<section className={style.slider}>
			<Swiper
				className={style.sliderSwiper}
				spaceBetween={30}
				slidesPerView={1}
				centeredSlides={true}
				/* autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}} */
				loop={true}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{videoIds.map((videoId) => (
					<SwiperSlide key={videoId}>
						<YouTube videoId={videoId} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default VideoSlider;
