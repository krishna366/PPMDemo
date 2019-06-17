import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ResourcesTableList from "../../components/Resources/ResourcesTableList";
import user_database from "../../user_database";

class ResourcesList extends Component {
  render() {
    const { id } = this.props.match.params;
    const { users } = user_database;
    let user = users.filter(item => item.id === id);
    if (user.length === 0) {
      window.location.hash = "/";
    }

    return (
      <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div class="row">
                  <div class="col-12 col-sm-12 col-lg-12">
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="/projectWiki">
                          <i className="fa fa-map-marker" /> Bay Bridge
                          Construction in the bay(P001)
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <ResourcesTableList user={user[0]} />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default ResourcesList;
