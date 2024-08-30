const Button = ({ href, className, children }) => {
  return (
    <a href={href} className={` rounded-md ${className}`}>
      {children}
    </a>
  );
};

export default Button;
