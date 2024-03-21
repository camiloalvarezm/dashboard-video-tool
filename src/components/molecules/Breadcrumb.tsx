import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../atoms/Button";

const Breadcrumb = () => {
  return (
    <>
      <div className="flex flex-row items-center m-2">
        <Button
          title=""
          color="purple"
          size="lg"
          textColor="white"
          iconName={faArrowLeft}
        />
        <nav className="ms-3">
          <ol className="flex flex-row gap-4 text-lg">
            <li>Home</li>
            <li>/</li>
            <li className="font-semibold">BeMaster</li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumb;
