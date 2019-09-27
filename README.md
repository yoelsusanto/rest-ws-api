# REST API and WebSocket

Simple program to demonstrate message passing using REST API and WebSocket connection.

## Getting Started

### Prerequisites

Before you can proceed, you must prerequisites have software installed in your computer:

- Package manager such as [npm](https://www.npmjs.com/)  or [yarn](https://yarnpkg.com/lang/en/ )
- JavaScript Runtime [node js](https://nodejs.org/en/)

### Installation

1. Clone the repo.

   ```
   git clone https://github.com/yoelsusanto/rest-ws-api.git
   ```

2. Install packages.

   ```
   yarn install
   ```

## Usage

Note: Make sure your port `3000` is free, otherwise change the port to other free port.

1. Run the server

   ```
   node server.js
   ```

2. Open browser on `localhost:3000`.

3. Send API request with specification defined below and observe the page changes.

## API Specifications

List of API endpoints available for interaction.



#### GET /

Return web page that display list of messages.



#### POST /message

Send message to server. Server response with success if message is received successfully.

##### Example

```
curl -X POST \
  http://localhost:3000/message \
  -H 'Content-Type: application/json' \
  -d '{
	"message" : "my first message"
}'
```

##### Response

```json
{
    "success": true
}
```



#### GET /message

Fetch messages that have been sent to server.

##### Example

```
curl -X GET \
  http://localhost:3000/message
```

##### Response

```
{
    "messages": [
        "my first message",
        "my second message"
    ]
}
```



#### ws /websocket

Maintain long living connection to sync messages from server using WebSocket.