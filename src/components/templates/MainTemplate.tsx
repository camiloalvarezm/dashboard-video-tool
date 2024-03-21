import NavBar from "../organisms/NavBar";
import Card from "../atoms/Card";
import PlanDetails from "../organisms/PlanDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import videoToolLogo from "../../assets/images/dashboard-logo.svg";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <div className="h-screen flex flex-col gap-10 justify-center items-center lg:hidden border p-7">
        <img
          src={videoToolLogo}
          alt="video-tool-logo"
          className="w-3/12 animate-bounce"
        />
        <p className="border-purple border-2 rounded-lg px-10 py-5 text-purple text-center">
          No disponible en versión móvil.
        </p>
        <p className="text-center">
          Be Master Dashboard Video Tool disponible en desktop.
        </p>
      </div>
      <div className="hidden lg:fixed lg:top-0 lg:left-0 lg:w-full lg:h-full lg:overflow-auto lg:bg-gray lg:p-5 lg:flex lg:flex-row lg:flex-nowrap lg:gap-5">
        <div className="w-80">
          <Card color="white" height="h-full" overflow>
            <div className="flex justify-end -mt-5 -me-3">
              <FontAwesomeIcon
                icon={faAngleLeft}
                size="lg"
                className="p-2 mt-2 rounded-lg cursor-pointer hover:bg-gray"
              />
            </div>
            <div className="flex flex-col h-full justify-around">
              <NavBar />
              <PlanDetails
                title="Mi Plan - Plus"
                subtitle="El uso se renueva el: 3-may-23"
              />
            </div>
          </Card>
        </div>
        <div className="w-full">
          <Card color="white" height="h-full" overflow>
            <main>{children}</main>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
