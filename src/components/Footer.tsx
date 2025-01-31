const Footer = () => {
  return (
    <footer className="bg-space-gray text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SPACEX</h3>
            <p className="text-space-light">
              Making humanity multiplanetary
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-space-light hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">LEGAL</h4>
            <div className="space-y-2">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-space-light hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;