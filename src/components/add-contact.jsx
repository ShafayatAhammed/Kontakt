const AddContact = ({
  setPage,
  setName,
  setEmail,
  setPhone,
  setAddress,
  name,
  email,
  phone,
  address,
  contacts,
}) => {
  const addContact = async (e) => {
    e.preventDefault();

    contacts.push({ id: contacts.length + 1, name, email, phone, address });

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");

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
    <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 text-2xl font-semibold text-center text-white uppercase bg-indigo-600">
        Add Contact
      </div>
      <div className="px-6 mt-4">
        <div className="flex items-center justify-center px-4">
          <img
            src="/default-pic.jpg"
            alt="profile-pic"
            className="w-20 h-20 bg-white border-4 border-red-700 rounded-full xl4:w-24 xl4:h-24"
            draggable="false"
          />
        </div>
      </div>
      <form className="px-6 py-4" onSubmit={addContact}>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => handleValue("name", e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => handleValue("email", e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Enter phone"
            value={phone}
            onChange={(e) => handleValue("phone", e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => handleValue("address", e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="px-4 py-2 font-semibold text-white transition-colors bg-indigo-600 rounded outline-none hover:bg-indigo-800"
            type="submit"
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
