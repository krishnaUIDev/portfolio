import React, { Component } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
///import { getFirebase } from "../firebaseConnection";
import styles from "../pages/styles.module.css";

const features = [
  {
    _id: "1",
    title: "Plan",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/krishnuidev.appspot.com/o/icons%2Fplan.svg?alt=media&token=f311a97c-d717-48c9-bac7-d8d272654e28",
    description: "plan",
  },
  {
    _id: "2",
    title: "Develop",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/krishnuidev.appspot.com/o/icons%2Fdevelop.svg?alt=media&token=3a9e61af-cbc3-4f72-b04c-972c76b60cbe",
    description: "Develop",
  },
  {
    _id: "3",
    title: "Deploy",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/krishnuidev.appspot.com/o/icons%2Fdeploy.svg?alt=media&token=95895fff-6855-46f0-9cea-e46999d2395d",
    description: "Deploy",
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

class Services extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     features: [],
  //   };
  //   this.getUserData = this.getUserData.bind(this);
  // }

  // componentDidMount() {
  //   const lazyApp = import("firebase/app");
  //   const lazyDatabase = import("firebase/database");
  //   Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
  //     const database = getFirebase(firebase).database();
  //     let ref = database.ref("/");
  //     ref.on("value", (snapshot) => {
  //       const state = snapshot.val();
  //       this.setState({ features: state });
  //     });
  //   });
  // }

  // getUserData() {
  //   let ref = Firebase.database().ref("/");
  //   ref.on("value", (snapshot) => {
  //     const state = snapshot.val();
  //     this.setState({ features: state });
  //   });
  //   console.log(ref, "ref");
  // }

  render() {
    //  const { features } = this.state;
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
