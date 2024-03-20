import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  color?: string;
  textColor?: string;
  title: string;
  size: string;
  hasIcon?: boolean;
  iconName?: IconDefinition;
}

const Button = ({
  color,
  textColor,
  title,
  size,
  iconName,
}: ButtonProps) => {
  const btnSize = `${
    size == "sm"
      ? "px-4 py-1 text-sm rounded-full"
      : "px-4 py-3 rounded-md text-base"
  }`;
  const btnColor = `${color ? " bg-" + color : " bg-gray "}`;
  const btnTextColor = `${textColor ? " text-" + textColor : " text-black"}`;

  return (
    <>
      <button className={btnSize + btnColor + btnTextColor}>
        {iconName && <FontAwesomeIcon icon={iconName} className="me-3" />}
        {title}
      </button>
    </>
  );
};

export default Button;
