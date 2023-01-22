import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { selectSearch } from '../../store/searchSlice'
import { motion } from 'framer-motion'

const StaysList = () => {
  const searchState = useSelector(selectSearch)

  return (
    <main>
      <header className='flex justify-between font-montserrat mb-6'>
        <h1 className='font-bold text-[#333333] md:text-2xl'>
          Stays in {searchState.location || 'Finland'}
        </h1>
        <p className='font-medium text-[#4F4F4F]'>
          {searchState.stays.length > 12 ? '12+' : `${searchState.stays.length}`} stays
        </p>
      </header>
      <section className='md:grid md:grid-cols-3 md:gap-8'>
        {searchState.stays.map(({ beds, photo, rating, superHost, title, type }) => {
          return (
            <motion.section
              className='font-montserrat mb-8 md:mb-0 md:flex md:flex-col md:justify-between'
              key={title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className=' mb-3'>
                <img
                  className='w-full block rounded-3xl h-[240px] object-cover'
                  src={photo}
                  alt=''
                />
              </div>
              <div className='flex  items-center text-xs font-medium mb-3'>
                {superHost && (
                  <p className='text-[10px] leading-tight font-bold text-[#4F4F4F] rounded-xl p-1.5 border border-solid border-[#4F4F4F] mr-[10px]'>
                    SUPER HOST
                  </p>
                )}
                <p className='text-[#828282] mr-10'>
                  {type}. {beds && `${beds} beds`}
                </p>

                <p className='flex text-[#4F4F4F] ml-auto'>
                  <span className='mr-1.5'>
                    <AiFillStar className='text-[#eb5757]' />
                  </span>
                  {rating}
                </p>
              </div>
              <div>
                <p className='text-sm text-[#333333] font-montserrat font-semibold'>{title}</p>
              </div>
            </motion.section>
          )
        })}
      </section>
    </main>
  )
}
export default StaysList
