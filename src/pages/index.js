import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Loader from "../components/loader";
import Services from "../Services/Services";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoader(false), 700);
    console.log("limit");
  }, []);

  return (
    <Layout title="KrishnaKanth Kondoju | Front-End developer">
      {loader ? (
        <Loader />
      ) : (
        <>
          <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
              <div className={styles.text}>Krishna</div>
              <p className="hero__subtitle">
                I'm a Front-end Developer & Mentor
              </p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    "button button--outline button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("docs/")}
                >
                  Hire me
                </Link>
              </div>
            </div>
          </header>
          <Services />
        </>
      )}
    </Layout>
  );
}

export default Home;
