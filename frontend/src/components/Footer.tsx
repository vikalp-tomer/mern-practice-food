const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex justify-between items-center md:flex-row flex-col">
        <span className="text-white text-3xl tracking-tight font-bold">
          Merneats.com
        </span>
        <div className="flex gap-8">
          <span className="text-white font-bold">Privacy Policy</span>
          <span className="text-white font-bold">Terms of service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
