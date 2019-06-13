const   http = require('http'),
        fs = require('fs'),
        express = require('express'),
        app = express(),
        pick = require('./Practice/src/Javascript_Sync/Task_1'),
        cat = require('./Practice/src/Javascript_Sync/Task_2'),
        catsGroupGenerate = require('./Practice/src/Javascript_Sync/Task_3'),
        sort = require('./Practice/src/Javascript_Sync/Task_4'),
        nameStats = require('./Practice/src/Javascript_Sync/Task_5');


http.createServer(function(request, response){
    response.end('Hello git merge');
}).listen(3000);