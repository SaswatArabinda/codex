import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { MODALS } from "../constants/enums";
import { hideModal } from "../redux/modal/action";
import { useForm } from "react-hook-form";
import { sendFeedback } from "../services/messageService";
import { useRef } from "react";
import { updateMessageForSession } from "../redux/sessions/action";
import { setError } from "../utils/errors";
import { authorizeIntegration } from "../services/integrationService";
import { yupResolver } from "@hookform/resolvers/yup";
import { integrateSchema } from "../validations/integrateUser";
import { FormErrorMessage } from "./FormErrorMessage";

export const FeedbackModal = ({ isVisible, data }) => {
  const textAreaRef = useRef(null);
  const [loader, setLoader] = useState(false);

  const { chat_message_id, content, thumbs_up, thumbs_down, remarks, session } =
    data ?? {};
  const dispatch = useDispatch();

  const submitFeedback = async (e) => {
    e.preventDefault();

    try {
      // Show loader/disable the buttons
      setLoader(true);
      // Send feedback
      await sendFeedback(chat_message_id, {
        thumbs_down: true,
        remarks: textAreaRef.current.value.trim(),
      });

      // Refresh the session
      dispatch(
        updateMessageForSession(session, chat_message_id, {
          thumbs_down: true,
          thumbs_up: false,
          remarks: textAreaRef.current.value.trim(),
        })
      );

      // Hide the modal
      dispatch(hideModal(MODALS.FEEDBACK_MODAL, null));

      // Clear modal
      textAreaRef.current.value = "";
    } catch (error) {
      setError(error);
    }

    // Hide loader
    setLoader(false);
  };
  const onClose = (e) => {
    e.preventDefault();
    // Hide the modal
    dispatch(hideModal(MODALS.FEEDBACK_MODAL, null));
  };

  return (
    <Modal
      className="h-full"
      show={isVisible}
      size="md"
      popup={true}
      onClose={(e) => onClose(e)}
    >
      <Modal.Header>
        <div className="flex items-center justify-between pt-0.5  px-3.5">
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10 bg-red-100">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-red-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h3
                className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"
                id="headlessui-dialog-title-:r4:"
                data-headlessui-state="open"
              >
                Provide additional feedback
              </h3>
            </div>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div
          //   className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-4xl px-4 pt-5 pb-4 sm:p-6"
          id="headlessui-dialog-panel-:r3:"
          data-headlessui-state="open"
        >
          <form>
            <textarea
              ref={textAreaRef}
              id="feedback-other"
              placeholder="What was the issue with the response? How could it be improved?"
              rows="3"
              className="mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
              style={{ height: "90px", overflowY: "hidden" }}
            >
              {remarks}
            </textarea>
          </form>
          <div className="mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row-reverse">
            <Button
              color="gray"
              onClick={(e) => submitFeedback(e)}
              disabled={loader}
            >
              Submit feedback
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const TermsAndConditionsModal = ({ isVisible, data }) => {
  const dispatch = useDispatch();

  const onClose = (e) => {
    e.preventDefault();
    // Hide the modal
    dispatch(hideModal(MODALS.TERMS_AND_CONDITIONS_MODAL, null));
  };

  return (
    <Modal
      className="h-full"
      show={isVisible}
      // size="md"
      popup={true}
      onClose={(e) => onClose(e)}
    >
      <Modal.Header>
        <div className="flex items-center justify-between pt-2  px-4">
          <div className="flex items-center">
            <div className="text-center sm:text-left">
              <h3
                className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"
                id="headlessui-dialog-title-:r4:"
                data-headlessui-state="open"
              >
                Terms and conditions
              </h3>
            </div>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            praesentium? Esse similique eum eaque amet quae, explicabo non
            voluptatum illo porro, at accusantium facere reiciendis sint et
            quisquam ab reprehenderit.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at esse
            voluptatum sequi eaque dolores natus dignissimos cupiditate? Quas
            nemo, repudiandae deserunt quia voluptate officia perferendis
            quisquam, ipsum sit molestias laboriosam fugit, nesciunt architecto
            ratione dicta perspiciatis expedita. Quam, qui ipsa. Quaerat
            mollitia architecto rerum saepe in quisquam porro incidunt!
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            explicabo, sunt ipsam natus reiciendis aspernatur tempora. Minima
            tempora quas incidunt!
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const IntegrationModal = ({ isVisible, data }) => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(integrateSchema),
  });

  const { fg_auth_url, is_integrated, logo_url, name, oauth_url } = data ?? {};

  const signin = async (data) => {
    const { email, password } = data;

    try {
      // Show loader/disable the buttons
      setLoader(true);
      // Signin the user
      await authorizeIntegration(fg_auth_url, {
        email,
        password,
      });
      // Hide the modal
      dispatch(hideModal(MODALS.FEEDBACK_MODAL, null));
      // Refresh Integration Page
      location.reload();
    } catch (error) {
      setError(error);
    }
    // Hide loader
    setLoader(false);
  };
  const onClose = (e) => {
    e.preventDefault();
    // Hide the modal
    dispatch(hideModal(MODALS.FEEDBACK_MODAL, null));
  };

  return (
    <Modal
      show={isVisible}
      size="md"
      popup={true}
      onClose={onClose}
      className="h-full"
    >
      <Modal.Header className="pb-1 border-b-0">
        <div className="space-y-6 px-6 lg:px-8">
          <h3 className="text-md font-medium text-gray-900 dark:text-white">
            Securely sign in to your {name} account
          </h3>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6 px-6 py-4 lg:px-8 pb-0">
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(signin)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
              {errors.email && (
                <FormErrorMessage errorMessage={errors.email?.message} />
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
              {errors.password && (
                <FormErrorMessage errorMessage={errors.password?.message} />
              )}
            </div>

            <button
              type="submit"
              disabled={loader}
              className="w-full text-white bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2563eb] dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-slate-500"
            >
              Sign in
            </button>
          </form>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
            Fuelgrowth is developed by Omnirio
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const ModalFC = () => {
  const modalState = useSelector((state) => state.modals);
  const feebackModalState = modalState?.modal?.[MODALS.FEEDBACK_MODAL];
  const termsAndConditionsModalState =
    modalState?.modal?.[MODALS.TERMS_AND_CONDITIONS_MODAL];
  const integrationModalState = modalState?.modal?.[MODALS.INTEGRATION_MODAL];

  return (
    <>
      <FeedbackModal {...feebackModalState} />
      <TermsAndConditionsModal {...termsAndConditionsModalState} />
      <IntegrationModal {...integrationModalState} />
    </>
  );
};
