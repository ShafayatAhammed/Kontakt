const EditView = ({
  setEditView,
  setName,
  setEmail,
  setPhone,
  setAddress,
  name,
  email,
  phone,
  address,
  contactId,
  setContactId,
  setPage,
  contacts,
}) => {
  const editContact = async (e) => {
    e.preventDefault();

    contacts[contactId - 1] = {
      id: contactId,
      name,
      email,
      phone,
      address,
    };

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setContactId(null);
    setEditView(false);
    setPage("contacts");
  };

  const handleValue = (field, value) => {
    const fields = {
      name: setName,
      email: setEmail,
      phone: setPhone,
      address: setAddress,
    };

    fields[field](value);
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-[2px] z-50">
      <div className="sm:w-[600px] sm:h-[500px] w-full h-full xl4:w-[700px] xl4:h-[550px] bg-indigo-600 sm:rounded-xl overflow-auto">
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-indigo-600">
          <button
            type="button"
            className="transition-colors cursor-pointer w-fit h-fit fill-white hover:fill-gray-300"
            onClick={() => {
              setName("");
              setEmail("");
              setPhone("");
              setAddress("");
              setContactId(null);
              setEditView(false);
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
        <div className="mt-3">
          <div className="flex items-center justify-center px-4">
            <img
              src="/default-pic.jpg"
              alt="profile-pic"
              className="w-20 h-20 bg-white border-4 border-red-700 rounded-full xl4:w-24 xl4:h-24"
              draggable="false"
            />
          </div>
          <form className="mt-3" onSubmit={editContact}>
            <div className="px-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-lg font-semibold text-white xl4:text-xl"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-white text-lg xl4:text-xl rounded-md block w-full p-2.5 outline-none"
                  placeholder="enter name"
                  value={name}
                  onChange={(e) => handleValue("name", e.target.value)}
                  required
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="email"
                  className="block mb-1 text-lg font-semibold text-white xl4:text-xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-white text-lg xl4:text-xl rounded-md block w-full p-2.5 outline-none"
                  placeholder="enter email"
                  value={email}
                  onChange={(e) => handleValue("email", e.target.value)}
                  required
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="phone"
                  className="block mb-1 text-lg font-semibold text-white xl4:text-xl"
                >
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  className="bg-white text-lg xl4:text-xl rounded-md block w-full p-2.5 outline-none"
                  placeholder="enter phone"
                  value={phone}
                  onChange={(e) => handleValue("phone", e.target.value)}
                  required
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="address"
                  className="block mb-1 text-lg font-semibold text-white xl4:text-xl"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-white text-lg xl4:text-xl rounded-md block w-full p-2.5 outline-none"
                  placeholder="enter address"
                  value={address}
                  onChange={(e) => handleValue("address", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="sticky bottom-0 z-10 flex items-center justify-end p-4 bg-indigo-600">
              <button
                type="submit"
                className="px-4 py-2 text-lg font-semibold transition-colors bg-white rounded-md xl4:text-xl hover:bg-gray-300"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditView;
