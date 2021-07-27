let io;
module.exports = {
    init: function(server) {
        // start socket.io server and cache io value
        io = require('socket.io')(server, {
            cors: {
                origins: ['http://localhost:4200']
            }
        });
        return io;
    },
    getio: function() {
        // return previously cached value
        if (!io) {
            console.log("must call .init(server) before you can call .getio()");
        }
        return io;
    }
}
