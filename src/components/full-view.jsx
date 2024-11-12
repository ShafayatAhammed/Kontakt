import React from "react";
import { Link } from "react-router-dom";

const FullView = ({
  setFullView,
  setName,
  setEmail,
  setPhone,
  setAddress,
  name,
  email,
  phone,
  address,
}) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-[2px] z-50">
      <div className="w-full h-full xspghd2:w-[500px] xspghd2:h-[400px] xl4:w-[600px] xl4:h-[500px] bg-indigo-600 xspghd2:rounded-xl p-4 overflow-auto">
        <div className="flex justify-end">
          <button
            type="button"
            className="transition-colors cursor-pointer w-fit h-fit fill-white hover:fill-gray-300"
            onClick={() => {
              setName("");
              setEmail("");
              setPhone("");
              setAddress("");
              setFullView(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] xl4:w-[40px] xl4:h-[40px]"
              viewBox="0 0 1024 1024"
            >
              <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496" />
            </svg>
          </button>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-3 mt-3 text-center"
          style={{ wordBreak: "break-word" }}
        >
          <img
            src="/default-pic.jpg"
            alt="profile-pic"
            className="w-20 h-20 bg-white border-4 border-red-700 rounded-full xl4:w-24 xl4:h-24"
            draggable="false"
          />
          <h3 className="text-xl font-semibold text-white xl4:text-2xl">
            {name}
          </h3>
          <h3 className="text-lg font-semibold text-white xl4:text-2xl">
            Email :{" "}
            <Link
              to={`mailto:${email}`}
              className="font-normal hover:underline"
            >
              {email}
            </Link>
          </h3>
          <h3 className="text-lg font-semibold text-white xl4:text-2xl">
            Phone :{" "}
            <Link to={`tel:${phone}`} className="font-normal hover:underline">
              {phone}
            </Link>
          </h3>
          <h3 className="text-lg font-semibold text-white xl4:text-2xl">
            Address : <span className="font-normal">{address}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FullView;
