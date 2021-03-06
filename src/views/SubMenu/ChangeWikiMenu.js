import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { routesURL } from "../../constant/routesURL";

class ChangeWikiMenu extends Component {
  scrollTo = ({ current: ref }) => {
    let scrollRef = ReactDOM.findDOMNode(ref);
    let scrollOptions = {
      left: 0,
      top: scrollRef.offsetTop,
      behavior: "smooth"
    };
    document.querySelector(".app-body").scrollTo(scrollOptions);
  };

  render() {
    const { refs, title } = this.props;
    return (
      <React.Fragment>
        <nav className="sub-navbar" aria-label="breadcrumb">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12">
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active" area-current="page">
                  <i className="fa fa-map-marker" />{" "}
                  <Link to={routesURL.PROJECT_WIKI + "60453005"}>
                    {" "}
                    Extensions N/Cape Mall Phase 3 (60453005)
                  </Link>{" "}
                  {title && <>:{title}</>}
                </li>
              </ol>
              <ol className="breadcrumb left-breadcrumb">
                <li className="nav-head active " aria-current="page">
                  <Link exact to="/changeslist">
                    <i className="fa fa-sitemap" /> Change Register
                  </Link>
                </li>
                <li className="nav-head active" aria-current="page">
                  <Link
                    className="cursor-pointer"
                    onClick={() => this.scrollTo(refs.changeDescRef)}
                  >
                    <i className="fa fa-sitemap px-1" />Basic Info
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link
                    className="cursor-pointer"
                    onClick={() => this.scrollTo(refs.attachmentRef)}
                  >
                    <i className="fa fa-cloud-upload" /> Attachments
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link
                    exact
                    to="#"
                    onClick={() => this.scrollTo(refs.approvedStatusRef)}
                  >
                    <i className="fa fa-check-square" /> Approval Status
                  </Link>
                </li>

                <li className="nav-head active" aria-current="page">
                  <Link
                    className="cursor-pointer"
                    onClick={() => this.scrollTo(refs.activityLogRef)}
                  >
                    <i className="cui-comment-square" /> Comment
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link
                    className="cursor-pointer"
                    onClick={() => this.scrollTo(refs.activityLogRef)}
                  >
                    <i className="fa fa-clipboard" /> Activity Log
                  </Link>
                </li>
                <li className="nav-head active " aria-current="page">
                  <Link exact to="#">
                    <i className="fa fa-user-secret" /> Associations
                  </Link>
                </li>

                <li className="nav-head active " aria-current="page">
                  <Link exact to="/500">
                    <i className="fa fa-rss" /> Follow
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default ChangeWikiMenu;
