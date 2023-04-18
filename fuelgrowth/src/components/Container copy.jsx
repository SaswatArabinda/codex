import React from "react";

export const Container = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4 ">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>

          {/* Experiment starts */}
          <div className="  mb-4 ">
            <div
              className="prompt-container flex flex-wrap
          items-end justify-center border border-silver-150 p-2 rounded-xl"
            >
              <span className="mx-2 flex w-full flex-grow">
                <div className="editor-textarea h-full w-full">
                  <div
                    className="focus:outline-none focus:expand no-scrollbar mb-1 flex w-full flex-1 resize-none overflow-scroll border-none bg-white text-left text-gray-800 placeholder-purple-300 shadow-none focus:ring-0 focus:ring-transparent md:mb-0"
                    id="chat-editor"
                    // style="min-height: 38px; max-height: 300px;"
                  >
                    <div
                      contenteditable="true"
                      translate="no"
                      tabindex="0"
                      className="ProseMirror"
                    >
                      <p
                        data-placeholder="Ask or search anything"
                        className="is-empty is-editor-empty"
                      >
                        <br className="ProseMirror-trailingBreak" />
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-row justify-between">
                    <div></div>
                  </div>
                </div>
              </span>
              <div className="mt-2 flex w-full items-center justify-between">
                <button
                  aria-label=""
                  tabindex="0"
                  className="focus:outline-none flex select-none items-center rounded py-3 text-xs font-medium ring-offset-2 focus:ring-2 flex w-max rounded-md border border-turquoise-300 bg-turquoise-50 !py-1.5 !px-3 text-xs text-gray-600 hover:bg-turquoise-100 bg-purple-800 text-white px-5"
                >
                  <span className="flex-nowrap whitespace-nowrap">
                    <span className="flex">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                      >
                        <path
                          d="M6 6H10"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M6 10H9"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <rect
                          x="2"
                          y="1"
                          width="12"
                          height="14"
                          rx="3"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          opacity="0.5"
                        ></rect>
                      </svg>{" "}
                      Browse Prompts
                    </span>
                  </span>
                </button>
                <span>
                  <button
                    aria-label=""
                    disabled=""
                    tabindex="0"
                    className="focus:outline-none flex select-none items-center rounded py-3 text-xs font-medium ring-offset-2 focus:ring-2 ml-2 flex w-24  rounded-md !py-1.5 !px-3 text-xs text-gray-300 pointer-events-none bg-opacity-50 text-opacity-70 px-5"
                  >
                    <span className="flex-nowrap whitespace-nowrap">
                      <span className="flex">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1"
                        >
                          <path
                            d="M7 2.67992L8.28984 5.25959C8.48336 5.64664 8.79721 5.96049 9.18426 6.15401L11.7639 7.44385L9.18426 8.73368C8.79721 8.92721 8.48336 9.24106 8.28984 9.62811L7 12.2078L5.71017 9.62811C5.51664 9.24106 5.20279 8.92721 4.81574 8.73368L2.23607 7.44385L4.81574 6.15401C5.20279 5.96049 5.51664 5.64664 5.71017 5.25959L7 2.67992Z"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M10.3944 14.3911C10.0259 14.2068 10.0259 13.6809 10.3944 13.4966L12.0176 12.6851C12.1144 12.6367 12.1928 12.5582 12.2412 12.4614L13.0528 10.8383C13.237 10.4698 13.763 10.4698 13.9472 10.8383L14.7588 12.4614C14.8072 12.5582 14.8856 12.6367 14.9824 12.685L16.6056 13.4966C16.9741 13.6809 16.9741 14.2068 16.6056 14.3911L14.9824 15.2026C14.8856 15.251 14.8072 15.3295 14.7588 15.4263L13.9472 17.0494C13.763 17.4179 13.237 17.4179 13.0528 17.0494L12.2412 15.4263C12.1928 15.3295 12.1144 15.251 12.0176 15.2026L10.3944 14.3911Z"
                            fill="currentColor"
                            opacity=".5"
                          ></path>
                        </svg>{" "}
                        <span>Improve</span>
                      </span>
                    </span>
                  </button>
                </span>
                <button
                  data-testid="ask-chat"
                  aria-label="Ask"
                  disabled=""
                  tabindex="0"
                  className="focus:outline-none flex select-none items-center rounded py-3 text-xs font-medium ring-offset-2 focus:ring-2 mbn1 ml-auto grid !h-8 !w-8 content-center justify-items-center rounded-full bg-turquoise-600 !p-2 text-white hover:bg-turquoise-500 bg-purple-800 text-white pointer-events-none bg-opacity-50 text-opacity-70 px-5"
                >
                  <span className="flex-nowrap whitespace-nowrap">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paper-plane-top"
                      className="svg-inline--fa fa-paper-plane-top relative top-px text-sm"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M511.1 255.1c0 12.8-7.625 24.38-19.41 29.41L44.6 477.4c-4.062 1.75-8.344 2.594-12.59 2.594c-8.625 0-17.09-3.5-23.28-10.05c-9.219-9.766-11.34-24.25-5.344-36.27l73.66-147.3l242.1-30.37L77.03 225.6l-73.66-147.3C-2.623 66.3-.4982 51.81 8.72 42.05c9.25-9.766 23.56-12.75 35.87-7.453L492.6 226.6C504.4 231.6 511.1 243.2 511.1 255.1z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className=" ">
            <form>
              <label for="chat" className="sr-only">
                Your message
              </label>
              <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Add emoji</span>
                </button>
                <textarea
                  id="chat"
                  rows="1"
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
                <button
                  type="submit"
                  className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </form>
          </div>
          {/* Experiment ends here */}
        </div>
      </div>
    </>
  );
};
export default Container;
