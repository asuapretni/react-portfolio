import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggrdInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfullLogin = this.handleSuccessfullLogin.bind(this);
    this.handleUnsuccessfullLogin = this.handleUnsuccessfullLogin.bind(this);
  }

  handleSuccessfullLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfullLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>

            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              
              <Route 
                path="/auth" 
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfullLogin={this.handleSuccessfullLogin}
                    handleUnsuccessfullLogin={this.handleUnsuccessfullLogin}
                  />
                )}  
              />
              
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />

            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
