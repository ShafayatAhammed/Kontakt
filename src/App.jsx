import { useState } from "react";
import MainSidebar from "./components/sidebar.jsx";
import MyContacts from "./components/my-contacts.jsx";
import AddContact from "./components/add-contact.jsx";
import Confirm from "./components/confirm.jsx";
import { createPortal } from "react-dom";
import FullView from "./components/full-view.jsx";
import EditView from "./components/edit-view.jsx";

const App = () => {
  const [page, setPage] = useState("contacts");
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [fullView, setFullView] = useState(false);
  const [editView, setEditView] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [contactId, setContactId] = useState(null);
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <div className="flex gap-5">
        <MainSidebar
          page={page}
          setPage={setPage}
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
        <div className="relative flex-grow py-5 pr-5">
          {(page === "contacts" && (
            <MyContacts
              setFullView={setFullView}
              setEditView={setEditView}
              fullView={fullView}
              editView={editView}
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
              setAddress={setAddress}
              setContactId={setContactId}
              contacts={contacts}
              setContacts={setContacts}
            />
          )) ||
            (page === "add-contact" && (
              <AddContact
                setPage={setPage}
                name={name}
                email={email}
                phone={phone}
                address={address}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
                setAddress={setAddress}
                contacts={contacts}
              />
            ))}
        </div>
      </div>
      {confirmDialog &&
        createPortal(
          <Confirm setConfirmDialog={setConfirmDialog} />,
          document.body
        )}
      {fullView &&
        createPortal(
          <FullView
            setFullView={setFullView}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setAddress={setAddress}
            name={name}
            email={email}
            phone={phone}
            address={address}
          />,
          document.body
        )}
      {editView &&
        createPortal(
          <EditView
            setEditView={setEditView}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setAddress={setAddress}
            name={name}
            email={email}
            phone={phone}
            address={address}
            setContactId={setContactId}
            contactId={contactId}
            setPage={setPage}
            contacts={contacts}
          />,
          document.body
        )}
    </>
  );
};

export default App;
