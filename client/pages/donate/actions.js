'use strict';
const ApiActions = require('../../actions/api');
const Constants = require('./constants');
const Store = require('./store');
var paypal =  require('paypal-rest-sdk');
var url = '';

//paypal sandbox credentials 
paypal.configure({
  'mode': 'sandbox',
  'client_id':'AfUf2NOZQV9wyGg071zmr96xfYt3KEBjTDCZ8J-H5XowcsTyJchoXuJeEVCdN8kK7O0UTHF6U9IzzfQK',
  'client_secret':'EKk3gdn91Uoz5-PHV5jXE0twMDQ5FJYeAqsZySTnnNPMbqCNUED8vLHMDEebmKi4lDRWCdpMZ_vCzvgv'
});

//json with payment information
var donation_data = {
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
                "name": "Donation to Group 5",
                "sku": "grp5-mathattack",
                "price": "5.00",//donation amount is $5  
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "5.00" //donation amount is $5  
        },
        "description": "A donation of $5.00 to group 5."
    }]
};

paypal.payment.create(donation_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        url = payment.links[1].href; //use paypal url from payment object
    }
});
class Actions {
    static sendMessage(data) {

        ApiActions.post(
          '/api/contact',
           data,
           Store,
           Constants.SEND_MESSAGE,
           Constants.SEND_MESSAGE_RESPONSE, );
           window.location=url;//redirect after message is sent 
    
    }

  //
  
}


module.exports = Actions;
