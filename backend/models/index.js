const Activity = require('./activity');
const Collection = require('./collection');
const Configuration = require('./configuration');
const Datafile = require('./datafile');
const Esquema = require('./esquema');
const FricError = require('./fricError');
const Invitation = require('./invitation');
const Role = require('./role');
const Server = require('./server.model');
const Test = require('./test');
const User = require('./user');
const Workspace = require('./workspace');
const Terminal = require('./terminal');

module.exports = {
    Collection,
    Configuration,
    Datafile,
    Esquema,
    FricError,
    Invitation,
    Role,
    Server,
    Test,
    User,
    Workspace,
    Activity,
    Terminal
}