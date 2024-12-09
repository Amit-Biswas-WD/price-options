import PropTypes from 'prop-types'; 
 
const Link = ({route}) => {
  return (
    <li className='px-4 items-center text-center bg-white rounded-sm my-2'> <a href={route.path}>{route.name}</a> </li> 
  )
}

Link.propTypes = {
    route: PropTypes.object
}

export default Link