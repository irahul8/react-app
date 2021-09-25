import React from 'react'

export default function Header() {
	return (
		<header id="home" style={{ height: window.innerHeight-50, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" 
                    data-icon="la:laptop-code" 
                    data-inline="false">
              </span>
              <br/>
              <h1 className="mb-0">
                RAHUL SAINI
              </h1>
              <div className="title-container">
                WEB DEVELOPER
              </div>
            </div>
          </div>
          <span className="iconify" 
                data-icon="emojione:flag-for-india" 
                data-width="65" data-height="65">
          </span>
        </div>  
    	</header>     
	)
}