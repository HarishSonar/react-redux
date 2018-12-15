import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class HomeClass extends React.Component {
	render() {
        return (
            <div>
                This is Home page.
            	 <ul>
			        <li>
			          <Link to="/">Home</Link>
			        </li>
			        <li>
			          <Link to="/contact">Contact</Link>
			        </li>
			      </ul>

			      <hr />
            </div>
        );
	}
};

export default HomeClass;