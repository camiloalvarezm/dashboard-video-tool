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
      <div>
        <div className="w-full flex flex-flow justify-between items-baseline mb-1">
          <span style={{ fontSize: "12px" }}>{title}</span>
          <span style={{ fontSize: "10px" }}>{details}</span>
        </div>
        <Bar bgColor={barBgColor} fillColor={barFillColor} value={barValue} />
      </div>
    </>
  );
};

export default BarDetails;
