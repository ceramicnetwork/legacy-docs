import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link"; import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomeNavBox from "../components/homepage/get-started";
import HomeNavStart from "../components/homepage/start-building";
import HomeNavUtils from "../components/homepage/tools-utilities";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContent)}>
        <div style={{ flex: "70%" }}>
          <h1 className="hero__title">Ceramic Docs</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div style={{ flex: "30%", textAlign: "center" }}>
          <img src="/img/logo.svg" alt="Ceramic" style={{ width: "40%" }} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Layout description="Ceramic is a decentralized data network that powers an ecosystem of interoperable Web3 applications and services.">
        <HomepageHeader />
        <div className={styles.productSection}>
          <div className={styles.productCardsWrapper}>
            <div
              className={styles.productCard}
              style={{
                background: "linear-gradient(215deg, #660094 -33%, var(--box-color) 50%)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3>Chat To The Ceramic Docs Bot</h3>
                <div style={{ marginLeft: "10px", marginBottom: "9px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 640 512">
                    <path
                      fill="currentColor"
                      d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541M222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241m195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241"
                    />
                  </svg>
                </div>
              </div>
              <div>
                Ask the Ceramic Docs Bot anything about Ceramic and ComposeDB on Discord.
              </div>
              <div
                style={{
                  display: "flex",
                  columnGap: "24px",
                  rowGap: "4px",
                  width: "100%",
                  flexWrap: "wrap",
                  padding: "16px 0 0",
                  fontWeight: "500"
                }}
              >
                <div>
                  <a href="https://discord.com/oauth2/authorize?client_id=1310441772505370789"> Chat → </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "0 12px"
          }}
        >
          <screen-card>
            <div style={{ width: "100%" }}>
              <header>Start building</header>
              <p>Build interoperable Web3 applications powered by decentralised tools from the Ceramic ecosystem.</p>
              <HomeNavStart />
            </div>
            <div style={{ width: "100%" }}>
              <header>Explore Network Tools and Utilities</header>
              <p>Run Ceramic nodes and interact with the Ceramic protocol.</p>
              <HomeNavUtils />
            </div>
          </screen-card>
        </div>
      </Layout>
    </div>
  );
}
