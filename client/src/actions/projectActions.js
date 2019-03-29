import axios from "axios";
import { GET_PROJECTS, CREATE_NEW_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, CREATE_NEW_BOARD, UPDATE_BOARD, DELETE_BOARD, ADD_ITEM_TO_BOARD, UPDATE_ITEM_IN_BOARD, REMOVE_ITEM_FROM_BOARD } from "./_types";

export const getProjects = () => dispatch => {
    axios.get("/api/projects", { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        })
    );
}

export const createNewProject = projectData => dispatch => {
    axios.post("/api/projects/create", projectData, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: CREATE_NEW_PROJECT,
            payload: res.data
        })
    );
}

export const updateProject = params => dispatch => {
    axios.patch("/api/projects/update", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: UPDATE_PROJECT,
            payload: res.data
        })
    );
}

export const deleteProject = projectId => dispatch => {
    axios.post("/api/projects/delete", { projId: projectId }, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: DELETE_PROJECT,
            payload: {
                success: res.data.success,
                projectId: projectId
            }
        })
    );
}

export const createNewBoard = params => dispatch => {
    axios.post("/api/projects/board", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: CREATE_NEW_BOARD,
            payload: res.data
        })
    );
}

export const updateBoard = params => dispatch => {
    axios.patch("/api/projects/board/update", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: UPDATE_BOARD,
            payload: res.data
        })
    );
}

export const deleteBoard = params => dispatch => {
    axios.patch("/api/projects/board/delete", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: DELETE_BOARD,
            payload: res.data
        })
    );
}

export const addItemToBoard = params => dispatch => {
    axios.patch("/api/projects/board/cart/add", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: ADD_ITEM_TO_BOARD,
            payload: {
                data: res.data,
                projectBoardIndex: params.projectBoardIndex
            }
        })
    );
}

export const updateItemInBoard = params => dispatch => {
    axios.patch("/api/projects/board/cart/update", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: UPDATE_ITEM_IN_BOARD,
            payload: res.data
        })
    );
}

export const removeItemFromBoard = params => dispatch => {
    axios.patch("/api/projects/board/cart/remove", params, { headers: { "x-access-token": sessionStorage.getItem("userToken") } }).then(res =>
        dispatch({
            type: REMOVE_ITEM_FROM_BOARD,
            payload: res.data
        })
    );
}