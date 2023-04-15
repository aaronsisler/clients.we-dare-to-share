import React from "react";

import { ContactPhone } from "../../components/contact-phone";
import { ContactAddress } from "../../components/contact-address";
import { ContactFormWidget } from "../../widgets/contact-form-widget";

import styles from "./contact-container.module.scss";

const ContactContainer = () => (
  <div className={styles.contactContainer}>
    <div className={styles.contactContainer__content}>
      <div className={styles.contactContainer__visit}>
        <ContactPhone />
        <ContactAddress />
      </div>
      <ContactFormWidget />
    </div>
  </div>
);

export { ContactContainer };
