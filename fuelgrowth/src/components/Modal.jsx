import React from "react";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { MODALS } from "../constants/enums";
import { hideModal } from "../redux/modal/action";
import { useForm, Controller } from "react-hook-form";

export const FeedbackModal = ({ isVisible, data }) => {
  const { chat_message_id, content, thumbs_up, thumbs_down, remarks } =
    data ?? {};

  console.log("FEEDBACK MODAL DATA", {
    chat_message_id,
    content,
    thumbs_up,
    thumbs_down,
    remarks,
  });

  const dispatch = useDispatch();

  const submitFeedback = (e, data) => {
    e.preventDefault();
    console.log(data);
    dispatch(hideModal(MODALS.FEEDBACK_MODAL, null));
  };
  const onClose = (e) => {
    e.preventDefault();
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
              id="feedback-other"
              placeholder="What do you like about the response?"
              rows="3"
              className="mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
              style={{ height: "90px", overflowY: "hidden" }}
            >
              {remarks}
            </textarea>
          </form>
          <div className="mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row-reverse">
            <Button color="gray" onClick={(e) => submitFeedback(e)}>
              Submit feedback
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const ModalFC = () => {
  const modalState = useSelector((state) => state.modals);
  const feebackModalState = modalState?.modal?.[MODALS.FEEDBACK_MODAL];

  return (
    <>
      <FeedbackModal {...feebackModalState} />
    </>
  );
};
