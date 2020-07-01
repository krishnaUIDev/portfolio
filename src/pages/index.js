import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

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

function Loading() {
  return (
    <div className={styles.socket}>
      <div className={clsx(styles.gel, styles.centergel)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c1, styles.r1)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c2, styles.r1)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c3, styles.r1)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c4, styles.r1)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c5, styles.r1)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c6, styles.r1)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>

      <div className={clsx(styles.gel, styles.c7, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>

      <div className={clsx(styles.gel, styles.c8, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c9, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c10, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c11, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c12, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c13, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c14, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c15, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c16, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c17, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c18, styles.r2)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c19, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c20, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c21, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c22, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c23, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c24, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c25, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c26, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c28, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c29, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c30, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c31, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c32, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c33, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c34, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c35, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c36, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
      <div className={clsx(styles.gel, styles.c37, styles.r3)}>
        <div className={clsx(styles.hexbrick, styles.h1)}></div>
        <div className={clsx(styles.hexbrick, styles.h2)}></div>
        <div className={clsx(styles.hexbrick, styles.h3)}></div>
      </div>
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
    <Layout
      title="KrishnaKanth Kondoju | Front-End developer"
      // description="KrishnaKanth Kondoju | Front-End developer"
    >
      {loader ? (
        <Loading />
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
                  Get Started
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
