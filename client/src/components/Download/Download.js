import React from "react";
import "./Download.css";

const Download = () =>
	<div className="container-fluid" id="downloadsContFlu">
		<div className="container text-center" id="downloadsCont">
			<div className="row text-center" id="downloadsRow">
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center" id="downloadsColImg">
					<img src='/img/iPhone.png' alt="Employee Screen" />
				</div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-left align-middle" id="downloadsColText">
					<h5>User Interface</h5>
					<h3>Discover Katenna <br /> for Employees</h3>
					<p>Real-time training that is focused on your employees' individual needs, providing ongoing support as they grow their skills. Continuity, consistency and clarity across all branches of labor, through training and development process. The traditional obstacles of disseminating institutional knowledge can be maximized and preserved for posterity for future generations of incoming employees. <br />Download a trial version today.</p>
						{/* This image is supposed to be a button, but it is disabled for now */}
						<img src='/img/DownloadBtnBlack.svg' alt="Employee Screen" />
				</div>
			</div>
		</div>
	</div>
	;

export default Download;	
