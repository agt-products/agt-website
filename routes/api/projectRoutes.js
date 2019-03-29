const express = require("express");
const router = express.Router();
const checkToken = require("../../config/checkToken");
const project_controller = require("../../controllers/projectController");

// POST request for creating a new project
router.post("/create", checkToken, project_controller.create_new_project);

// GET a project
router.get("/", checkToken, project_controller.get_projects_by_user_id);

// PATCH a project with updates
router.patch("/update", checkToken, project_controller.update_project);

// DELETE a project
router.post("/delete", checkToken, project_controller.delete_project);

// POST a new board to a project
router.post("/board", checkToken, project_controller.add_new_board);

// PATCH updates to a project board
router.patch("/board/update", checkToken, project_controller.update_board);

// PATCH project to delete a board
router.patch("/board/delete", checkToken, project_controller.delete_board);

// PATCH project to add an item to a board cart
router.patch("/board/cart/add", checkToken, project_controller.add_item_to_board);

// PATCH project to update an item in a board cart
router.patch("/board/cart/update", checkToken, project_controller.update_item_in_board);

// PATCH project to remove an item from a board cart
router.patch("/board/cart/remove", checkToken, project_controller.remove_item_from_board);

// POST a new user to a project's authorized user list.
router.post("/users/add", checkToken, [ project_controller.add_authorized_user1, project_controller.add_authorized_user2 ]);

module.exports = router;