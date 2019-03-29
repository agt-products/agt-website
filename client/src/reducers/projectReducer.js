import { GET_PROJECTS, UPDATE_PROJECT, CREATE_NEW_PROJECT, DELETE_PROJECT, CREATE_NEW_BOARD, UPDATE_BOARD, DELETE_BOARD, ADD_ITEM_TO_BOARD, UPDATE_ITEM_IN_BOARD, REMOVE_ITEM_FROM_BOARD, LOGOUT_USER } from "../actions/_types";

const initialState = {
    projects: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_NEW_PROJECT: {
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload
                ]
            }
        }
        case ADD_ITEM_TO_BOARD: {
            for(let i = 0; i < state.projects.length; i++) {
                if(state.projects[i]._id === action.payload._id) {
                    state.projects.splice(i, 1);
                }
            }
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload.data
                ]
            };
        }
        case CREATE_NEW_BOARD:
        case UPDATE_BOARD:
        case DELETE_BOARD:
        case UPDATE_ITEM_IN_BOARD:
        case REMOVE_ITEM_FROM_BOARD:
        case UPDATE_PROJECT: {
            for(let i = 0; i < state.projects.length; i++) {
                if(state.projects[i]._id === action.payload._id) {
                    state.projects.splice(i, 1);
                }
            }
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload
                ]
            };
        }
        case DELETE_PROJECT: {
            let { projects } = state;
            for(let i = 0; i < projects.length; i++) {
                if(projects[i]._id === action.payload.projectId) {
                    projects.splice(i, 1);
                }
            }
            return {
                ...state,
                projects: projects
            }
        }
        case GET_PROJECTS: {
            return {
                ...state,
                projects: action.payload
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                projects: []
            }
        }
        default: {
            return state;
        }
    }
}