import PropTypes from 'prop-types';
const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.prototype = {
  title: PropTypes.string,
  stats: {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  },
};
export default Statistics;
