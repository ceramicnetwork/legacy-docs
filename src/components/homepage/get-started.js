import React from "react";
import clsx from "clsx";
import styles from "./homeNavBoxes.module.css";

const FeatureList = [
  {
    title: "Why Ceramic? →",
    items: [
      {
        url: "docs/introduction/why-ceramic",
        text: "Dive into the overview of Ceramic Network. See key benefits, compare to other web3 solutions."
      }
    ]
  },
];

function Feature({ title, icon, items }) {
  return (
    <article>
      {items.map((item, idx) => (
        <a key={idx} href={item.url} className={styles.homecardLink}>
          <div className={styles.homecard}>
            <div className={styles.title}>{title}</div>
            <div className={styles.listContainerLink}>{item.text}</div>
          </div>
        </a>
      ))}
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
