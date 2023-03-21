import { Component, React } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.dataItem;
    return (
      <div className='pokemon'>
        <h3>{name}</h3>
        <p>{type}</p>
        <p>
          Average Weight:
          {averageWeight.value} {averageWeight.measurementUnit}
        </p>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.number,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
  image: PropTypes.string,
};

export default Pokemon;
