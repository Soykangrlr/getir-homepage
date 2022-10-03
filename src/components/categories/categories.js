import { useState ,useEffect} from 'react'
import CategoryData from '../../api/categories.json'
function Categories() {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    setCategories(CategoryData)
  },[])
  return (
    <div className=' bg-white'>
    <div className="container mx-auto p-4 ">
      <h3 className='text-sm font-semibold'>Kategoriler</h3>
      <div className='grid grid-cols-10 '>
      {
        categories.map(item=>(
          <div key={item.id} className="flex flex-col  gap-y-2 items-center text-center p-4 transition-all hover:bg-purple-100 hover:cursor-pointer">
            <img src={item.image} alt="" className='w-12 h-12 '/>
            <span className='text-sm font-semibold text-gray-600 tracking-tight transition-all hover:text-brand-color'>{item.title}</span>
          </div>
        ))
      }
      </div>
     
      </div>
      </div>
  )
}
export default Categories