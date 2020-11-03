import React, { Component } from 'react';
import { connect } from "react-redux";
import { getOrganizationsList } from './redux/actions/actionGetgetOrganizations';
import Header from "../../component/Header/Header";
import OrganizationTable from "./OrganizationTable";
import Footer from "../../component/Footer/Footer";

class Organizations extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getOrganizationsList();
    }

    render() {
        const { organizationList } = this.props;
        return (
            <div>
                <Header title={"Search Organizations"} show_search={true}/>
                <OrganizationTable 
                cells={['Organization','Tickets','Users']}
                rows={(organizationList && organizationList.data) ? organizationList.data : []}/>
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
