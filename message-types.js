//-----------------------------------------------------------------------
// <copyright file = "message-types.js">
// Copyright (c) 2018 Me!. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

'use strict';

const MessageTypes = {
    None: { responseString: undefined },
    Ping: { responseString: "pong" }
};

// freeze the MessageTypes object so that it cannot be changed. this effectively makes it an enum
module.exports = Object.freeze(MessageTypes);
