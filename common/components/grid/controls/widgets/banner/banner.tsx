import { ImageModel } from "@lib/umbraco/types/imageModel.type";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import { getCropUrl } from "@lib/umbraco/util/helpers";
import Rte from "../../rte";
import WidgetWrapper from "../widgetWrapper";
import styles from "./banner.module.scss";
import CroppedImage from "@components/images/croppedImage";
import isDark from "common/util/isDark";
import { Box } from "foundation-sites";
import Image from "next/image";

export default function Banner(model: WidgetModel) {
  const renderItem = () => model.content.text;
  const item = renderItem();
  return (
    <WidgetWrapper model={model} styles={styles}>
      <Image
        className={styles.banerImage}
        layout="responsive"
        src={"/boat-aerial.jpg"}
        alt="baner Boat"
        width={900}
        height={700}
      />
      <div
        className={styles.txtBox}
        dangerouslySetInnerHTML={{ __html: model.content.text }}
      ></div>
    </WidgetWrapper>
  );
}
