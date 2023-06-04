import React from "react";
import { CONTACT_PHONE_NUMBER } from "../../config";

import styles from "./contact-phone.module.scss";

const ContactPhone = () => (
  <div className={styles.contactPhone}>
    <h2>Give us a call</h2>
    <span>{CONTACT_PHONE_NUMBER}</span>
  </div>
);

export { ContactPhone };
