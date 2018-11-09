const contactService = require('../service/contact.service');

const readAll = (req, res) => {
    // const promise = contactService.readAll()
    // promise.then(response => {
    //         res.send(response.item)
    //     })
    //     .catch(err => {
    //         res.set(500).send(err)
    //     })


    res.send("ADF")
}


module.exports = {
    readAll
}