import React from 'react'
import { useIntl,FormattedMessage } from "react-intl";
    import { GridColParams,DataGrid } from "@material-ui/data-grid";
    export default function CustomerTable({ customers }) {
        const intl = useIntl();
        const columns = [
            { field: "avatarUrl", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="avatarUrl"/>) },
            { field: "createdAt", flex: 1, type: "date", valueFormatter: ({ value }) => intl.formatDate(value), renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="createdAt"/>) },
            { field: "email", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="email"/>) },
            { field: "id", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="id"/>) },
            { field: "name", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="name"/>) },
        ];
        return (<div style={{ height: "400px", width: "100%" }}><DataGrid columns={columns} rows={customers}/></div>);
    }