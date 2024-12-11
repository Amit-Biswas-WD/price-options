import { PropTypes } from 'prop-types';
import { HiBadgeCheck } from "react-icons/hi";

const Feature = ({feature}) => {
  return (
    <div>
        <p className='flex items-center'><HiBadgeCheck className='text-green-400 mr-2' /> {feature}</p>
    </div>
  )
}

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature