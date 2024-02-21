import { ImageModel } from "@lib/umbraco/types/imageModel.type";
import { UmbracoNode } from "@lib/umbraco/types/umbracoNode.type";
import { WidgetModel } from "../../../../../../lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from "./carousel.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import SliderItem from "@components/sliderItem/SliderItem";

export default function Carousel(model: WidgetModel) {
  console.log(model);
  const { items } = model.content;

  return (
    <WidgetWrapper model={model} styles={styles}>
      <div style={{ width: "100%", margin: "auto" }}>
        <Swiper
          effect={"coverflow"}
          slideActiveClass={styles.activeSlide}
          style={{overflow: 'visible'}}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          initialSlide={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 2,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {items.map((item, index) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={index}>
                <SliderItem {...item} />
                {/* <Image
                  src="/boat-aerial.jpg"
                  width="600"
                  height="600"
                  alt="…"
                /> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div>
          <h3 className={styles.regulatorTitle}>
            <span className={`${styles.regulatorText} ${styles.regulatorTextLight}`}>What puts regulators</span>
            <br />
            <span className={`${styles.regulatorText} ${styles.regulatorTextBold}`}>Above the rest</span>
          </h3>
        </div>
        <button className={styles.regulatorButton}>
          <span>why</span>
          <span className={styles.regulatorButtonText}>regulator</span>
        </button>
      </div>
    </WidgetWrapper>
  );
}
