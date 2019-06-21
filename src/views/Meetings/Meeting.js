import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MeetingMenu from "../SubMenu/MeetingMenu";
import SubMenu from "../SubMenu/Submenu";
import RecoardInformation from "../../components/RecoardInformation";
import Attachments from "../../components/Attachments";
import Comments from "../../components/Comments";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import MeetingInformation from "../../components/Meeting/MeetingInformation";
import MeetingDescription from "../../components/Meeting/MeetingDescription";
import { scrollTop } from "../../utils";
import meeting_database from "../../meeting_database";

class Meeting extends Component {
  sidebar = null;
  issueChangesRef = React.createRef();
  workPackageRef = React.createRef();
  meetingMinutesRef = React.createRef();
  financialsRef = React.createRef();
  activityLogRef = React.createRef();

  componentDidMount() {
    scrollTop();
  }

  render() {
    const { recoard_information } = meeting_database;
    return (
      <React.Fragment>
        <SubMenu
          refs={{
            issueChangesRef: this.issueChangesRef,
            workPackageRef: this.workPackageRef,
            meetingMinutesRef: this.meetingMinutesRef,
            activityLogRef: this.activityLogRef
          }}
          isMenu={{ finanical: false,wbs:false,issue_changes:false,deliverable:false,work_package:false,submit:false }}
         // name={workPackageInfo.name}
        />
        {/* <MeetingMenu /> */}
        <div className="animated fadeIn row">       
            

            <div className="col-12 col-lg-8">
              <Row>
                <div className="col-12" ref={this.meetingMinutesRef}>
                  <MeetingInformation  />
                </div>
                <div className="col-12" >
                  <MeetingDescription />
                </div>

                <Col xs="12">
                  <Attachments />
                </Col>

                <div className="col-12" ref={this.activityLogRef}>
                  <ActivityLog />
                </div>
              </Row>
            </div>
            <div className="col-12 col-lg-4">
            <div className="aside">
              <div className="aside-inner">
                <RecoardInformation
                  recoard_information={recoard_information}
                  isScheduleinfo={false}
                  isWorkflowinfo={false}
                />
              </div>
          </div>

      
        </div>
        </div>

        <Row />
      </React.Fragment>
    );
  }
}

export default Meeting;
