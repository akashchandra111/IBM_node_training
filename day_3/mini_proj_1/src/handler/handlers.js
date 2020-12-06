const jwt = require('jsonwebtoken');

const jwtKey = 'my_secret_key'
const jwtExpirySeconds = 300; 

const users = {
  ajay: 'test12',
  ram: 'test12'
}

const users1 = {
    user1: 'password1',
    user2: 'password2'
  }

const signIn = (req, res) => {
  const { username, password } = req.body;
  console.log("login info: ", username, password) ;
  if (!username || !password || users[username] !== password) {
      console.log('login failure') ;
       // return 401 error is username or password doesn't exist / mismatch. 
        return res.status(401).end('login failure');

  } else {
        console.log('login successful') ;
      
    }
  

  // Create a new token.
  const token = jwt.sign({ username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
  })
  console.log('login token:', token) ;

  // set the cookie as the token string.
  res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })
  res.end('login success');

}  // eo signin.


//............ get req ............................................
const welcome = (req, res) => {
  const token = req.cookies.token
  console.log('current token @ welcome: ', token) ;

  // if the cookie is not set, return an unauthorized error
  if (!token) {
     console.log('cookie: not authorized.'); 
    return res.status(401).end('cookie: not authorized.')
  }

  let payload ;

  try {

    payload = jwt.verify(token, jwtKey)
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
        console.log('JsonWebTokenError') ;
      // if the error thrown is because the JWT is unauthorized, return a 401 error.
      return res.status(401).end('JsonWebTokenError') ;
    }
    // otherwise, return a bad request error
    console.log('bad req: 400.') ;
    return res.status(400).end('bad req: 400.')
  }

  // Finally, return the welcome message.
  console.log('welcome msg') ;
  res.send(`Welcome ${payload.username}!`)
}



// ......... post req ...........................................
const refresh = (req, res) => {
 
  const token = req.cookies.token
  console.log('current token @ refresh: ', token)

  if (!token) {
    console.log('refresh: no valid token')  
    return res.status(401).end('refresh: no valid token.')
  }
  else { console.log('refresh: token available: ', token) ; }

  let  payload ;

  try {
    payload = jwt.verify(token, jwtKey);
    console.log("refresh: payload =  ", payload, payload.exp); 


  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
        console.log('refresh:JsonWebTokenError')  
      return res.status(401).end('refresh: JsonWebTokenError');
    }
    return res.status(400).end('400: Error @ welcome')
  }

  const nowUnixSeconds = Math.round(Number(new Date()) / 1000);
  console.log('refresh: nowUnixSeconds = ', nowUnixSeconds) ;


  if (payload.exp - nowUnixSeconds > ( jwtExpirySeconds)) {
    return res.status(400).end('400: token expired.')
  }

  // Now, create a new token for the current user, with a renewed expiration time
  const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
  });

  console.log('refresh: newToken = ', newToken) ;

  // Set the new token as the users `token` cookie
  res.cookie('token', newToken, { maxAge: jwtExpirySeconds * 1000 })
  res.end('token refreshed: ' + newToken); 
}

module.exports = {signIn,  welcome,   refresh } ;

