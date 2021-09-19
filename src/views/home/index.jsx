import React from "react";
import StackLinkCard from "components/stacks-link-card";
import MobileDevelopment from "assets/images/mobile-development.png";
import WebDevelopment from "assets/images/web-development.png";
import BackendDevelopment from "assets/images/backend-development.jpeg";

import styles from "./styles.module.scss";

const stackCards = [
  {
    name: "mobile",
    image: MobileDevelopment,
    link: "/mobile",
  },
  {
    name: "web",
    image: WebDevelopment,
    link: "/web",
  },
  {
    name: "backend",
    image: BackendDevelopment,
    link: "/backend",
  },
];

const Home = () => (
  <section className={styles["home-container"]}>
    <h1 className={styles["home-title"]}>
      Which of these stacks would you like to take a look at?
    </h1>
    <div className={styles["stacks-container"]}>
      {stackCards.map((stack) => (
        <StackLinkCard
          key={stack.name}
          name={stack.name}
          image={stack.image}
          link={stack.link}
        />
      ))}
    </div>
  </section>
);

export default Home;
