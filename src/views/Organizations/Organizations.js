import React, { Component } from 'react';
import { connect } from "react-redux";
import { getOrganizationsList } from './redux/actions/actionGetgetOrganizations';
import Header from "../../component/Header/Header";
import OrganizationTable from "./OrganizationTable";
import Footer from "../../component/Footer/Footer";
import {minSearch} from "./../../config/functions";

class Organizations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedList:[]
        };
    }

    componentDidMount() {
        this.props.getOrganizationsList();
    }
    onSearch = (value) =>{
        const { organizationList } = this.props;
        minSearch(organizationList, value).length > 0 ?
        this.setState({searchedList: minSearch(organizationList, value)}) :
        this.setState({searchedList: []});
    }

    render() {
        const { organizationList } = this.props;
        const { searchedList } = this.state;
        let rowData = searchedList.length > 0 ?
         searchedList :
          (organizationList && organizationList.data) ? organizationList.data :[];
        return (
            <div>
                <Header title={"Search Organizations"} show_search={true} onSearch={this.onSearch}/>
                <OrganizationTable 
                cells={['Organization','Tickets','Users']}
                rows={rowData ? rowData : []}/>
                <Footer value={0}/>
            </div>
        )
    }
}

const mapStateProps = ({ organizationList }) => {
    return {
        organizationList: organizationList.targets && organizationList.targets.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getOrganizationsList: () => dispatch(getOrganizationsList())
    }
};

export default connect(mapStateProps, mapDispatchToProps)(Organizations);
