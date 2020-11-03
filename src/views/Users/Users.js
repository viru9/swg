import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUsersList } from './redux/actions/actionGetUsers';
import Header from "./../../component/Header/Header";
import UserTable from "./UserTable";
import Footer from "./../../component/Footer/Footer";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getUsersList();
    }

    render() {
        const { userList } = this.props;
        return (
            <div>
                <Header title={"Search Users"} show_search={true}/>
                <UserTable 
                cells={['User Name','Assignee Tickets','Submitted Tickets', 'User Organization']}
                rows={(userList && userList.data) ? userList.data : []}/>
                <Footer value={2}/>
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
