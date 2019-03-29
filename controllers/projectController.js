const Project = require("../models/Project");
const User = require("../models/User");

/**
 * @route   POST api/projects/create
 * @desc    Post a new project
 * @access  Public
 */
exports.create_new_project = function(req, res) {
    let newProject = new Project({
        authorizedUsers: [
            req.userId
        ],
        name: req.body.name,
        description: req.body.description,
        comments: [],
        boards: []
    });

    Project.createNewProject(newProject, (err, project) => {
        if(err) {
            return res.status(500).send("There was a problem creating the project.");
        }

        res.status(200).send(project);
    });
}

/**
 * @route   GET api/projects
 * @desc    Get a project
 * @access  Public
 */
exports.get_projects_by_user_id = function(req, res) {
    Project.getProjectsByUserId(req.userId, function(err, projects) {
        if(err) {
            return res.status(500).send("There was a problem finding the projects.");
        }

        if(!projects || projects.length < 1) {
            return res.status(404).send("No project found.");
        }

        res.status(200).send(projects);
    });
}

/**
 * @route   PATCH api/projects/update
 * @desc    Patch a project with updates
 * @access  Public
 */
exports.update_project = function(req, res) {
    Project.updateProject(req.userId, req.body.projId, req.body.updates, function(err, project) {
        if(err) {
            return res.status(500).send("There was a problem finding the project.");
        }

        if(!project) {
            return res.status(404).send("No project found.");
        }

        res.status(200).send(project);
    });
}

/**
 * @route   DELETE api/projects/delete
 * @desc    Delete a project
 * @access  Public
 */
exports.delete_project = function(req, res) {
    Project.deleteProject(req.userId, req.body.projId, function(err) {
        if(err) {
            return res.status(500).send({ success: false });
        }

        res.status(200).send({ success: true });
    });
}

/**
 * @route   POST api/projects/board
 * @desc    Post a new board to a project
 * @access  Public
 */
exports.add_new_board = function(req, res) {
    Project.addNewBoard(req.userId, req.body.projId, req.body.boardData, function(err, project) {
        if(err) {
            return res.status(500).send({ success: false });
        }

        res.status(200).send(project);
    });
}

/**
 * @route   PATCH api/projects/board/update
 * @desc    Patch updates to a project board
 * @access  Public
 */
exports.update_board = function(req, res) {
    Project.updateBoard(req.userId, req.body.projId, req.body.board, req.body.updates, function(err, project) {
        if(err) {
            return res.status(500).send({ success: false });
        }

        res.status(200).send(project);
    });
}

/**
 * @route   PATCH api/projects/board/delete
 * @desc    Patch project to delete a board
 * @access  Public
 */
exports.delete_board = function(req, res) {
    Project.deleteBoard(req.userId, req.body.projId, req.body.board, function(err, project) {
        if(err) {
            return res.status(500).send({ success: false });
        }

        res.status(200).send(project);
    });
}

/**
 * @route   PATCH api/projects/board/cart/add
 * @desc    Patch project to add a board item to the board cart
 * @access  Public
 */
exports.add_item_to_board = function(req, res) {
    Project.addItemToBoard(req.userId, req.body.projId, req.body.board, req.body.item, function(err, project) {
        if(err) {
            return res.status(500).send({ success: false });
        }

        res.status(200).send(project);
    });
}

/**
 * @route   PATCH api/projects/board/cart/update
 * @desc    Patch project to update a board item in the board cart
 * @access  Public
 */
exports.update_item_in_board = function(req, res) {
    Project.updateItemInBoard(req.userId, req.body.projId, req.body.board, req.body.itemIndex, req.body.updates, function(err, project) {
        if(err) {
            return res.status(500).send({ success: false });
        }

        res.status(200).send(project);
    });
}

/**
 * @route   PATCH api/projects/board/cart/remove
 * @desc    Patch project to remove a board item from the board cart
 * @access  Public
 */
exports.remove_item_from_board = function(req, res) {
    Project.removeItemFromBoard(req.userId, req.body.projId, req.body.board, req.body.item, function(err, project) {
        if(err) {
            return res.status(500).send({ success: false });
        }

        res.status(200).send(project);
    });
}

/**
 * @route   POST api/projects/users/add
 * @desc    Add a new authorized user to a project.
 * @access  Public
 */
exports.add_authorized_user1 = function(req, res, next) {
    User.getByEmail(req.body.newUserEmail, function(err, user) {
        if(err) return res.status(500).send("There was an error adding the user.");

        if(!user) return res.status(400).send("No user with the entered email address could be found.");

        req.userToAddId = user._id;
        req.projId = req.body.projId;
        next();
    });
}

exports.add_authorized_user2 = function(req, res) {
    Project.addAuthorizedUser(req.userId, req.projId, req.userToAddId, function(err) {
        if(err) return res.status(500).send("There was an error adding the new user to the project.");

        res.status(200).send({ success: true });
    });
}