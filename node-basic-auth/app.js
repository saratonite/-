const http = require('http')

const server = http.createServer((req, res)=> {
    console.log(`The Request `, req);

    // If they pass in a basic auth credentials it i'll be in a header called "Authorization"

    const auth = req.headers['authorization'];
    console.log('Authorization Header is : ', auth);

    if(!auth) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate','Basic realm="Secure Area"')
        res.end("Need Authentication")

    }
    else if(auth) {
        var tmp = auth.split(' ');   // Split on a space, the original auth looks like  "Basic Y2hhcmxlczoxMjM0NQ==" and we need the 2nd part
        
                        var buf = new Buffer(tmp[1], 'base64'); // create a buffer and tell it the data coming in is base64
                        var plain_auth = buf.toString();        // read it back out as a string
        
                        console.log("Decoded Authorization ", plain_auth);
        
                        // At this point plain_auth = "username:password"
        
                        var creds = plain_auth.split(':');      // split on a ':'
                        var username = creds[0];
                        var password = creds[1];
        
                        if((username == 'hack') && (password == 'hack1')) {   // Is the username/password correct?
        
                                res.statusCode = 200;  // OK
                                res.end('<html><body>Congratulations you just hax0rd teh Gibson!</body></html>');
                        }
                        else {
                                res.statusCode = 401; // Force them to retry authentication
                                res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        
                                // res.statusCode = 403;   // or alternatively just reject them altogether with a 403 Forbidden
        
                                res.end('<html><body>You shall not pass</body></html>');
                        }
    }
})

server.listen(3000, () => {
    console.log(`Server running`)
})