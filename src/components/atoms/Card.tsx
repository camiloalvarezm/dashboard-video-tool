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
        className={`w-full p-5 rounded-2xl ${height} ${
          overflow && "overflow-auto"
        } bg-${color}`}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
