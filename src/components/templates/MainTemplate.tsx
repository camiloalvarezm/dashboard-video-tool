import NavBar from "../organisms/NavBar";
import Card from "../atoms/Card";
import PlanDetails from "../organisms/PlanDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full overflow-auto bg-gray p-5 flex flex-row flex-nowrap gap-5">
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
