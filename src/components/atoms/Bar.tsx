interface BarProps {
  bgColor: string;
  fillColor: string;
  value: number;
}

const Bar = ({ bgColor, fillColor, value }: BarProps) => {
  const barStyle = {
    width: `${value}%`,
  };

  return (
    <>
      <div className={`w-full h-1.5 rounded-full bg-lila bg-${bgColor}`}>
        <div
          className={`h-full rounded-full bg-${fillColor}`}
          style={barStyle}
        ></div>
      </div>
    </>
  );
};

export default Bar;
