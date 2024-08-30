const AccentText = ({ children }) => {
  return (
    <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text">
      {" "}
      {children}
    </span>
  );
};

export default AccentText;
