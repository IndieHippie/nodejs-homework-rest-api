

const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");


const updateContact = async(id, data) => {
    const contacts = await listContacts();
    // console.log(contacts)

    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1) {
        return null;
    } 
    contacts[idx] = {...data, id};
    await updateContacts(contacts);
    return contacts[idx];
}

// console.log(updateContact())
module.exports = updateContact;
