import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ActivitiesTableList from "../../components/Activities/ActivitiesTableList";

class ActivitiesList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div className="row">
                  <div className="col-12 col-sm-12 col-lg-12">
                    <ol className="breadcrumb left-breadcrumb">
                    <li className="nav-head active" area-current="page">
                        <i className="fa fa-map-marker" />
                        <Link to={routesURL.PROJECT_WIKI + "60453005"}>
                          {" "}
                          Extensions N/Cape Mall Phase 3 (60453005)
                        </Link>{" "}
                     
                      </li>
                    </ol>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <ActivitiesTableList />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ActivitiesList;
