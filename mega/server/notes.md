## What is Cron Job?

## what is modal?

## Understanding the docs of razorpay

Payment GateWay

step 1: Create an Order Using Orders API
you can give the request parameters

what is payment signature?
it is a hash of all the request parameters and your razorpay secret key
it is used to verify the authenticity of the request


Payment Integration

CapturePayment () 
    |
    |_______> Create an Order Using Orders API
    |_______> Create a Payment Using Payments API



## What is webhooks?



## How it will work 

1. first of all we capture the payment
 i.e. user click o nthe button and we create an order and then we create a payment

2. then we will create a webhook
    i.e. we will create a webhook and then we will send the webhook to the razorpay
    and then razorpay will send the webhook to our server

3. then we will verify the webhook
   if then it is known as the authorized 

4. then we will update the payment status

