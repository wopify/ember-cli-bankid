# Ember-cli-bankid

This Ember Addon adds a front end component for BankID. This addon does not send a request to the BankID API directly. You have the option to manually implement your own API, or provide a URL for an API that uses `node-bankid`


##How to use

```javascript
{{bank-id
mode= 'sign'||'auth'
personalNumber=200003123928 //String length 12 with only digits. Any other case will invalidate the form. Only required if BankID is not installed on this unit.
lang='sv'||'en'
text=String //Used for displaying messages to the user. Usually displays text which is returned from the API request.
state='loading'||'failed'||'success' //Used to determine symbol to display. Updated based on API response
RPURL=//URL to your node-bankid backend
callBankID=action //Action hook, called when the component sends requests to the server. Can be used to implement your own API calls.
}}


```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
