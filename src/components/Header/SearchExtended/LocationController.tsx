import { FaMapMarkerAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import Stays from '../../../assets/stays.json'
import { setLocation } from '../../../store/searchSlice'

interface StaysByCity {
  title: string
  city: string
  country: string
}
const LocationController = () => {
  const result: StaysByCity[] = Object.values(
    Stays.reduce((acc, obj) => ({ ...acc, [obj.city]: obj }), {}),
  )
  const dispatch = useDispatch()
  return (
    <div className={`mx-6  md:mx-0 md:mb-0  max-h-[50%] md:w-[33%] `}>
      {result.map(({ title, country, city }) => {
        return (
          <div
            key={title}
            className='flex mb-9 md:ml-6 cursor-pointer w-full'
            onClick={() => dispatch(setLocation(`${city}, ${country}`))}
          >
            <FaMapMarkerAlt className='mr-[10px]' /> <p>{`${city}, ${country}`}</p>
          </div>
        )
      })}
    </div>
  )
}
export default LocationController
