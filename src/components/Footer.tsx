const Footer = () => {
  return (
    <footer className="bg-[url('bg_footer.jpg')] bg-cover bg-center min-h-screen justify-between flex flex-col">
      <div className="mb-7 px-15 pt-15">
        <h2 className="font-steelfish-regular text-[128px] bg-linear-to-r from-[#FFFFFF] to-[#575454] bg-clip-text text-transparent">
          WANT TO CONNECT?
        </h2>
        <p className="font-outfit-regular text-[24px] text-white w-1/3">
          Let’s work together to bring your ideas to life. Whether you’re
          starting from scratch or refining an existing product, I’m available
          to discuss your project and deliver solutions that meet your goals.
        </p>
      </div>
      <div className="flex flex-row gap-4 px-15">
        <img src="/linkedin.svg" alt="LinkedIn" />
        <img src="/github.svg" alt="GitHub" />
        <a
          href="mailto:ankuobed@gmail.com"
          className="font-outfit-regular text-[24px] text-white hover:underline hover:text-[#FDB12F]"
        >
          ankuobed@gmail.com
        </a>
      </div>
      <div className="justify-start text-right px-15">
        <h2 className="font-steelfish-regular text-[250px] bg-linear-to-r from-[#a5a5a5] to-[#575454] bg-clip-text text-transparent">
          KEMDEV
        </h2>
      </div>
      <div className="flex flex-row justify-between border-t-2 border-white/20 mt-5 px-15 py-15">
        <p className="text-white/70 text-[20px] font-outfit-regular">
          2026 Portfolio
        </p>
        <p className="text-white/70 text-[20px] font-outfit-regular">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer