import { TopDashboardCardsData } from "@/Data/Dashboard";
import CountUp from "react-countup";
import { Card, CardBody, Col, Media } from "reactstrap";

const TopDashboardCards = () => {
  return (
    <>
      {TopDashboardCardsData.map((item, i) => (
        <Col key={i} xl="3 xl-50" md="6">
          <Card className=" o-hidden widget-cards">
            <CardBody className={item.bgColor}>
              <Media className="static-top-widget row">
                <div className="icons-widgets col-4">
                  <div className="align-self-center text-center">{item.icon}</div>
                </div>
                <Media body className="col-8">
                  <span className="m-0">{item.type}</span>
                  <h3 className="mb-0">
                    $ <CountUp className="counter" end={item.count} />
                    <small> {item.label}</small>
                  </h3>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default TopDashboardCards;
