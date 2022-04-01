import {AgGridReact, AgGridColumn} from "ag-grid-react";

const App = () => {
    const rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact rowData={rowData}>
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

const domContainer = document.querySelector("#root");
ReactDOM.render(<App/>, domContainer);
