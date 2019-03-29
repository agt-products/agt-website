import React, { Component } from "react";
import { Container, Row, Col, Button, Input, Label, FormGroup } from "reactstrap";
import ProjectBoard from "./ProjectBoard";
import NewBoardModal from "./NewBoardModal";
import PropTypes from "prop-types";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.project.name,
            description: this.props.project.description,
            modalOpen: false,
            editMode: false
        }
        this.updateProject = this.updateProject.bind(this);
        this.toggleNewBoardModal = this.toggleNewBoardModal.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.onEditChange = this.onEditChange.bind(this);
        this.createNewBoard = this.createNewBoard.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        this.deleteBoard = this.deleteBoard.bind(this);
        this.addItemToBoard = this.addItemToBoard.bind(this);
        this.updateItemInBoard = this.updateItemInBoard.bind(this);
        this.removeItemFromBoard = this.removeItemFromBoard.bind(this);
    }

    updateProject() {
        if(this.props.project.name !== this.state.name || this.props.project.description !== this.state.description) {
            this.props.updateProject(this.props.project._id, { name: this.state.name, description: this.state.description });
        }
        this.toggleEditMode();
    }

    toggleNewBoardModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    onEditChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createNewBoard(boardData) {
        this.props.createNewBoard(this.props.project._id, boardData);
    }

    updateBoard(board, updates) {
        this.props.updateBoard(this.props.project._id, board, updates);
    }
    
    deleteBoard(board) {
        this.props.deleteBoard(this.props.project._id, board);
    }

    addItemToBoard(board, item) {
        this.props.addItemToBoard(this.props.project._id, board, item);
    }

    updateItemInBoard(board, itemIndex, updates) {
        this.props.updateItemInBoard(this.props.project._id, board, itemIndex, updates);
    }

    removeItemFromBoard(board, item) {
        this.props.removeItemFromBoard(this.props.project._id, board, item);
    }

    render() {
        let { project } = this.props;
        let boards = null;
        if(project.boards && project.boards.length > 0) {
            boards = project.boards.map((board, index) => {
                return (
                    <Col key={`board${index}`} xl="12">
                        <ProjectBoard 
                            board={board} boardIndex={index} 
                            updateBoard={this.updateBoard} 
                            deleteBoard={this.deleteBoard}
                            addItem={this.addItemToBoard}
                            updateItem={this.updateItemInBoard}
                            removeItem={this.removeItemFromBoard}
                        />
                    </Col>
                );
            });
        }

        return (
            <Container className="py-3 my-3 border">
                <NewBoardModal 
                    isOpen={this.state.modalOpen}
                    toggle={this.toggleNewBoardModal}
                    createNewBoard={this.createNewBoard}
                    cartItems={this.props.cartItems}
                />
                <Row>
                    <Col sm="9">
                        <div className="mb-3">
                            {!this.state.editMode ?
                                <h4>{project.name}</h4>
                            :
                                <FormGroup>
                                    <Label className="font-weight-bold" for="name">Project Name:</Label>
                                    <Input 
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={this.state.name}
                                        onChange={this.onEditChange}
                                    />
                                </FormGroup>
                            }
                        </div>
                        <div className="mb-3">
                            {!this.state.editMode ?
                                <p className="lead">{project.description}</p>
                            :
                                <FormGroup>
                                    <Label className="font-weight-bold" for="name">Project Description:</Label>
                                    <textarea 
                                        className="form-control"
                                        name="description"
                                        id="description"
                                        value={this.state.description}
                                        onChange={this.onEditChange}
                                    />
                                </FormGroup>
                            }
                        </div>
                    </Col>
                    <Col 
                        sm="3"
                        className="d-flex align-items-start justify-content-center justify-content-sm-end"
                    >
                        {!this.state.editMode ?
                            <Button
                                className="mr-1"
                                size="sm"
                                color="link"
                                onClick={this.toggleEditMode}
                            >
                                Edit Project
                            </Button>
                        :   
                            <Button
                                className="mr-1"
                                size="sm"
                                color="link"
                                onClick={this.updateProject}
                            >
                                Save Changes
                            </Button>
                        }
                        <Button
                            outline
                            size="sm"
                            color="danger"
                            onClick={() => this.props.deleteProject(this.props.project._id)}
                        >
                            Delete Project
                        </Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs="12">
                        <Container className="px-0">
                            <Row>
                                {boards}
                            </Row>
                            <Row>
                                <Col>
                                    <Button
                                        outline
                                        color="success"
                                        onClick={this.toggleNewBoardModal}
                                    >
                                        Create New Board
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
    cartItems: PropTypes.array.isRequired,
    updateProject: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    createNewBoard: PropTypes.func.isRequired,
    updateBoard: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired,
    addItemToBoard: PropTypes.func.isRequired,
    updateItemInBoard: PropTypes.func.isRequired,
    removeItemFromBoard: PropTypes.func.isRequired
}

export default Project;