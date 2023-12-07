import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav className="bg-white shadow dark:bg-gray-800">
          <ul className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
                    : "text-gray-800 dark:text-gray-200 border-b-2 mx-1.5 sm:mx-6"
                }
              >
                Countries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/most-populous"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
                    : "text-gray-800 dark:text-gray-200 border-b-2 mx-1.5 sm:mx-6"
                }
              >
                Countries by population
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
                    : "text-gray-800 dark:text-gray-200 border-b-2 mx-1.5 sm:mx-6"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
