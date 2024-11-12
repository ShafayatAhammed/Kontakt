import { auth } from "../firebase/firebase.js";
import { signOut } from "firebase/auth";

const Confirm = ({ setConfirmDialog }) => {
  const logout = async () => {
    try {
      await signOut(auth);
      setConfirmDialog(false);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-[2px]">
      <div className="max-w-sm bg-white border rounded-lg shadow">
        <div className="flex justify-end p-2">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition-colors"
            onClick={() => setConfirmDialog(false)}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6 pt-0 text-center">
          <svg
            className="w-20 h-20 mx-auto text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 className="mt-5 mb-6 text-xl font-normal text-gray-500">
            Are you sure you want to logout?
          </h3>
          <button
            type="button"
            className="text-white transition-colors bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
            onClick={logout}
          >
            Yes, I'm sure
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 transition-colors focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
            onClick={() => setConfirmDialog(false)}
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
