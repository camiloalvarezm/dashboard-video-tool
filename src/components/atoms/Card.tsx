interface CardProps {
  children: React.ReactNode;
  color: string;
  height?: string;
  overflow?: boolean;
}

const Card = ({ children, color, height, overflow }: CardProps) => {
  return (
    <>
      <div
        className={`w-full p-5 rounded-2xl bg-${color} ${height} ${
          overflow && "overflow-auto"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
