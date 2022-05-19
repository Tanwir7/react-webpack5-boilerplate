import logo from 'assets/white-logo.png';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container flex flex-wrap
                      justify-between items-center mx-auto">
        <a href="/">
          <img src={logo} className="h-8" alt="Digital Dev Studio Logo" />
        </a>
        <span>React Boilerplate Template</span>
      </div>
    </nav>
  );
};
