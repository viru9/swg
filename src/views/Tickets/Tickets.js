import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTicketsList } from './redux/actions/actionGetTickets';
import Header from "../../component/Header/Header";
import TicketTable from "./TicketTable";
import Footer from "../../component/Footer/Footer";
import {minSearch} from "./../../config/functions";

class Tickets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedList:[]
        };
    }

    componentDidMount() {
        this.props.getTicketsList();
    }

    onSearch = (value) =>{
        const { ticketList } = this.props;
        minSearch(ticketList, value).length > 0 ?
        this.setState({searchedList: minSearch(ticketList, value)}) :
        this.setState({searchedList: []});
    }

    render() {
        const { ticketList } = this.props;
        const { searchedList } = this.state;
        let rowData = searchedList.length > 0 ?
         searchedList :
          (ticketList && ticketList.data) ? ticketList.data :[];
        return (
            <div>
                <Header title={"Search Tickets"} show_search={true} onSearch={this.onSearch}/>
                <TicketTable 
                cells={['Ticket Name','Assignee','Submitter', 'Organization']}
                rows={rowData ? rowData : []}/>
                <Footer value={1}/>
            </div>
        )
    }
}

const mapStateProps = ({ ticketList }) => {
    return {
        ticketList: ticketList.targets && ticketList.targets.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTicketsList: () => dispatch(getTicketsList())
    }
};

export default connect(mapStateProps, mapDispatchToProps)(Tickets);
