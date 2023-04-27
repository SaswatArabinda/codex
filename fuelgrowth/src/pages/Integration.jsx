import React from "react";
import { Card } from "flowbite-react";
import { useState } from "react";
import { useEffect } from "react";
import { PageLoader } from "../components/Loader";
import { useDispatch } from "react-redux";
import { MODALS } from "../constants/enums";
import { setError } from "../utils/errors";
import { showModal } from "../redux/modal/action";
import { getIntegrationListsHelper } from "../helper/getIntegrationListsHelper";

export const Integration = () => {
  const [loader, setLoader] = useState(false);
  const [integrationList, setIntegrationList] = useState(null);
  const dispatch = useDispatch();
  const handleClick = (e, data) => {
    e.preventDefault();
    try {
      dispatch(
        showModal({
          name: MODALS.INTEGRATION_MODAL,
          data,
        })
      );
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    (async () => {
      setLoader(true);
      try {
        // Fetch the integration lists
        const result = await getIntegrationListsHelper();

        setIntegrationList(result);
      } catch (error) {
        setError(error);
      }
      setLoader(false);
    })();
  }, [setLoader, setIntegrationList]);

  if (loader) {
    return <PageLoader className="h-screen " />;
  }
  return (
    <div className="p-4 w-full mt-14 overflow-hidden">
      <div className="max-w-xs">
        {Array.isArray(integrationList) &&
          integrationList.map((list, index) => {
            const { fg_auth_url, logo_url, name, oauth_url, is_integrated } =
              list;

            return (
              <Card key={name}>
                <div className="flex flex-col items-center ">
                  <img
                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                    src={logo_url}
                    alt={name}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {name}
                  </h5>
                  {is_integrated && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      You have already Integrated
                    </span>
                  )}
                  {!is_integrated && (
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                      <a
                        href="#"
                        onClick={(e) => handleClick(e, list)}
                        className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Integrate
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
};
