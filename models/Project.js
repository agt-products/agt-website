const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Project Schema
const ProjectSchema = new Schema({
    authorizedUsers: {
        type: [String],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        required: true
    },
    boards: {
        type: Array,
        required: true
    }
});

module.exports = Project = mongoose.model("Project", ProjectSchema);

module.exports.createNewProject = (project, callback) => {
    project.save(callback);
}

module.exports.getProjectsByUserId = (userId, callback) => {
    let query = { authorizedUsers: userId };
    Project.find(query, callback);
}

module.exports.updateProject = (userId, projectId, updates, callback) => {
    let query = { _id: projectId, authorizedUsers: userId };
    Project.findOneAndUpdate(query, { "$set": {...updates} }, { new: true }, callback);
}

module.exports.deleteProject = (userId, projectId, callback) => {
    let query = { _id: projectId, authorizedUsers: userId };
    Project.findOne(query).remove(callback);
}

module.exports.addNewBoard = (userId, projectId, boardData, callback) => {
    let query = { _id: projectId, authorizedUsers: userId };
    Project.findOneAndUpdate(query, { "$push": { boards: boardData } }, { new: true }, callback);
}

module.exports.updateBoard = (userId, projectId, board, updates, callback) => {
    let query = { _id: projectId, authorizedUsers: userId, boards: board };
    Project.findOneAndUpdate(query, { "$set": { "boards.$": { ...board, ...updates } } }, { new: true }, callback);
}

module.exports.deleteBoard = (userId, projectId, board, callback) => {
    let query = { _id: projectId, authorizedUsers: userId, boards: board };
    Project.findOneAndUpdate(query, { "$pull": { boards: board } }, { new: true }, callback);
}

module.exports.addItemToBoard = (userId, projectId, board, item, callback) => {
    let query = { _id: projectId, authorizedUsers: userId, boards: board };
    Project.findOneAndUpdate(query, { "$push": { "boards.$.cart": item } }, { new: true }, callback);
}

module.exports.updateItemInBoard = (userId, projectId, board, itemIndex, updates, callback) => {
    let query = { _id: projectId, authorizedUsers: userId, boards: board };
    Project.findOneAndUpdate(query, { "$set": { ["boards.$.cart." + itemIndex]: { ...board.cart[itemIndex], ...updates } } }, { new: true }, callback);
}

module.exports.removeItemFromBoard = (userId, projectId, board, item, callback) => {
    let query = { _id: projectId, authorizedUsers: userId, boards: board };
    Project.findOneAndUpdate(query, { "$pull": { "boards.$.cart": item } }, { new: true }, callback);
}

module.exports.addAuthorizedUser = (userId, projectId, userToAddId, callback) => {
    let query = { _id: projectId, authorizedUsers: userId };
    Project.findOneAndUpdate(query, { "$addToSet": { "authorizedUsers": userToAddId } }, callback);
}