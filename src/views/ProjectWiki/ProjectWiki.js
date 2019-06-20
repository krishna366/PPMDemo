import React, { Component } from "react";
import ProjectWikiMenu from "../SubMenu/ProjectWikiMenu";
import SubMenu from "../SubMenu/Submenu";
import BasicInformation from "../../components/ProjectsWiki/BasicInformation";
import RecoardInformation from "../../components/RecoardInformation";
import Activities from "../../components/ProjectsWiki/Activities";
import Attachments from "../../components/Attachments";
import WorkPackages from "../../components/ProjectsWiki/WorkPackages";
import IssueChanges from "../../components/ProjectsWiki/IssueChanges";
import Meetings from "../../components/ProjectsWiki/Meetings";
import Financial from "../../components/ProjectsWiki/Financial";
import Risks from "../../components/ProjectsWiki/Risks";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import StickySidebar from "sticky-sidebar";
import { Row, Col } from "reactstrap";
import projectwiki_database from "../../projectwiki_database";
import database from "../../database";

class ProjectWiki extends Component {
  sidebar = null;

  issueChangesRef = React.createRef();
  workPackageRef = React.createRef();
  meetingMinutesRef = React.createRef();
  financialsRef = React.createRef();
  activityLogRef = React.createRef();

  componentDidMount() {
    setTimeout(this.fixSidebar, 320);
  }

  fixSidebar = () => {
    this.sidebar = new StickySidebar(".sidebar", {
      topSpacing: 0,
      bottomSpacing: 0,
      containerSelector: ".main-content",
      innerWrapperSelector: ".sidebar__inner"
    });
  };

  render() {
    const tasks = projectwiki_database;
    const { recoard_information } = database;
    return (
      <React.Fragment>
        <SubMenu
          refs={{
            issueChangesRef: this.issueChangesRef,
            workPackageRef: this.workPackageRef,
            meetingMinutesRef: this.meetingMinutesRef,
            financialsRef: this.financialsRef,
            activityLogRef: this.activityLogRef
          }}
        />
        <div className="animated fadeIn">
          <div className="row main-content">
            {/* flex-row-reverse align-items-start */}
            <div className="col-12 col-lg-8">
              <Row>
                <Col xs="12">
                  <BasicInformation />
                </Col>
                <Col xs="12">
                  <Activities />
                </Col>

                <Col xs="12">
                  <Attachments />
                </Col>
                <div className="col-12" ref={this.workPackageRef}>
                  <WorkPackages tasks={tasks} />
                </div>
                <div className="col-12" ref={this.issueChangesRef}>
                  <IssueChanges />
                </div>
                <div className="col-12" ref={this.meetingMinutesRef}>
                  <Meetings />
                </div>
                <div className="col-12" ref={this.financialsRef}>
                  <Financial />
                </div>
                <Col xs="12">
                  <Risks />
                </Col>
                <div className="col-12" ref={this.activityLogRef}>
                  <ActivityLog />
                </div>
              </Row>
            </div>

            <div className="col-12 col-lg-4">
              <div className="sidebar">
                <div className="sidebar__inner">
                  <RecoardInformation
                    recoard_information={recoard_information}
                  />
                </div>
              </div>
            </div>
            {/* sidebar */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectWiki;
