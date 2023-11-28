import { NavLink } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 px-8 py-14">
      <TbFaceIdError className="text-9xl" />
      <span className="text-7xl">404</span>
      <span className="text-3xl">Page not found</span>
      <p className="text-center text-lg">
        I looked everywhere for this page <br />
        Are you sure the url is correct?
      </p>
      <NavLink
        to="/"
        className="mt-4 rounded-md bg-teal-400/10 px-6 py-3 text-teal-300 duration-300 ease-in-out sm:px-10"
      >
        Go to homepage
      </NavLink>
    </div>
  );
}
