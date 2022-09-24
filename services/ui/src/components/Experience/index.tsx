import React from "react";

import data from "./data";
import Icon from "../Icon";
import { useAppSelector } from "../../state/hooks";
import "./styles.css";

const Experience = () => {
  const webType = useAppSelector((state) => state.global.app.webType);

  return webType === "web1" ? (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>Programming Languages</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {data.frontend.map((skill) => (
              <article className="experience__details">
                <Icon type="patchCheck" className="experience__details-icon" />
                <div>
                  <h4>{skill.skill}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {data.backend.map((skill) => (
              <article className="experience__details">
                <Icon type="patchCheck" className="experience__details-icon" />
                <div>
                  <h4>{skill.skill}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Blockchain Development</h3>
          <div className="experience__content">
            {data.blockchain.map((skill) => (
              <article className="experience__details">
                <Icon type="patchCheck" className="experience__details-icon" />
                <div>
                  <h4>{skill.skill}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Data Analytics</h3>
          <div className="experience__content">
            {data.analytics.map((skill) => (
              <article className="experience__details">
                <Icon type="patchCheck" className="experience__details-icon" />
                <div>
                  <h4>{skill.skill}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Experience;
