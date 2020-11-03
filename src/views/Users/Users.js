import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUsersList } from './redux/actions/actionGetUsers';
import Header from "./../../component/Header/Header";
import UserTable from "./UserTable";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getUsersList();
    }

    renderUserTable = ()=>{
        const {userList} = this.props;
        return (
            <div>getUsers</div>
        )
    }

    render() {
        const { roleList } = this.props;
        return (
            <div>
                <Header title={"Search Users"} show_search={true}/>
                <UserTable/>
                {this.renderUserTable()}
            </div>
        )
    }
}

const mapStateProps = ({ userList }) => {
    return {
        userList: userList.targets && userList.targets.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUsersList: () => dispatch(getUsersList())
    }
};

export default connect(mapStateProps, mapDispatchToProps)(Users);
