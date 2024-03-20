import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  color?: string;
  textColor?: string;
  title: string;
  size: string;
  hasIcon?: boolean;
  iconName?: IconDefinition;
  onClick?: Function;
}

const Button = ({
  color,
  textColor,
  title,
  size,
  iconName,
  onClick,
}: ButtonProps) => {
  const btnSize = `${
    size == "sm"
      ? "px-4 py-1 text-sm rounded-full"
      : "px-4 py-3 text-base rounded-md"
  }`;
  const btnColor = `${color ? " bg-" + color : " bg-gray "}`;
  const btnTextColor = `${textColor ? " text-" + textColor : " text-black"}`;

  const onClickButton = () => {
    if (onClick) onClick();
  };

  return (
    <>
      <button
        className={btnSize + btnColor + btnTextColor}
        onClick={onClickButton}
      >
        {iconName && <FontAwesomeIcon icon={iconName} className="me-3" />}
        {title}
      </button>
    </>
  );
};

export default Button;
