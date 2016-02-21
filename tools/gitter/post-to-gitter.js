// LICENSE : MIT
"use strict";
const fetch = require("node-fetch");
const token = process.env.GITTER_TOKEN;
module.exports = function postToGitter(message) {
    if (!token) {
        return Promise.reject(new Error("Have to set GITTER_TOKEN env."));
    }
    return fetch("https://api.gitter.im/v1/rooms/56c9cae2e610378809c29b86/chatMessages", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: JSON.stringify({
            "text": message
        })
    }).then(function (res) {
        return res.json();
    })
};