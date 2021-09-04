import React from "react";

export default class Apps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      rate: "",
      items: [],
    };
  }

  updateRate(event) {
    this.setState({
      rate: event.target.value,
    });
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value,
      // rate: event.target.value,
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);
    items.push(this.state.rate);

    this.setState({
      items: items,
      message: "",
      rate: "",
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i] = event.target.value;

    this.setState({
      items: items,
    });
  }


  renderRows() {
    var context = this;

    return this.state.items.map(function (o, i) {
      return (
        <>
          <tr key={"item-" + i}>
            <td>
              <input
                type="text"
                value={o}
                onChange={context.handleItemChanged.bind(context, i)}
              />
            </td>

            <td>
              <input
                type="text"
                value={o}
                onChange={context.handleItemChanged.bind(context, i)}
              />
            </td>

            <td>
              <input
                type="text"
                value={o}
                onChange={context.handleItemChanged.bind(context, i)}
              />
            </td>

            <td>
              <input
                type="text"
                value={o}
                onChange={context.handleItemChanged.bind(context, i)}
              />
            </td>

            <td>
              <input
                type="text"
                value={o}
                onChange={context.handleItemChanged.bind(context, i)}
              />
            </td>
          </tr>
        </>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Rate</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
        <hr />
        {/* <input
          type="text"
          value={this.state.sn}
          onChange={this.updateSN.bind(this)}
        />

        <input
          type="text"
          value={this.state.item}
          onChange={this.Item.bind(this)}
        />

        <input
          type="text"
          value={this.state.quantity}
          onChange={this.updateQuantity.bind(this)}
        /> */}

        <input
          type="text"
          value={this.state.rate}
          onChange={this.updateRate.bind(this)}
        />

        <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />

        <button onClick={this.handleClick.bind(this)}>Add Item</button>
      </div>
    );
  }
}
