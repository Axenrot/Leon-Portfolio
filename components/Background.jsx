const Background = ({ children }) => {
  return (
    <div className="flex bg-fadingblack w-[100vw] h-[100vh] text-lg justify-center">
      {children}
    </div>
  );
};

export default Background;
