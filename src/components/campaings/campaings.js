import { useState, useEffect } from 'react'
import Slider from "react-slick";
import BannersData from '../../api/banners.json'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
function Campaings() {
  const [banners, setBanners] = useState([])
  useEffect(() => {
    setBanners(BannersData)
  }, [])
  function PrevBtn(props) {
    const {className, onClick } = props;
    return (
      <button
        className='absolute top-1/2 -left-6 -translate-y-1/2 text-brand-color'
        onClick={onClick}
      ><IoIosArrowBack size={22}/></button>
    );
  }
  function NextBtn(props) {
    const {className, onClick } = props;
    return (
      <button
      className='absolute top-1/2 -right-6 -translate-y-1/2 text-brand-color'
        onClick={onClick}
      ><IoIosArrowForward size={22}/></button>
    );
  }
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
		cssEase: 'linear',
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />
	};
  return (
    <div className='container mx-auto p-4 -translate-mx-2'>
      <h3 className='text-sm font-semibold mb-4'>Kampanyalar</h3>
      <Slider className="-mx-2 " {...settings}>
      {
        banners.map(item=>
        (  <div key={item.id} className="px-2">
            <img src={item.image} className="rounded-lg" alt="" />
          </div>)
        )
      }
				
				
			</Slider>
      </div>
  )
}
export default Campaings