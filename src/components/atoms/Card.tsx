const Card = ({ children }: { children: any }) => {
  return (
    <>
      <div className="border w-full bg-white h-full p-5 rounded-lg overflow-auto">{children}</div>
    </>
  );
};

export default Card;
