import Bar from "../atoms/Bar";

interface BarProps {
  title: string;
  details: string;
  barBgColor: string;
  barFillColor: string;
  barValue: number;
}

const BarDetails = ({
  title,
  details,
  barBgColor,
  barFillColor,
  barValue,
}: BarProps) => {
  return (
    <>
      <div className="w-full flex flex-flow justify-between mb-1">
        <span>{title}</span>
        <span className="text-sm">{details}</span>
      </div>
      <Bar bgColor={barBgColor} fillColor={barFillColor} value={barValue} />
    </>
  );
};

export default BarDetails;
