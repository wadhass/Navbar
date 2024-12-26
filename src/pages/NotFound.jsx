import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 z-0">
        <h1 className="text-6xl font-extrabold">404</h1>
        <h1 className=" text-5xl font-bold text-red-700">Page not Found</h1>
        <Link to="/" className="bg-green-900 text-white text-[18px] py-4 px-12 rounded-full hover:bg-green-800
        focus:ring-[2px] focus:ring-red-700 focus:ring-offset-[1px] outline-none">Go Home </Link>
    </div>
  )
}  
export default NotFound