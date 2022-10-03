import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
function SliderLogin() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    IT: "+39",
    GB: "+44",
    FR: "+33",
    DE: "+49",
    TR: "+90"
  }

	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
    autoplay: true,
    speed:1000,
    autoplaySpeed: 3000,
		cssEase: 'linear',
		arrows: false,
	};
  return (
    <div className=" relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:h-full before:absolute before:w-full before:inset-0 before:z-10 ">
     <Slider className="h-full hidden sm:block" {...settings}>
     <div>
					<div className="h-[500px] bg-center bg-no-repeat bg-cover"
					     style={{backgroundImage: 'url(https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg)'}}></div>
				</div>
				<div>
					<div className="h-[500px] bg-center bg-no-repeat bg-cover"
					     style={{backgroundImage: 'url(https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg)'}}></div>
				</div>
				
			</Slider>
      <div className="container flex justify-between items-center h-full absolute top-0 left-1/2 -translate-x-1/2 z-20" >
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
          <h3 className="text-white text-4xl mt-8 font-semibold">Dakikalar İçinde <br /> Kapınızda </h3>
        </div>
        <div className="bg-gray-50 w-[400px] rounded-lg p-6 grid gap-y-4 ">
          <h4 className="text-center text-primary-brand-color font-semibold">Giriş yap ve kayıt ol</h4>
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              selected={selected}
              onSelect={code => setSelected(code)}
              className="flag"
            />
            <div className="relative flex-1">
              <input required type="phone" className="h-14 w-full bg-white  border-2 border-gray-200 px-4 transition-colors hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer text-sm pt-2 peer-valid:border-red-600" />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-xs peer-focus:mt-1 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-xs peer-valid:mt-1 peer-valid:text-red-600">Telefon numarası</span>
            </div>
          
          </div>
          <button className="bg-yellow-500 h-12 rounded-lg w-full flex items-center justify-center text-sm font-semibold text-primary-brand-color transition-colors  hover:bg-primary-brand-color hover:text-yellow-500">Telefon numarası ile devam et</button>
        </div>
      </div>
    </div>
  )
}
export default SliderLogin