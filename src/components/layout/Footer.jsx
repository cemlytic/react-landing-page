import { platformLinks, resourcesLinks, communityLinks } from "../../constants";
import NavLink from "../common/NavLink";

const FooterSection = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="flex flex-col items-start gap-2">
        {links.map((link, index) => (
          <NavLink key={index} href={link.href} label={link.label} className="text-slate-300 text-sm"/>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const footerSections = [
    { title: "Resources", links: resourcesLinks },
    { title: "Platforms", links: platformLinks },
    { title: "Resources", links: communityLinks },
  ];
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="flex items-center justify-between px-10 gap-10 flex-wrap">
        {footerSections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
