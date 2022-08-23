# Change Scopes Microservice Client SDK for Node.js

This is a Node.js client SDK for [service-changescopes](https://github.com/pip-services-infrastructure2/service-changescopes-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP/REST client
* Seneca client (see http://www.senecajs.org)
* Null client to be used in testing

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-changescopes-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-changescopes-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.ChangeScopesHttpClientV1(config);

// Connect to the microservice
await client.open(null);

// Work with the microservice
...
```

Now the client is ready to perform operations
```javascript
// Change scope
let scope = await client.changeScope(
    null,
    '123'
);
```

```javascript
// Read change scope
let scope = await client.getScopeById(
    null,
    '123'
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

