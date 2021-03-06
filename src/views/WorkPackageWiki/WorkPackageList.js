import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import WorkPackageTableList from "../../components/WorkPackageWiki/WorkPackageTableList";
import projectwiki_database from "../../database/projectwiki_database";

class WorkPackageList extends Component {
  render() {
    let search = new URLSearchParams(this.props.location.search);
    let searchPage = search.get("page");
    //let projectid = search.get("p");

    const { workPackages } = projectwiki_database[0];
    let workPackagesListsData =
      searchPage === "dashboard" ? workPackages : workPackages;
    let workpackageList = [];

    workPackagesListsData
      .filter(item => (searchPage === "psr" ? item.wbsType !== "Rebar" : item))
      .forEach(
        item =>
          item.page === searchPage &&
          workpackageList.push({
            workpackage_number: item.wbsNumber,
            WorkPackage_name: item.name,
            duration: item.duration,
            start_date: item.start_date,
            end_date: item.end_date,
            owners: item.resources,
            description: item.description,
            status: item.status,
            deliverables: item.deliverable,
            issues: item.issues,
            changes: item.changes,
            per_complete: item.complete,
            public: item.public
          })
      );
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
                        <Link to="/projectwiki/60453005">
                          <i className="fa fa-map-marker px-1" />Extensions
                          N/Cape Mall Phase 3 (60453005)
                        </Link>
                      </li>
                    </ol>
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="/500" className="mr-2">
                          <i className="fa fa-save" /> Save
                        </Link>
                        <Link to="/500" className="mr-2">
                          <i className="fa fa-plus-square" /> Create New
                        </Link>
                        <Link to="/500" className="mr-2">
                          <i className="fa fa-edit" /> Edit
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
              <WorkPackageTableList workpackageList={workpackageList} />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkPackageList;
