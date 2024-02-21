import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import styles from "./pinnedLinks.module.scss";
import WidgetWrapper from "../widgetWrapper";
import Image from "next/image";
import Link from "next/link";

export type pinedLinkTopModel = {
  icon: string;
  label: string;
  url: string;
};

export default function PinnedLinks(model: WidgetModel) {
  return (
    <WidgetWrapper model={model} styles={styles}>
      <div className={styles.topLinks}>
        {model.content.links.map((item: pinedLinkTopModel, index: number) => {
          return (
            <Link className={styles.linkItem} href={item.url} key={index}>
              <Image
                src={`/${item.icon}.svg`}
                width={16}
                height={16}
                alt="icon"
              />
              <p dangerouslySetInnerHTML={{ __html: item.label }} />
            </Link>
          );
        })}
      </div>
    </WidgetWrapper>
  );
}
