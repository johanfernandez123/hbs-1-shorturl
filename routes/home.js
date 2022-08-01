const express = require('express')
const router = express.Router()

router.get("/", (req,res) => {
    const urls = [
        {origin: "www.google.com/johan", shortURL: "jdhfjr"},
        {origin: "www.google.com/johan1", shortURL: "jdhfjr1"},
        {origin: "www.google.com/johan2", shortURL: "jdhfjr2"},
        {origin: "www.google.com/johan3", shortURL: "jdhfjr3"},
        {origin: "www.google.com/johan4", shortURL: "jdhfjr4"},
    ];
    res.render('home',{urls})
})



module.exports = router