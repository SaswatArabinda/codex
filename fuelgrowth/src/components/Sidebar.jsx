import NewChat from "./NewChat";
import { PreviousSessions } from "./PreviousSessions";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const Sidebar = () => {
  const { DASHBOARD, INTEGRATION } = ROUTES;
  const [isSecondSidebarEnabled, setSecondSidebarEnabled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const hideSecondarySidebar = () => {
    setSecondSidebarEnabled(false);
  };
  const showSecondarySidebar = () => {
    setSecondSidebarEnabled(true);
  };
  const handleDashboardClick = (e) => {
    e.preventDefault();
    showSecondarySidebar();
    // Navigato dashboard page
    navigate(DASHBOARD);
  };

  const handleIntegrationClick = (e) => {
    e.preventDefault();
    hideSecondarySidebar();
    // Navigato integration page
    navigate(INTEGRATION);
  };

  useEffect(() => {
    if (pathname !== INTEGRATION) {
      showSecondarySidebar();
    }
  }, [pathname]);

  return (
    <aside
      id="logo-sidebar"
      className="fixed md:static top-0 left-0 z-40 h-screen  transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="flex h-full">
        <div className="h-full px-3 pb-4 overflow-y-auto pt-20 bg-white dark:bg-gray-800 border-r border-gray-200 z-20">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                onClick={(e) => handleDashboardClick(e)}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => handleIntegrationClick(e)}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {/*transform transition-width transition-transform -translate-x-full w-0 px-0 */}
        <div
          className={`h-full  pb-4 overflow-y-auto pt-20 bg-white dark:bg-gray-800 z-10 transform transition-all  ${
            isSecondSidebarEnabled
              ? "w-48 px-3"
              : " -translate-x-full w-0 px-0 "
          }`}
        >
          <ul className="space-y-2 font-medium">
            <NewChat />

            <PreviousSessions />
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
