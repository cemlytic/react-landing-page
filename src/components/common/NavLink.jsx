const NavLink = ({ label, href, className }) => {
  return (
    <li className={`${className}`}>
      <a href={href} className="transition-all hover:text-orange-500">{label}</a>
    </li>
  );
};

export default NavLink;
