import PropTypes from 'prop-types';

const Card = ({ title }) => (
  <div>
    {title}
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
