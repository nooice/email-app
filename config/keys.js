//logic to determine if we are in production environment or not
if (process.env.NODE_ENV === "production"){
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}