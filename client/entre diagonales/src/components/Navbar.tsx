import { Link } from "react-router-dom";

export const Navbar = () => {

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/lugares", label: "Lugares" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="w-full border-b border-green-700 bg-green-700 p-10 mb-8 flex gap-8">
      {links.map(({ to, label }) => {
        return (
          <Link
            key={to}
            to={to}
            className={`
              text-white text-lg font-semibold
              border-b-2 border-transparent
              hover:border-white
              pb-1
            `}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};
