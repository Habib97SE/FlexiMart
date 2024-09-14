import { CardHeader } from "reactstrap";

const CommonCardHeader = ({ title }: { title: string }) => {
  return (
    <CardHeader>
      <h5>{title}</h5>
    </CardHeader>
  );
};

export default CommonCardHeader;
