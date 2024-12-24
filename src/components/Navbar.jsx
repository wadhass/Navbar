import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-gray-300">
   <nav className="bg-gray-300 flex items-center justify-between h-[60px]">
    <img src={logo} alt="logo.png" className="w-[150px]"/>
    <ul className="space-x-10">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </ul>
   </nav>
   </header>
  )
}

export default Navbar