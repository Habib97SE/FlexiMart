import { Href } from "@/Constants";
import { useAppSelector } from "@/Redux/Hooks";
import { setLanguage } from "@/Redux/LanguageReducer";
import { useTranslation } from "@/app/i18n/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Language = () => {
  const { i18LangStatus } = useAppSelector((store) => store.LangReducer);
  const { i18n } = useTranslation(i18LangStatus);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const lang = pathname.split("/")[1];

  const changeLng = (lng: string) => {
    dispatch(setLanguage(lng));
    i18n.changeLanguage(lng);
    const languageCodeRegex = /^\/[a-z]{2}(\/|$)/;
    const updatedPath = pathname.replace(languageCodeRegex, `/${lng}$1`);
    router.push(updatedPath);
  };
  const LanguageData = [
    {
      lang: "en",
      icon: "is",
      title: "English",
    },
    {
      lang: "es",
      icon: "um",
      title: "Spanish",
    },
    {
      lang: "pt",
      icon: "uy",
      title: "Portuguese",
    },
    {
      lang: "fr",
      icon: "nz",
      title: "French",
    },
  ];
  return (
    <ul className="language-dropdown onhover-show-div p-20">
      {LanguageData.map((item, i) => (
        <li key={i}>
          <a href={Href} data-lng="en" onClick={() => changeLng(item.lang)}>
            <i className={`flag-icon flag-icon-${item.icon}`}></i>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Language;
