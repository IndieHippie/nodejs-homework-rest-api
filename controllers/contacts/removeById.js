
const {NotFound} = require("http-errors");
const contactsOperations = require("../../models/contacts");

const removeById = async(req, res) => {
        const {id} = req.params;
        const result = await contactsOperations.removeContact(id);
        if (!result) {
            throw new NotFound(`Contact with id=${id} not found`);
        }
        res.json({
            status: "success",
            code: 200,
            message: "Contact delete",
            data: {
                result
            }
        })
}

module.exports = removeById;