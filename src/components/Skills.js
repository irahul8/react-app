import React from 'react';
import data from "../data";

export default function Skills() {
	var skill = data.skills.icons.map(s =>
        (
          <li className="list-inline-item mx-3">
            <span>
              <div className="text-center skills-tile">
                <i className={s.class} style={{ fontSize: "200%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "25%", marginTop: "4px" }}
                  >
                    {s.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        )
      );
	return (
	  <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">Skills</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skill}</ul>
          </div>
        </div>
      </section>
	)
}