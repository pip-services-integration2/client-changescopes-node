# Client API (version 1) <br/> Change Scopes Microservices Client SDK for Node.js

Node.js client API for Change scopes microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [IChangeScopesClientV1 interface](#interface)
    - [getScopeById()](#operation1)
    - [changeScope()](#operation2)
    - [changeScopeElement()](#operation3)
    - [deleteScopeById()](#operation4)
* [ChangeScopesHttpClientV1 class](#client_http)
* [ChangeScopesSenecaClientV1 class](#client_seneca)
* [ChangeScopesDirectClientV1 class](#client_direct)
* [ChangeScopesNullClientV1 class](#client_null)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "client-changescopes-node": "^1.0.0",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
var sdk = new require('client-changescopes-node');

// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};

// Create the client instance
var client = sdk.ChangeScopesHttpClientV1(config);

// Open client connection to the microservice
client.open(null, function(err) {
    if (err) {
        console.error(err);
        return; 
    }
    
    console.log('Opened connection');
    
    // Change scope
    client.changeScope(
        null,
        '123',
        function (err, scope) {
            if (err) {
                console.error(err);
                return;
            }
            
            console.log('Changed scope is');
            console.log(scope);
            
            // Get settings for a party
            client.getScopeById(
                null,
                '123',
                function (err, scope) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    
                    console.log('Retrieved scope is');
                    console.log(scope);
                    
                    // Close connection
                    client.close(); 
                }
            );
        }
    );
});
```

## <a name="interface"></a> IChangeScopesClientV1 interface

If you are using Typescript, you can use IChangeScopesClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IChangeScopesClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IChangeScopesClientV1 {
    getScopeById(correlationId, id, callback);
    changeScope(correlationId, id, callback);
    changeScopeElement(correlationId, id, element, callback);
    deleteScopeById(correlationId, id, callback);
}
```

### <a name="operation1"></a> getScopeById(correlationId, id, callback)

Get change scope by its unique id

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- id: string - unique scope id

**Returns:**
- err: Error - occured error or null for success
- result: ChangeScopeV1 - change scope object

### <a name="operation2"></a> changeScope(correlationId, id, callback)

Changes scope specified by its unique id

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- id: string - unique scope id

**Returns:**
- err: Error - occured error or null for success
- result: ChangeScopeV1 - updated change scope object

### <a name="operation3"></a> changeScopeElement(correlationId, id, element, callback)

Changes specified scope element

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- id: string - unique scope id
- element: string - name of a scope element
 
**Returns:**
- err: Error - occured error or null for success
- result: ChangeScopeV1 - updated change scope object

### <a name="operation4"></a> deleteScopeById(correlationId, id, callback)

Delete scope by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- id: string - unique section id

**Returns:**
- err: Error - occured error or null for success
- result: ChangeScopeV1 - deleted change scope object

## <a name="client_http"></a> ChangeScopesHttpClientV1 class

ChangeScopesHttpClient is a client that implements HTTP protocol

```javascript
class ChangeScopesHttpClientV1 extends CommandableHttpClient implements IChangeScopesClient {
    constructor(config?: any);
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getScopeById(correlationId, allback);
    changeScope(correlationId, id, callback);
    changeScopeElement(correlationId, id, element, callback);
    deleteScopeById(correlationId, id, callback);
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - protocol: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> ChangeScopesSenecaClientV1 class

ChangeScopesSenecaClientV1 is a client that implements Seneca protocol

```javascript
class ChangeScopesSenecaClientV1 extends CommandableSenecaClient implements IChangeScopesClient {
    constructor(config?: any);        
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getScopeById(correlationId, allback);
    changeScope(correlationId, id, callback);
    changeScopeElement(correlationId, id, element, callback);
    deleteScopeById(correlationId, id, callback);
}
```

**Constructor config properties:** 
- connection: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - type: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_direct"></a> ChangeScopesDirectClientV1 class

ChangeScopesDirectClientV1 is a dummy client calls controller from the same container. 
It can be used in monolytic deployments.

```javascript
class ChangeScopesDirectClientV1 extends DirectClient implements IChangeScopesClient {
    constructor();
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getScopeById(correlationId, allback);
    changeScope(correlationId, id, callback);
    changeScopeElement(correlationId, id, element, callback);
    deleteScopeById(correlationId, id, callback);
}
```

## <a name="client_null"></a> ChangeScopesNullClientV1 class

ChangeScopesNullClientV1 is a dummy client that mimics the real client but doesn't call a microservice. 
It can be useful in testing scenarios to cut dependencies on external microservices.

```javascript
class ChangeScopesNullClientV1 implements IChangeScopesClient {
    constructor();
    getScopeById(correlationId, allback);
    changeScope(correlationId, id, callback);
    changeScopeElement(correlationId, id, element, callback);
    deleteScopeById(correlationId, id, callback);
}
```
