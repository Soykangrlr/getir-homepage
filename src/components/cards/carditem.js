function Carditem({card:{title,description,image}}) {
  return (
    <div className="bg-white flex flex-col gap-y-2 text-center items-center rounded-lg px-6 py-10 shadow-xl">
        <img className="w-36 h-36 mb-4" src={image} alt="" />
        <p className="text-lg font-semibold text-purple-700">{title}</p>
        <p className="text-sm text-gray-600 px-5">{description}</p>
    </div>
  )
}
export default Carditem