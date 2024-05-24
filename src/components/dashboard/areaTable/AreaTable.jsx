import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Iphone 14 Pro",
    order_id: 11232,
    date: "May 3,2024",
    customer: "Harish",
    status: "delivered",
    amount: 40000,
  },
  {
    id: 101,
    name: "Macbook Pro",
    order_id: 11232,
    date: "Feb 15,2024",
    customer: "Priya",
    status: "pending",
    amount: 100000,
  },
  {
    id: 102,
    name: "Apple Watch",
    order_id: 11232,
    date: "Apr 19,2024",
    customer: "Naveen",
    status: "canceled",
    amount: 45000,
  },
  {
    id: 103,
    name: "Asus Laptop",
    order_id: 11232,
    date: "Mar 29,2024",
    customer: "Divya",
    status: "delivered",
    amount: 75000,
  },
  {
    id: 104,
    name: "PS5 pro",
    order_id: 11232,
    date: "Jan 20,2024",
    customer: "Purusho",
    status: "delivered",
    amount: 49000,
  },
 
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>₹{dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
