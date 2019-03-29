import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import Project from "../project-components/Project";
import NewProjectModal from "../project-components/NewProjectModal";

import { connect } from "react-redux";
import { createNewProject, getProjects, updateProject, deleteProject, createNewBoard, updateBoard, deleteBoard, addItemToBoard, updateItemInBoard, removeItemFromBoard } from "../../actions/projectActions";
import { getQuoteCart } from "../../actions/quoteCartActions";

class ProjectManagerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.toggleNewProjectModal = this.toggleNewProjectModal.bind(this);
        this.createNewProject = this.createNewProject.bind(this);
        this.updateProject = this.updateProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this.createNewBoard = this.createNewBoard.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        this.deleteBoard = this.deleteBoard.bind(this);
        this.addItemToBoard = this.addItemToBoard.bind(this);
        this.updateItemInBoard = this.updateItemInBoard.bind(this);
        this.removeItemFromBoard = this.removeItemFromBoard.bind(this);
    }

    componentWillMount() {
        this.props.getProjects();
        if(this.props.quoteCart.items.length < 1) {
            this.props.getQuoteCart();
        }
    }

    componentWillUpdate(nextProps) {
        if(!this.props.user.user && nextProps.user.user) {
            this.props.getProjects();
            this.props.getQuoteCart();
        }
    }

    toggleNewProjectModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    createNewProject(projectData) {
        this.props.createNewProject(projectData);
    }

    updateProject(projectId, updates) {
        this.props.updateProject({ projId: projectId, updates: updates });
    }

    deleteProject(projectId) {
        this.props.deleteProject(projectId);
    }

    createNewBoard(projectId, boardData) {
        this.props.createNewBoard({ projId: projectId, boardData: boardData });
    }

    updateBoard(projectId, board, updates) {
        this.props.updateBoard({ projId: projectId, board: board, updates: updates });
    }

    deleteBoard(projectId, board) {
        this.props.deleteBoard({ projId: projectId, board: board });
    }

    addItemToBoard(projectId, board, item) {
        this.props.addItemToBoard({ projId: projectId, board: board, item: item });
    }

    updateItemInBoard(projectId, board, itemIndex, updates) {
        this.props.updateItemInBoard({ projId: projectId, board: board, itemIndex: itemIndex, updates: updates });
    }

    removeItemFromBoard(projectId, board, item) {
        this.props.removeItemFromBoard({ projId: projectId, board: board, item: item });
    }

    render() {
        let user = null;
        let projects = null;

        if(this.props.user.user) {
            user = this.props.user.user;
        }

        if(this.props.projects.projects) {
            projects = this.props.projects.projects;
        }

        let userInfo = user ? (
            <h3 className="mb-4">
                {`${user.firstName} ${user.lastName}${user.lastName.charAt(user.lastName.length - 1) === "s" ? "'" : "'s"} Project Manager`}
            </h3>
        ) : (
            <p className="lead">Please login or register to use the project manager feature.</p>
        );

        let projectInfo = projects && projects.length > 0 ? (
            <div className="my-4">
                {projects.map((project, index) => (
                    <Project 
                        key={`project + ${index}`} 
                        project={project}
                        user={this.props.user.user}
                        cartItems={this.props.quoteCart.items}
                        updateProject={this.updateProject} 
                        deleteProject={this.deleteProject}
                        createNewBoard={this.createNewBoard}
                        updateBoard={this.updateBoard}
                        deleteBoard={this.deleteBoard}
                        addItemToBoard={this.addItemToBoard}
                        updateItemInBoard={this.updateItemInBoard}
                        removeItemFromBoard={this.removeItemFromBoard}
                        getQuoteCart={this.props.getQuoteCart}
                    />
                ))}
            </div>
        ) : (
            <p className="lead">You have no projects right now.</p>
        );

        return (
            <Container className="my-4" style={{ minHeight: "400px" }}>
                <NewProjectModal 
                    isOpen={this.state.modalOpen} 
                    toggle={this.toggleNewProjectModal} 
                    createNewProject={this.createNewProject} 
                />
                {userInfo}
                {user ? projectInfo : ""}
                {user ? 
                    <Button outline color="primary" onClick={this.toggleNewProjectModal}>
                        Create New Project
                    </Button>
                : ""}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    projects: state.projects,
    quoteCart : state.quoteCart
});

export default connect(mapStateToProps, { createNewProject, getProjects, updateProject, deleteProject, createNewBoard, updateBoard, deleteBoard, addItemToBoard, updateItemInBoard, removeItemFromBoard, getQuoteCart })(ProjectManagerView);