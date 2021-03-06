import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SubMenu from "../SubMenu/Submenu";
import RecordInformation from "../../components/RecordInformation";
import TaskInformation from "../../components/TaskWiki/TaskInformation";
import Attachments from "../../components/Attachments";
import ActivityLog from "../../components/ProjectsWiki/ActivityLog";
import database from "../../database/database";

class TaskWiki extends Component {
  activityLogRef = React.createRef();
  taskInfoRef = React.createRef();
  render() {
    const { record_information } = database;
    return (
      <React.Fragment>
        {/* <TaskWikiMenu /> */}
        <SubMenu
          refs={{
            activityLogRef: this.activityLogRef,
            taskInfoRef: this.taskInfoRef
          }}
          isMenu={{
            deliverable: false,
            project: false,
            meeting_minutes: false,
            finanical: false,
            risks: false,
            wbs: false,
            issue_changes: false,
            work_package: false,
            meetingInfo: false,
            deliverableInfo: false,
            approvedStatus: false
          }}
          link={"task"}
        />
        <div className="animated fadeIn row">
          <div className="col-12 col-lg-8">
            <Row>
              <div className="col-12" ref={this.taskInfoRef}>
                <TaskInformation />
              </div>

              <Col xs="12">
                <Attachments />
              </Col>

              <div className="col-12" ref={this.activityLogRef}>
                <ActivityLog title="Task ActivityLog" />
              </div>
            </Row>
          </div>
          <div className="col-12 col-lg-4">
            <div className="aside">
              <div className="aside-inner">
                <RecordInformation
                  record_information={record_information}
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

export default TaskWiki;
