import Image from "next/image";
import styles from "./sliderItem.module.scss";
import { tuple } from "yup";
import Button from "@components/button/button";

export type SliderItemModel = {
  thumbnail?: string;
  detailsLink: string;
  localImage: string;
  modelNumber?: boolean;
  viewButton: string;
  buildButton: string;
  stats: Array<{ name: string; value: string }>;
  onSubmit?: () => void;
};

export default function SliderItem({
  thumbnail,
  detailsLink,
  localImage,
  viewButton,
  buildButton,
  modelNumber,
  stats,
}: SliderItemModel) {
  console.log("stats", stats);
  return (
    <div className={styles.sliderItemWrapper}>
      <div
        className={styles.topContainer}
        style={{ backgroundImage: `url(${localImage})` }}
      >
        {/* <img src={localImage} alt="svxc" /> */}
        <div className={styles.buttonContainer}>
          <Button title={viewButton} typeClass="simple" />
          <Button title={buildButton} typeClass="simple" />
        </div>
        <p className={styles.modelNumber}>{modelNumber}</p>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.hiddenWrapper}>
          {stats.map((stat, index) => {
            return (
              <div key={index} className={styles.descriptionItem}>
                <p>
                  <strong>{stat.name}</strong>
                </p>
                <p> {stat.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
