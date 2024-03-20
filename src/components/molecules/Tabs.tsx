import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../atoms/Button";
import { faFolder, faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { Item } from "../../utils/statics/tabs";

interface TabsProps {
  elements: Item[];
  children: React.ReactNode;
}

const Tabs = ({ elements, children }: TabsProps) => {
  return (
    <>
      <div className="flex flex-row justify-between mb-4">
        <div className="flex flex-row gap-10">
          {elements.map((element: Item, index: number) => (
            <span
              className={`borde text-base cursor-pointer flex flex-row items-end ${
                element.active && "text-purple border-b-2 border-purple"
              }`}
              key={index}
            >
              <FontAwesomeIcon icon={element.iconName} className="me-3 pb-1" />
              {element.title}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-4">
          <Button
            title="Nueva carpeta"
            iconName={faFolder}
            size="lg"
            color="gray"
            textColor="black"
          />
          <Button
            title="Nuevo video"
            iconName={faCirclePlay}
            size="lg"
            color="purple"
            textColor="white"
          />
        </div>
      </div>
      {children}
    </>
  );
};

export default Tabs;
