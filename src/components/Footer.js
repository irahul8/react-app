import React from 'react'

export default function Footer() {
	return (
		<footer>
        <div className="col-md-12">
          <div className="social-links">
          	<span className="m-2">
            	<a href="https://github.com">
            		<i className="iconify" 
                   data-icon="codicon:github" 
                   data-width="24" 
                   data-height="24" 
                   style={{color: "white"}}>
                </i>
            	</a>
          	</span>
          	<span className="m-2">
            	<a href="https://www.instagram.com">
            		<i className="iconify" 
                   data-icon="akar-icons:instagram-fill" 
                   style={{color: "white"}}>
                </i>
            	</a>
          	</span>
          </div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <h6>
                Copyright &copy; RAHUL SAINI
              </h6>
            </div>
          </div>
        </div>
      </footer>
	)
}