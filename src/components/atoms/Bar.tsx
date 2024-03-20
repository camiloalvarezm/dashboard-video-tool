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
      <div className={`w-full h-2 rounded-full bg-${bgColor}`}>
        <div
          className={`h-full rounded-full bg-${fillColor}`}
          style={barStyle}
        ></div>
      </div>
    </>
  );
};

export default Bar;
