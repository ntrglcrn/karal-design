function Header() {
  return (
    <header className="fixed w-full top-0 bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
      <div>
        <span className="text-xl font-bold text-gray-800">Karal Design</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#cases" className="text-gray-600 hover:text-gray-800">Cases</a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 