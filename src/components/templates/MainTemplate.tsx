import NavBar from "../organisms/NavBar";
import Card from "../atoms/Card";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full overflow-auto bg-gray p-5 flex flex-row flex-nowrap gap-5">
        <div className="w-80">
          <Card>
            <NavBar />
          </Card>
        </div>
        <div className="w-full">
          <Card>
            <main>{children}</main>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
