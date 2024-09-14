import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath } from "@/Constants";
import { EmployeeStatusData } from "@/Data/Dashboard";
import { Card, CardBody, Col, Table } from "reactstrap";

const EmployeeStatus = () => {
  return (
    <Col xl="6 xl-100">
      <Card className="height-equal">
        <CommonCardHeader title="Employee Status" />
        <CardBody>
          <div className="user-status table-responsive products-table">
            <Table borderless className="mb-0">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Skill Level</th>
                  <th scope="col">Experience</th>
                </tr>
              </thead>
              <tbody>
                {EmployeeStatusData.map((item, i) => (
                  <tr>
                    <td className="bd-t-none u-s-tb">
                      <div className="align-middle image-sm-size">
                        <img className="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded" src={`${ImagePath}/dashboard/${item.imageSrc}`} alt="" data-original-title="" title="" />
                        <div className="d-inline-block">
                          <h6>
                            {item.name} <span className="text-muted digits">({item.onlineStatus})</span>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>{item.role}</td>
                    <td>
                      <div className="progress-showcase">
                        <div className="progress" style={{ height: 8 }}>
                          <div className={`progress-bar ${item.progress.color}`} style={{ width: item.progress.value }} role="progressbar"></div>
                        </div>
                      </div>
                    </td>
                    <td className="digits">{item.experience}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmployeeStatus;
