'use strict';
const ApiActions = require('../../actions/api');
const Constants = require('./constants');
const Store = require('./store');

const paypal =  require('paypal-rest-sdk');
var url = '';

paypal.configue(Config.get('/paypal-rest-sdk'));

//json with payment information
var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://mathattack.herokuapp.com/", //need to create a thank you page
        "cancel_url": "http://mathattack.herokuapp.com/donate" // back to donation page if it fails
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "$5 donation to help Math Attack",
                "sku": "item",
                "price": "5.00",//donation amount is $5  
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "5.00" //donation amount is $5  
        },
        "description": "Donation to Group5."
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        //console.log("Create Payment Response");
        //console.log(payment);
        //console.log("\n\n\n\n\n");
        //console.log("redirect url\n");
        //console.log(payment.links[1].href);
        //console.log("\n--------------------------------------");

        url = payment.links[1].href; //use paypal url from payment object
    }
});



class Actions {
    static sendMessage(data) {

        ApiActions.post(
          '/api/donate',
           data,
           Store,
           Constants.SEND_MESSAGE,
           Constants.SEND_MESSAGE_RESPONSE, );
          // window.location=url;//redirect after message is sent 
    
    }

  
  
}


module.exports = Actions;
