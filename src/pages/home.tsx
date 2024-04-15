import { useTranslation } from "next-i18next";
import Home from "./home/Home";

const PageHome = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <div>
        PageHome <br />
        Hello, not indeyka! {t("AR_T")}
      </div>
      <Home />
    </>
  );
};

export default PageHome;
