import PropTypes from 'prop-types'; 
 
const Link = ({route}) => {
  return (
    <li className='px-4 py-1 items-center text-center hover:bg-gray-500 duration-1000 rounded-sm my-2'> <a href={route.path}>{route.name}</a> </li> 
  )
}

Link.propTypes = {
    route: PropTypes.object
}

export default Link