import Image from "next/image";

const Header = () => {
  return (
    <main>
      <div className="container mx-auto flex justify-between items-center bg-fuchsia-500 font-medium py-2 h-[5rem] ">
        <Image
          className="ml-7 "
          src={"/my logo.png"}
          alt="logo"
          height={60}
          width={60}
        />
        <nav>
          <ul className="flex space-x-8 h-[2.5rem] mr-[4rem] pt-[1.5rem text-[1.5rem]">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Header;
