import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Loader from "../components/loader";

// window.onload = () => {
//   var script = document.createElement("script");
//   script.id = "oc_script";
//   script.setAttribute("convid", "O0va48KrTNXSnKCAzRlmmGVruFR2");
//   script.async = "true";
//   script.src = "https://static.optinchat.com/optinchat.js";
//   document.body.appendChild(script);
//   console.log(script, "script");
// };

const features = [
  {
    title: <>Plan</>,
    imageUrl: "img/plan.svg",
    description: <>plan</>,
  },
  {
    title: <>Develop</>,
    imageUrl: "img/develop.svg",
    description: <>Develop</>,
  },
  {
    title: <>Deploy</>,
    imageUrl: "img/deploy.svg",
    description: <>Deploy</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

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

          <main>
            {features && features.length > 0 && (
              <section className={styles.features}>
                <div className="container">
                  <div className="row">
                    {features.map((props, idx) => (
                      <Feature key={idx} {...props} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </main>
        </>
      )}
    </Layout>
  );
}

export default Home;
