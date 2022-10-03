'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: "bNyQukWzfKiMiDCKUrzT/cHe8rkQ7JqZDWCTDwj/9fZOu0HSra8scj88dPuVcGvO0btqWINDIW7UZdM9LsEb+LdTc9IGdbbv+BXf834qvM1m4CD2MYdjb1tSXdhhUv+/tGGM7uVJ8PEWEcA6scHd4AdB04t89/1O/w1cDnyilFU=",
  channelSecret: "56b4e10860640ab78c51dadb78da9997",
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc

app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
   if(event.massage.type == 'text' || event.message.text == 'hello'){
   const echo = {
      type: "text",
      text: "tiikittinan"
    };
    return client.replyMessage(event.replyToken, payload);
  

  // create a echoing text message
  //const echo = { type: 'text', text: event.message.text };

  // use reply API
  //return client.replyMessage(event.replyToken, echo);
}
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
