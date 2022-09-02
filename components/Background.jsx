const Background = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-black to-white w-[100vw] h-[100vh] text-lg">
      {children}
    </div>
  );
};

export default Background;
