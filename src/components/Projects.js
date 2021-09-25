import React, {useState} from "react"
import data2 from '../data2'
import Projectdetails from './Projectdetails'

export default function Projects() {
	const [detail, setdetail] = useState(false)

	let detailshow = () => {setdetail(true)}
	let detailhide = () => {setdetail(false)}
	var projects = data2.projects.map(f => (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={f.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailshow()}>
                <div>
                  <img
                    src={f.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{f.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {f.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        )
      );
	return (
	  <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>Projects</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
            <Projectdetails
            show={detail}
            onHide={detailhide}
            data={projects}
          />
          </div>
        </div>
      </section>
	)
}