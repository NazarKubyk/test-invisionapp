import React from "react";
import styles from "./feturesCapabilities.module.scss";
import Image from "next/image";
import { LeftSidePhoto, RightSidePhoto } from "public/feturesCapabilities";
import { RightArrowIcon } from "public/icons";

export const FeturesCapabilities = () => {
  return (
    <section className={styles.fearuresContainer}>
      <div className={styles.features}>
        <div className={styles.leftSide}>
          <Image src={LeftSidePhoto} alt={"Left side"} />
          <h4 className={styles.leftTitle}>POWER PERFORMANCE</h4>
          <p className={styles.leftText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.leftNextBox}>
            <p className={styles.leftNextText}>Next &nbsp; // &nbsp; seating</p>
            <button className={styles.leftNextButton}>
              <Image
                src={RightArrowIcon}
                alt="Right Arrow"
                width={10}
                height={10}
              />
            </button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Image
            src={RightSidePhoto}
            alt={"Left side"}
            className={styles.rightSideImage}
          />
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.leftFeaturesQuestion}>
          <p className={styles.leftFeaturesQuestionText}>
            WHAT <b>FEATURES & CAPABILITIES</b>&nbsp;DO YOU FIND IMPORTANT?
          </p>
        </div>
        <div className={styles.rightBoat}>
          <p>Lets help you find</p>
          <h4>The perfect boat</h4>
        </div>
      </div>
    </section>
  );
};
