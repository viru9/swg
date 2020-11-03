import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTicketsList } from './redux/actions/actionGetTickets';
import Header from "../../component/Header/Header";
import TicketTable from "./TicketTable";
import Footer from "../../component/Footer/Footer";

class Tickets extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getTicketsList();
    }

    render() {
        const { ticketList } = this.props;
        return (
            <div>
                <Header title={"Search Tickets"} show_search={true}/>
                <TicketTable 
                cells={['Ticket Name','Assignee','Submitter', 'Organization']}
                rows={(ticketList && ticketList.data) ? ticketList.data : []}/>
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
