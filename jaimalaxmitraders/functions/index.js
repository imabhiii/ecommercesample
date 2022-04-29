const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { response,request } = require("express");
const stripe = require("stripe")("sk_test_51Kk3ZdKMZtqqiLCS9iD5tYHBSbNg9aFTwvjzAHi1Fvvr2J1cWg4WzOx7OrQydODP2LUhs7x94sysPei9nou7ZUNm00384AMxTb");

// API

// App config
const app =express();

// middlewares

app.use(cors({origin: true}));
app.use(express.json());
// API routes

app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request,response) => {
    const total =request.query.total;
    console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency:"Rupees",
    });
    response.sendStatus(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/jaimalaxmitraders-ddd14/us-central1/api