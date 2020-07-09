import React, { Component } from 'react';

class NameClient extends Component {

    //Función que toma el valor del input nombre del cliente
    handleChangeInput = (ev) => {
        const client = ev.target.value;
        this.props.inputNameClient(client);
        console.log(client);
    };

    //Función que toma el valor select de mesa
    handleChangeTableNumber = (ev) => {
        const table = ev.target.value;
        this.props.selectTable(table);
        console.log(table);
    };


    render() {
        return (
            <div className="name-Client">
                <label className="textName">Nombre del cliente</label>
                <input type="text" id="inputClient"  value = {this.props.client} onChange={(ev) => this.handleChangeInput(ev)} />
                <select name="table" className = "select-table" onChange = {(ev) => this.handleChangeTableNumber(ev)}>
                    <option value="">N° Mesa</option>
                    <option value="table1">Mesa 1</option>
                    <option value="table2">Mesa 2</option>
                    <option value="table3">Mesa 3</option>
                </select>
            </div>

        );
    }
}

export default NameClient;