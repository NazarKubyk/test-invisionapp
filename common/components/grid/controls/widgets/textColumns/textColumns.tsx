import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from "./textColumns.module.scss";

export default function TextColumns(model: WidgetModel) {
  return (
    <WidgetWrapper model={model} styles={styles}>
      <div className={styles.content}>
        {model.content.items.map((item: { text: string }, index: number) => {
          return (
            <div
              className={styles.item}
              key={index}
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></div>
          );
        })}
      </div>
    </WidgetWrapper>
  );
}
