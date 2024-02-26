import styles from "./ImagesSlider.module.scss";
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  VideoPreview1,
  VideoPreview2,
  VideoPreview3,
  VideoPreview4,
} from "public/imagesSlider";
import Image from "next/image";
import { PauseVideo } from "@components/pauseVideo/pauseVideo";
import { RightArrowIcon } from "public/icons";

const arrayOfSlides = [
  {
    id: 1,
    image: Slide1,
    title: "fishing",
    videoPreview: VideoPreview1,
    button: "Fishing features",
  },
  {
    id: 2,
    image: Slide2,
    title: "Leisure",
    videoPreview: VideoPreview2,
    button: "Leisure features",
  },
  {
    id: 3,
    image: Slide3,
    title: "Durability",
    videoPreview: VideoPreview3,
    button: "Leisure features",
  },
  {
    id: 4,
    image: Slide4,
    title: "Entertaining",
    videoPreview: VideoPreview4,
    button: "Leisure features",
  },
  {
    id: 5,
    image: Slide5,
    title: "You",
    button: "Dream boat",
  },
];

export const ImagesSlider = () => {
  return (
    <section className={styles.imagesSlider}>
      {arrayOfSlides.map(
        ({ id, image, title, videoPreview, button }, index) => (
          <div
            key={id}
            className={styles.imageCard}
            style={{
              zIndex: index + 1,
              backgroundImage: `url(${image.src})`,
            }}
          >
            <h3 className={styles.title}>
              <span className={styles.titleRegular}>Build for</span>
              <br />
              <span className={styles.titleBold}>{title}</span>
            </h3>
            <div>
              <div className={styles.slideContentBox}>
                {videoPreview?.src && (
                  <div
                    className={styles.slideVideoPreview}
                    style={{
                      backgroundImage: `url(${videoPreview.src})`,
                    }}
                  >
                    <PauseVideo />
                  </div>
                )}
                {button && (
                  <button className={styles.buttonAction}>
                    <span className={styles.buttonActionLight}>View</span>
                    <span className={styles.buttonActionBold}>{button}</span>
                    <Image
                      src={RightArrowIcon}
                      alt={"RightArrowIcon"}
                      width={10}
                      height={10}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};
