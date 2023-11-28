import { NavLink } from "react-router-dom";
import { PiBracketsCurlyBold } from "react-icons/pi";

export function Header() {
  const navigation = [
    { text: "0. Home", path: "/" },
    { text: "1. Work", path: "/work" },
  ];

  return (
    <header className="mb-14 flex items-center justify-between">
      <PiBracketsCurlyBold className="text-3xl text-teal-300" />
      <nav>
        <ul className="flex gap-10">
          {navigation.map((link) => (
            <li key={link.text}>
              <NavLink
                to={link.path}
                className="text-base duration-300 ease-in-out"
              >
                <span>{link.text.split(" ")[0]}</span>
                {` ${link.text.split(" ")[1]}`}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
