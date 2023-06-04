import React, { useState, useEffect } from "react";
import cn from "classnames";

import { Logo } from "../logo";
import { Hyperlink } from "../../atoms/hyperlink";
import { Hamburger } from "../../atoms/hamburger";

import { navigationLinks } from "../../content/navigation-links";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuToggledClass = isMenuOpen ? styles.navbar__open : undefined;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("body__no-scroll");
    } else {
      document.body.classList.remove("body__no-scroll");
    }
  });

  return (
    <nav className={styles.navbar}>
      <Logo className={styles.navbar__logo} />
      <div className={styles.navbar__toggle}>
        <Hamburger
          isToggled={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={cn(styles.navbar__links, menuToggledClass)}>
        {navigationLinks.map((navLink, index) => (
          <Hyperlink
            key={index}
            className={styles.navbar__link}
            onClick={() => setMenuOpen(false)}
            {...navLink}
          />
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
