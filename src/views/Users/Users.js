import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUsersList } from './redux/actions/actionGetUsers';
import Header from "./../../component/Header/Header";
import UserTable from "./UserTable";
import Footer from "./../../component/Footer/Footer";
import {minSearch} from "./../../config/functions";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedList:[]
        };
    }

    componentDidMount() {
        this.props.getUsersList();
    }
    onSearch = (value) =>{
        const { userList } = this.props;
        minSearch(userList, value).length > 0 ?
        this.setState({searchedList: minSearch(userList, value)}) :
        this.setState({searchedList: []});
    }

    render() {
        const { userList } = this.props;
        const { searchedList } = this.state;
        let rowData = searchedList.length > 0 ?
         searchedList :
          (userList && userList.data) ? userList.data :[];
        return (
            <div>
                <Header title={"Search Users"} show_search={true} onSearch={this.onSearch}/>
                <UserTable 
                cells={['User Name','Assignee Tickets','Submitted Tickets', 'User Organization']}
                rows={rowData ? rowData : []}/>
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
