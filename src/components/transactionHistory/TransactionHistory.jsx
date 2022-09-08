import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => {
  return (
    <div className={css.container}>
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
  );
};
TransactionHistory.prototype = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default TransactionHistory;
