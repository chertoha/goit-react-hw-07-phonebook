export const useSubmitContactForm = () => {
  const submitContactHandler = (
    event,
    { contactId = null, mutationHandler, contactList = [], resetFields = null }
  ) => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    if (contactList.find(c => c.name === name)) {
      alert(`${name} is already in contact list`);
    }

    const contact = contactId
      ? { id: contactId, name, phone }
      : { name, phone };

    console.log(contact);
    mutationHandler(contact);

    resetFields && resetFields();
  };

  return { submitContactHandler };
};

// update
// add
