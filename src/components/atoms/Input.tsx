import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputProps {
  title: string;
  type: string;
  required: boolean;
  iconName: IconDefinition;
}

const Input = ({ title, type, required, iconName }: InputProps) => {
  return (
    <>
      <div className="w-full h-10 bg-white border border-light-gray rounded-md flex flex-row items-center text-cool-gray py-1 px-3 divide-x gap-4">
        <FontAwesomeIcon icon={iconName} className="border-left h-5" />
        <input
          className="w-full focus:outline-none ps-4"
          type={type}
          placeholder={title}
          required={required}
        />
      </div>
    </>
  );
};

export default Input;
