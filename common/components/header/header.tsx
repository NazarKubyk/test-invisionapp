import Image from "next/image";
import styles from "./header.module.scss";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { LogoIcon } from "public/logo";
import { useEffect, useState } from "react";

export type BasicLink = {
  label: string;
  url: string;
};

export type HeaderModel = {
  logo: string;
  secondaryLinks: BasicLink[];
  mainLinks: BasicLink[];
};

export default function Header({
  logo,
  secondaryLinks,
  mainLinks,
}: HeaderModel) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const [activeScroll, setActiveScroll] = useState(true);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    scrollPosition > 0 ? setActiveScroll(true) : setActiveScroll(false);
  }, [scrollPosition, controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animatedVariants = {
    animate: {
      opacity: activeScroll ? 1 : 0,
    },
    initial: { opacity: 0 },
  };

  return (
    <motion.header
      className={`${styles.header} ${activeScroll ? styles.activeColor : ""}`}
      variants={animatedVariants}
      animate="animate"
      transition={{ duration: 1 }}
      initial="initial"
    >
      <div className={styles.container}>
        <Image src={LogoIcon.src} alt="Logo" width={183} height={84} />
        <nav className={styles.navBar}>
          <div
            className={`${styles.linksContainer} ${styles.linksSecondaryContainer}`}
          >
            {secondaryLinks.map(({ label, url }) => (
              <Link className={styles.link} key={label} href={url}>
                {label}
              </Link>
            ))}
          </div>
          <div className={styles.linksContainer}>
            {mainLinks.map(({ label, url }) => (
              <Link className={styles.link} key={label} href={url}>
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
