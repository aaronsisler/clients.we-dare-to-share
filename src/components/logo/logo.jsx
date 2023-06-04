import React from "react";
import NextLink from "next/link";
import { CDN_URL } from "../../config";

import styles from "./logo.module.scss";

const logo = {
  alt: "Elder Help NC",
  src: `${CDN_URL}/logo.png`,
};
const text = {
  alt: "Elder Help NC",
  src: `${CDN_URL}/elder-help-text.png`,
};

const Logo = () => (
  <div className={styles.logo}>
    <NextLink href="/">
      <img className={styles.logo__image} src={logo.src} alt={logo.alt} />
    </NextLink>
    <NextLink href="/">
      <img className={styles.logo__text} src={text.src} alt={text.alt} />
    </NextLink>
  </div>
);

export { Logo };
