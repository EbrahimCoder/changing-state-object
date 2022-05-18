import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const { name, value } = event.target;

    /* Another version of setState that takes an argument prevState
       which holds the previous state of the app */
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={updateContact}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={updateContact}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
