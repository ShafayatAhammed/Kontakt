import { useEffect, useState } from "react";
import Spinner from "./spinner.jsx";
import { Link } from "react-router-dom";

const MyContacts = ({
  editView,
  fullView,
  setFullView,
  setEditView,
  setName,
  setEmail,
  setPhone,
  setAddress,
  setContactId,
  contacts,
  setContacts,
}) => {
  const [loading, setLoading] = useState(true);

  const deleteContact = (index) => {
    setContacts((prevItems) => {
      const updatedItems = [...prevItems];

      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  useEffect(() => {
    setLoading(false);
  });

  return (
    (loading && <Spinner />) ||
    (!contacts.length && (
      <h1 className="absolute text-xl font-semibold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        No Contact Available To Show
      </h1>
    )) || (
      <div className="grid grid-cols-1 gap-5 sm2:grid-cols-2 md2:grid-cols-3 xl3:grid-cols-4">
        {contacts
          .filter((contact) => contact !== null)
          .map(({ id, name, email, phone, address }, i) => {
            return (
              <div
                className="flex flex-col items-center justify-center gap-2 p-3 text-center transition-colors bg-white border rounded-lg cursor-pointer hover:bg-gray-100"
                key={i}
              >
                <img
                  src="/default-pic.jpg"
                  alt="profile-pic"
                  className="w-20 h-20 rounded-full xl4:w-24 xl4:h-24"
                  draggable="false"
                />
                <h3 className="text-xl font-semibold xl4:text-2xl">
                  {name.length <= 21 ? name : name.slice(0, 21) + "..."}
                </h3>
                <div className="flex flex-col gap-2">
                  <Link
                    to={`mailto:${email}`}
                    className="flex items-center justify-center gap-2 text-lg xl4:text-xl hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[25px] h-[25px] xl4:w-[30px] xl4:h-[30px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                      />
                    </svg>{" "}
                    {email.length <= 21 ? email : email.slice(0, 21) + "..."}
                  </Link>
                  <Link
                    to={`tel:${phone}`}
                    className="flex items-center justify-center gap-2 text-lg xl4:text-xl hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[25px] h-[25px] xl4:w-[30px] xl4:h-[30px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21 16.42v3.536a1 1 0 0 1-.93.998Q19.415 21 19 21C10.163 21 3 13.837 3 5q0-.414.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45q.034.344.064.552A13.9 13.9 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.05 13.05 0 0 0 6.844 6.844l1.54-2.154a.46.46 0 0 1 .573-.149a13.9 13.9 0 0 0 4 1.205q.208.03.55.064a.5.5 0 0 1 .449.498"
                      />
                    </svg>{" "}
                    {phone.length <= 21 ? phone : phone.slice(0, 21) + "..."}
                  </Link>
                  <h3 className="flex items-center justify-center gap-2 text-lg xl4:text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[25px] h-[25px] xl4:w-[30px] xl4:h-[30px]"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="m19.799 5.165l-2.375-1.83a2 2 0 0 0-.521-.237A2 2 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335M8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099c-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235c.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5"
                      />
                    </svg>{" "}
                    {address.length <= 21
                      ? address
                      : address.slice(0, 21) + "..."}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="w-fit h-fit"
                    onClick={() => {
                      setContactId(id);
                      setName(name);
                      setEmail(email);
                      setPhone(phone);
                      setAddress(address);
                      setEditView(!editView);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 transition-colors hover:fill-slate-700"
                      viewBox="0 0 24 24"
                    >
                      <g fillRule="evenodd" clipRule="evenodd">
                        <path d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352z" />
                        <path d="M19.846 4.318a2.2 2.2 0 0 0-.437-.692a2 2 0 0 0-.654-.463a1.92 1.92 0 0 0-1.544 0a2 2 0 0 0-.654.463l-.546.578l2.852 3.02l.546-.579a2.1 2.1 0 0 0 .437-.692a2.24 2.24 0 0 0 0-1.635M17.45 8.721L14.597 5.7L9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.5.5 0 0 0 .255-.145l4.778-5.06Z" />
                      </g>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-fit h-fit"
                    onClick={() => deleteContact(i)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 transition-colors hover:fill-red-700"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
                    </svg>
                  </button>
                  {[name, email, phone, address].some(
                    (detail) => detail.length > 21
                  ) && (
                    <button
                      type="button"
                      className="w-fit h-fit"
                      onClick={() => {
                        setContactId(id);
                        setName(name);
                        setEmail(email);
                        setPhone(phone);
                        setAddress(address);
                        setFullView(!fullView);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 transition-colors hover:fill-slate-700"
                        viewBox="0 0 24 24"
                      >
                        <g fillRule="evenodd">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 13a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0-4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M12 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" />
                        </g>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    )
  );
};

export default MyContacts;
