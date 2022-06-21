import { Component, React } from 'react';

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
          {console.log(averageWeight)};
        </p>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
}

export default Pokemon;
