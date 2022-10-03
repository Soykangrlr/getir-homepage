function Mobile() {
  return (
    <div className="container flex items-center justify-between mx-auto bg-primary-brand-color bg-mobile-app  rounded-lg mt-7 ">
      <div className="text-white  flex flex-col gap-y-4 p-10">
        <h6 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h6>
        <p className=" font-semibold max-w-sm">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
        <nav className="flex gap-x-2 mt-5">
          <a href="#">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
          </a>
        </nav>
      </div>
      <picture className="mt-6">
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
      </picture>
    </div>
  );
}
export default Mobile;
