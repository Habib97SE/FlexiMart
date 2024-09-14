import { Table } from "reactstrap";

const TabTable = () => {
  return (
    <div className="tab-pane fade show active">
      <h5 className="f-w-600 f-16">Profile</h5>
      <div className="table-responsive profile-table">
        <Table className="table-responsive">
          <tbody>
            <tr>
              <td>First Name:</td>
              <td>John</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>Deo</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>johndeo@gmail.com</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Mobile Number:</td>
              <td>2124821463</td>
            </tr>
            <tr>
              <td>DOB:</td>
              <td>Dec, 15 1993</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>USA</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TabTable;
