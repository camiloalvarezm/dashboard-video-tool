interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <>
      <div className="border w-full bg-white h-full p-5 rounded-lg overflow-auto">
        {children}
      </div>
    </>
  );
};

export default Card;
