import { Href, ImagePath } from "@/Constants";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setOpenCloseSidebar, setRightSidebar } from "@/Redux/LayoutReducer";
import Image from "next/image";
import { Fragment, useState } from "react";
import { AlignLeft, Bell, Maximize2, MessageSquare, MoreHorizontal } from "react-feather";
import { Badge, Col, Row } from "reactstrap";
import Language from "./Language";
import Notification from "./Notification";
import SearchHeader from "./SearchHeader";
import UserMenu from "./UserMenu";

const Header = () => {
  const { sidebar, rightSidebar } = useAppSelector((store) => store.LayoutReducer);
  const dispatch = useAppDispatch();
  const [fullScreen, setFullScreen] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [navMenus, setNavMenus] = useState(false);

  const toggle = () => {
    setNavMenus(!navMenus);
  };

  const goFull = (isFullScreen: boolean) => {
    setFullScreen(isFullScreen);
    if (isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return (
    <Fragment>
      <div className={`page-main-header ${sidebar && "open"}`}>
        <Row className="main-header-right">
          <div className="main-header-left d-lg-none col-auto">
            <div className="logo-wrapper">
              <a href={Href}>
                <img  className="blur-up lazyloaded" src={`${ImagePath}/dashboard/multikart-logo-black.png`} alt="" />
              </a>
            </div>
          </div>
          <div className="mobile-sidebar col-auto p-0">
            <div className="media-body text-end switch-sm">
              <label className="switch">
                <a
                  href={Href}
                  onClick={() => {
                    dispatch(setOpenCloseSidebar(toggleSidebar));
                    setToggleSidebar(!toggleSidebar);
                  }}
                >
                  <AlignLeft />
                </a>
              </label>
            </div>
          </div>
          <Col au className="nav-right ">
            <ul className={"nav-menus " + (navMenus ? "open" : "")}>
              <li>
                <SearchHeader />
              </li>
              <li>
                <a onClick={() => goFull(!fullScreen)} className="text-dark" href={Href}>
                  <Maximize2 />
                </a>
              </li>
              <li className="onhover-dropdown">
                <a className="txt-dark" href={Href}>
                  <h6>EN</h6>
                </a>
                <Language />
              </li>
              <li className="onhover-dropdown">
                <Bell />
                <Badge color="primary" pill className=" rounded-pill badge-primary pull-right notification-badge">
                  3
                </Badge>
                <span className="dot"></span>
                <Notification />
              </li>
              <li>
                <a href={Href} onClick={() => dispatch(setRightSidebar(!rightSidebar))}>
                  <MessageSquare />
                  <span className="dot"></span>
                </a>
              </li>
              <UserMenu />
            </ul>
            <div className="d-lg-none mobile-toggle pull-right" onClick={toggle}>
              <MoreHorizontal />
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Header;
