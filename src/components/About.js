import React from 'react'

export default function About(props) {
	return (
	  <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black"}}>
            About Me
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={props.value}
                    alt="Avatar placeholder"
                  />
                  <span className="iconify" 
                   	   	data-icon="vscode-icons:file-type-reactjs" 
                       	data-width="32" 
                       	data-height="32" 
                       	style={{fontSize: "400%", margin: "9% 5% 0 5%"}}>
          		  </span>
                  <span className="iconify" 
                   	   	data-icon="logos:css-3" 
                       	data-width="32" 
                       	data-height="32" 
                       	style={{fontSize: "400%", margin: "9% 5% 0 5%"}}>
          		  </span>
                  <span className="iconify" 
                   	   	data-icon="vscode-icons:file-type-html" 
                       	data-width="32" 
                       	data-height="32" 
                       	style={{fontSize: "400%", margin: "9% 5% 0 5%"}}>
          		  </span>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>
                    &nbsp;
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>
                    &nbsp;
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "90%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{props.value2} :)</span>
                    <br />
                    <br />
                    {props.abt}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	)
}