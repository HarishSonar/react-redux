import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import India from "./ContactPages/india";
import Australia from "./ContactPages/australia";

class ContactClass extends React.Component {
	render(match) {
        return (
            <div>
                This is contact us page. Select Country.
                <ul>
			      <li>
			        <Link to={`${this.props.match.url}/india`}>India</Link>
			      </li>
			      <li>
			        <Link to={`${this.props.match.url}/australia`}>Australia</Link>
			      </li>
			      <li>
			        <Link to={`${this.props.match.url}/france`}>France</Link>
			      </li>
			    </ul>
			    <Route
			      path={`${this.props.match.url}/india`}
			      component={India}
			    />
			    <Route
			      path={`${this.props.match.url}/australia`}
			      component={Australia}
			    /> 
			    <Route
			      exact
			      path={`${this.props.match.url}/france`}
			      children={(props) => (
					 <div> This is France page.</div>
				  )}
			    />
            </div>
        );
	}
};

export default ContactClass;