import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, currency, features} = option;
  return (
    <div className='bg-blue-400 rounded-lg p-4 text-white text-center flex flex-col'>
        <h2>
            <span className='text-7xl'>{price}</span>
            <span className='text-2xl'>/mon</span>
        </h2>
        <h2 className='text-3xl my-4'>{name}</h2>
        <div className='pl-4 flex-grow'>
        {
          features.map((feature, idx) => <Feature key={idx} feature={feature}/>)
        }
        </div>
        <button className='w-full py-3 bg-green-400 text-center hover:bg-green-800 rounded-lg duration-500 hover:font-bold'>Buy Now</button>
    </div>
  )
}

PriceOption.propTypes = {
  option: PropTypes.object
}
export default PriceOption