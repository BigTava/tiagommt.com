import React from "react";

import Icon from "../Icon";
import data from "./data";
import { useAppSelector } from "../../state/hooks";
import "./styles.css";

const Services = () => {
  const webType = useAppSelector((state) => state.global.app.webType);

  return webType === "web1" ? (
    <section id="services">
      <h5>What I Do</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        {data.map((service) => (
          <article className="service">
            <div className="service__head">
              <h3>{service.service}</h3>
            </div>
            <ul className="service__list">
              {service.tasks.map((task) => (
                <li>
                  <Icon type="check" className="service__list-icon" />
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Services;
