import { ImagePath } from "@/Constants";

const UserPanel = () => {
  return (
    <div>
      <div className="sidebar-user text-center">
        <div>
          <img className="img-60 rounded-circle lazyloaded blur-up" src={`${ImagePath}/dashboard/man.png`} alt="#" />
        </div>
        <h6 className="mt-3 f-14">JOHN</h6>
        <p>general manager.</p>
      </div>
    </div>
  );
};

export default UserPanel;
