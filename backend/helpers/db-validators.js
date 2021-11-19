const {
    Collection,
    Configuration,
    Datafile,
    Esquema,
    Invitation,
    Role,
    Test,
    User,
    Workspace,
    Terminal,
    Suggestion
} = require('../models');

const isValidRole = async(role = '') => {
    const roleExists = ["USER", "ADMIN"].includes(role);
    //const roleExists = await Role.findOne({ role });
    if (!roleExists) {
        throw new Error(`The role: ${ role } is not contemplated in the BD.`);
    }
};

const emailExists = async(email = '') => {
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw new Error(`The email: ${ email }, is already registered.`);
    }
};

const allowedEntities = (entity = '', entities = []) => {

    const included = entities.includes(entity);
    if (!included) {
        throw new Error(`The entity ${ entity } is not allowed (allowed entities:${ entities })`);
    }
    return true;
}

/**
 * Collection
 */
const collectionExistsById = async(id) => {
    const collectionExists = await Collection.findById(id);
    if (!collectionExists) {
        throw new Error(`The collection with id: ${ id } does not exist.`);
    }
}

/**
 * Configuration
 */
const configurationExistsById = async(id) => {
    const configurationExists = await Configuration.findById(id);
    if (!configurationExists) {
        throw new Error(`The configuration with id: ${ id } does not exist.`);
    }
}

/**
 * Datafile
 */
const datafileExistsById = async(id) => {
    const datafileExists = await Datafile.findById(id);
    if (!datafileExists) {
        throw new Error(`The datafile with id: ${ id } does not exist.`);
    }
}

/**
 * Esquema
 */
const esquemaExistsById = async(id) => {
    const esquemaExists = await Esquema.findById(id);
    if (!esquemaExists) {
        throw new Error(`The esquema with id: ${ id } does not exist.`);
    }
}

/**
 * Invitation
 */
const invitationExistsById = async(id) => {
    const invitationExists = await Invitation.findById(id);
    if (!invitationExists) {
        throw new Error(`The invitation with id: ${ id } does not exist.`);
    }
}

/**
 * Role
 */
const roleExistsById = async(id) => {
    const roleExists = await Role.findById(id);
    if (!roleExists) {
        throw new Error(`The role with id: ${ id } does not exist.`);
    }
}

/**
 * Test
 */
const testExistsById = async(id) => {
    const testExists = await Test.findById(id);
    if (!testExists) {
        throw new Error(`The test with id: ${ id } does not exist.`);
    }
}

/**
 * User
 */
const userExistsById = async(id) => {

    const userExists = await User.findById(id);
    if (!userExists) {
        throw new Error(`The user with id: ${ id } does not exist.`);
    }
};

/**
 * Workspace
 */
const workspaceExistsById = async(id) => {
    const workspaceExists = await Workspace.findById(id);
    if (!workspaceExists) {
        throw new Error(`The workspace with id: ${ id } does not exist.`);
    }
}

/**
 * Terminal
 */
const terminalExistsById = async(id) => {
    const terminalExists = await Terminal.findById(id);
    if (!terminalExists) {
        throw new Error(`The terminal with id: ${ id } does not exist.`);
    }
}

/**
 * Suggestion
 */
const suggestionExistsById = async(id) => {
    const suggestionExists = await Suggestion.findById(id);
    if (!suggestionExists) {
        throw new Error(`The suggestion with id: ${ id } does not exist.`);
    }
}

/**
 * Entity
 */
//  const entityExistsById = async( id ) => {
//     const entityExists = await Entity.findById(id);
//     if ( !entityExists ) {
//         throw new Error(`The id: ${ id } does not exist.`);
//     }
// }

module.exports = {
    isValidRole,
    emailExists,
    allowedEntities,
    collectionExistsById,
    configurationExistsById,
    datafileExistsById,
    esquemaExistsById,
    invitationExistsById,
    roleExistsById,
    testExistsById,
    userExistsById,
    workspaceExistsById,
    terminalExistsById,
    suggestionExistsById
};