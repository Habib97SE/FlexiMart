import { Media, Progress } from "reactstrap";

const ProfileStatus = () => {
  return (
    <div className="project-status">
      <h5 className="f-w-600 f-16">Employee Status</h5>
      <Media>
        <Media body>
          <h6>
            Performance <span className="pull-right">80%</span>
          </h6>
          <Progress color="primary" value={80} className="sm-progress-bar" />
        </Media>
      </Media>
      <Media>
        <Media body>
          <h6>
            Overtime <span className="pull-right">60%</span>
          </h6>
          <Progress value={60} color="secondary" className=" sm-progress-bar" />
        </Media>
      </Media>
      <Media>
        <Media body>
          <h6>
            Leaves taken <span className="pull-right">50%</span>
          </h6>
          <Progress value={50} color="danger" className="sm-progress-bar" />
        </Media>
      </Media>
    </div>
  );
};

export default ProfileStatus;
