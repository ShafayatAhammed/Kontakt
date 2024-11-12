import { useState } from "react";
import { createPortal } from "react-dom";

const Sidebar = ({ page, setPage, confirmDialog, setConfirmDialog }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => setPage("contacts")}
        className={`flex items-center mt-14 lg2:mt-5 gap-2 py-2 pl-8 xl4:pl-11 font-semibold w-full text-xl xl4:text-2xl ${
          page === "contacts"
            ? "bg-indigo-600 text-white"
            : "hover:bg-indigo-600 hover:text-white transition-colors duration-[250ms]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
        >
          <path
            fill={`${page === "contacts" ? "white" : "currentColor"}`}
            d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
          />
        </svg>
        My Contacts
      </button>
      <button
        type="button"
        onClick={() => setPage("add-contact")}
        className={`flex items-center gap-2 py-2 pl-8 xl4:pl-11 font-semibold w-full text-xl xl4:text-2xl ${
          page === "add-contact"
            ? "bg-indigo-600 text-white"
            : "hover:bg-indigo-600 hover:text-white transition-colors duration-[250ms]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
        >
          <path
            fill={`${page === "add-contact" ? "white" : "currentColor"}`}
            d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-8 2.999c1.648 0 3 1.351 3 3A3.01 3.01 0 0 1 13 11c-1.647 0-3-1.353-3-3.001c0-1.649 1.353-3 3-3M19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5z"
          />
        </svg>
        Add Contact
      </button>
      <button
        type="button"
        onClick={() => setConfirmDialog(!confirmDialog)}
        className={`flex items-center gap-2 py-2 font-semibold pl-8 xl4:pl-11 w-full text-xl xl4:text-2xl hover:bg-red-600 hover:text-white transition-colors duration-[250ms] fill-black hover:fill-white`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 36 36"
        >
          <path
            d="M23 4H7a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6h-9.37a1 1 0 0 1-1-1a1 1 0 0 1 1-1H25V6a2 2 0 0 0-2-2"
            className="clr-i-solid clr-i-solid-path-1"
          />
          <path
            fill="currentColor"
            d="M28.16 17.28a1 1 0 0 0-1.41 1.41L30.13 22H25v2h5.13l-3.38 3.46a1 1 0 1 0 1.41 1.41l5.84-5.8Z"
            className="clr-i-solid clr-i-solid-path-2"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
        Logout
      </button>
    </>
  );
};

const MainSidebar = ({ page, setPage, confirmDialog, setConfirmDialog }) => {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const toggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };

  return (
    <>
      <div className="top-0 left-0 w-[43px] h-screen border-r-2 sticky lg2:hidden">
        <button type="button" onClick={toggleSidebar} className="w-fit h-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 mt-4"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M6 14h6.75c.69 0 1.25-.56 1.25-1.25v-.5c0-.69-.56-1.25-1.25-1.25H6zm0-4h6.75c.69 0 1.25-.56 1.25-1.25v-1.5C14 6.56 13.44 6 12.75 6H6zM5 6v4H3.25C2.56 10 2 9.44 2 8.75v-1.5C2 6.56 2.56 6 3.25 6zm1-1h6.75C13.44 5 14 4.44 14 3.75v-.5C14 2.56 13.44 2 12.75 2H6zM5 2v3H3.25C2.56 5 2 4.44 2 3.75v-.5C2 2.56 2.56 2 3.25 2zm0 9v3H3.25C2.56 14 2 13.44 2 12.75v-.5c0-.69.56-1.25 1.25-1.25z"
            />
          </svg>
        </button>
      </div>
      <div className="sticky top-0 left-0 flex-col hidden w-64 h-screen gap-2 border-r-2 xl4:w-80 lg2:flex">
        <Sidebar
          page={page}
          setPage={setPage}
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </div>
      {displaySidebar &&
        createPortal(
          <div className="fixed top-0 left-0 z-50 w-64 h-screen bg-white border-r">
            <button
              type="button"
              className="absolute p-[2px] transition-colors bg-white border rounded-full -right-4 top-2 hover:bg-gray-100"
              onClick={() => setDisplaySidebar(!displaySidebar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
                />
              </svg>
            </button>
            <Sidebar
              page={page}
              setPage={setPage}
              confirmDialog={confirmDialog}
              setConfirmDialog={setConfirmDialog}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default MainSidebar;
