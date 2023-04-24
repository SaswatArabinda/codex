import React from "react";
import {
  Card,
  Dropdown,
  Button,
  Modal,
  Label,
  TextInput,
  Checkbox,
} from "flowbite-react";
import { useState } from "react";

export const Integration = () => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div className="p-4 w-full mt-14 overflow-hidden">
      <div className="max-w-xs">
        <Card>
          <div className="flex flex-col items-center ">
            <img
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="https://omnirio.com/wp-content/uploads/Ominirio-Logo-120x120px-Navy-Blue-11.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Omnirio
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Click below to integrate
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="#"
                onClick={onClick}
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Integrate
              </a>
            </div>
          </div>
        </Card>
      </div>

      <React.Fragment>
        <Modal
          show={showModal}
          size="md"
          popup={true}
          onClose={onClose}
          className="h-full "
        >
          <Modal.Header className="flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5 !p-2 !border-b-0" />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to omnirio platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required={true} />
              </div>
              {/* <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="/modal"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div> */}
              <div className="w-full">
                <Button>Log in to your account</Button>
              </div>
              {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <a
                  href="/modal"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div> */}
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};
