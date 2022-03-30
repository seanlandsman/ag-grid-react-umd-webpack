const App = () => {
    const rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact.AgGridReact rowData={rowData}>
                <AgGridReact.AgGridColumn field="make"></AgGridReact.AgGridColumn>
                <AgGridReact.AgGridColumn field="model"></AgGridReact.AgGridColumn>
                <AgGridReact.AgGridColumn field="price"></AgGridReact.AgGridColumn>
            </AgGridReact.AgGridReact>
        </div>
    );
};

const domContainer = document.querySelector("#root");
ReactDOM.render(<App/>, domContainer);
