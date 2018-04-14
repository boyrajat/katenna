import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import './EmployeesFunction.css';

class EmployeesFunctions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("employees/findall")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
	<div>
		<div className="employeesViewTopLinks">
			<Link className="dashViewButtons" id="newEmployeeBtn" to="/newemployees" >
				<img id="addBtn" src="/img/addBtn.svg" alt="Add A New Employee"/>
				<p id="addEmployeeText">Add A New Employee</p>
			</Link> 
		</div>
        <div className="card-deck" id="employeesContainerDiv">
          {items.map(item => (
            <div className="card eachEmployeeCard" style={{maxWidth: "300px", minWidth: "300px"}}>
				<div className="eachImgDiv">
					<img className="card-img-top eachCardImg" src={item.image} alt="Card image cap"/>
				</div>
				
				<div className="card-header eachCardHeader">
					<h5 className="card-title eachCardTitle">{item.name}</h5>
					<h6 className="card-subtitle eachCardSubtitle">{item.position}</h6>
				</div>
					
				<div className="card-body eachCardBody">
					<div className="card-text eachCardText">
						<p className="eachCardListItem">Phone: <span className="eachCardItem">{item.phone}</span></p>
						<p className="eachCardListItem">Email: <span className="eachCardItem">{item.email}</span></p>
						<p className="eachCardListItem">User Type: <span className="eachCardItem capitalize">{item.type}</span></p>
					</div>

					<div className="eachCardFooter row">
						{/* use the link below to pass state to EmployeeFunctions2 */}
						<div className="col-5 eachFooterBtn">
							<Link
							to={{ pathname: '/taskback', state: { employeeName: item.name, employeePosition: item.position } }}>
							Tasks
							</Link>
						</div>

						<div className="col-2"></div>
						
						<div className="col-5 eachFooterBtn">
							<Link
							to='/newtask' >
							New Task
							</Link>
						</div>
						
					</div>
				</div>



            </div>
          ))}
        </div>
		</div>
      );
    }
  }
}
export default EmployeesFunctions;
