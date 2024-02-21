import styles from "./button.module.scss";

export type ButtonProps = {
  title: string;
  typeClass: string;
};

export default function Button({ title, typeClass }: ButtonProps) {
  return (
    <button
      className={styles[typeClass]}
      dangerouslySetInnerHTML={{ __html: title }}
    ></button>
  );
}
