import React, { Component } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import { getFirebase } from "../firebaseConnection";
import styles from "../pages/styles.module.css";

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

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
    };
    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    const lazyApp = import("firebase/app");
    const lazyDatabase = import("firebase/database");
    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).database();
      let ref = database.ref("/");
      ref.on("value", (snapshot) => {
        const state = snapshot.val();
        this.setState({ features: state });
      });
    });
  }

  getUserData() {
    let ref = Firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState({ features: state });
    });
    console.log(ref, "ref");
  }

  render() {
    const { features } = this.state;
    return (
      <div>
        <main>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, _id) => (
                    <Feature key={_id} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    );
  }
}

export default Services;
