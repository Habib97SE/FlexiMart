import { Href } from "@/Constants";

const SocialMediaIcons = () => {
  return (
    <ul className="social">
      <li>
        <a href={Href}>
          <i className="icon-facebook"></i>
        </a>
      </li>
      <li>
        <a href={Href}>
          <i className="icon-twitter-alt"></i>
        </a>
      </li>
      <li>
        <a href={Href}>
          <i className="icon-instagram"></i>
        </a>
      </li>
      <li>
        <a href={Href}>
          <i className="icon-pinterest-alt"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaIcons;
