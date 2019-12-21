import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";
import database from "../../database/database";

class Menu extends Component {
  render() {
    return this.props.id ? (
      <nav className="sub-navbar" aria-label="breadcrumb">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-6 d-flex">
            <h4 className="customer-title">Customer</h4>
            <ol className="breadcrumb left-breadcrumb">
              <li className="nav-head active" aria-current="page">
                <Link exact="true" to={routesURL.PAGE_NOT_FOUND}>
                  SHELL
                </Link>
              </li>
            </ol>
          </div>
          <div className="col-12 col-sm-12 col-lg-6 d-flex">
            <h4 className="customer-title">Project</h4>
            <ol className="breadcrumb right-breadcrumb">
              <li className="nav-head active" aria-current="page">
                <Link exact={true} to={routesURL.PROJECT_WIKI + "60453005"}>
                  {this.props.id}
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </nav>
    ) : (
        <nav className="sub-navbar" aria-label="breadcrumb">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-6 d-flex">
              <h4 className="customer-title">Portfolio</h4>
              <ol className="breadcrumb left-breadcrumb">
                <Link exact="true" to={routesURL.PORTFOLIO}>
                  <span className="fa fa-cog ml-3"></span>
                </Link>
                {database.portfolio.map((item, index) => (
                  <li className="nav-head active" aria-current="page" key={index}>
                    {/* <Link exact="true" to={routesURL.PORTFOLIO}> */}
                    <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => this.props.changePortfolio(item.name)}><u>{item.name}</u></span>
                    {/* </Link> */}
                  </li>
                ))}
              </ol>
            </div>
            {/* <div className="col-12 col-sm-12 col-lg-6 d-flex">
              <h4 className="customer-title">Project</h4>
              <ol className="breadcrumb right-breadcrumb">
                {database.projects.map(
                  (project, index) =>
                    project.id !== 60888013 && (
                      <li
                        key={index}
                        className="nav-head active"
                        aria-current="page"
                      >
                        <Link
                          exact="true"
                          to={routesURL.PROJECT_WIKI + project.id}
                        >
                          {project.id}
                        </Link>
                      </li>
                    )
                )}
              </ol>
            </div> */}
          </div>
        </nav>
      );
  }
}

export default Menu;
