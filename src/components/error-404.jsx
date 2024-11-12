import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <div className="flex flex-col justify-center gap-2 px-4 text-center xspghd:gap-6 xspghd:flex-row xspghd:items-center xspghd:text-start xspghd:justify-start xspghd:px-0">
          <div className="xspghd:pr-6 xspghd:border-r xspghd:border-slate-400">
            <h1 className="text-3xl font-bold md:text-4xl xl4:text-5xl">404</h1>
          </div>
          <div>
            <p className="text-lg font-medium md:text-xl xl4:text-2xl text-slate-500">
              This page could not be found.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3">
          <button
            type="button"
            className="flex items-center justify-center px-6 py-2 text-lg font-bold text-white transition-colors bg-indigo-500 rounded-lg xl4:text-xl hover:bg-indigo-700"
            onClick={() => {
              navigate("/");
            }}
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
