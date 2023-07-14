import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center bg-[#141414] mt-auto text-[#ffffff] lg:pt-24 pb-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 splitter3 mb-4">
        <section className="flex flex-col p-8 sm:border-none">
          <h3 className="text-[#ff4343] text-xl">Address</h3>
          <p className="flex flex-wrap">
            #08-30, 1 Sunview Rd, Singapore 627615
          </p>
        </section>

        <section className="flex flex-col p-8 sm:border-none">
          <Link
            className="text-[#ff4343] text-xl"
            scroll={false}
            href="/services"
          >
            Services
          </Link>
          <ul className="flex flex-col">
            <li>Video Production</li>
            <li>Photography</li>
          </ul>
        </section>

        <section className="flex flex-col p-8 sm:border-none">
          <h3 className="text-[#ff4343] text-xl">Platforms</h3>
          <div className="w-full flex gap-4">
            <a href="https://www.youtube.com" target="_blank">
              <Image
                src="/icons/social/instagram.svg"
                alt="Instagram Logo"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.tiktok.com" target="_blank">
              <Image
                src="/icons/social/tiktok.svg"
                alt="TikTok Logo"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <Image
                src="/icons/social/facebook.svg"
                alt="Facebook Logo"
                width={20}
                height={20}
              />
            </a>
          </div>
        </section>

        <section className="flex flex-col p-8 ">
          <h3 className="text-[#ff4343] text-xl">Contact Us</h3>
          <p>Hello@cinegang.sg</p>
          <p>+65 9431 9496</p>
        </section>
      </div>

      <small className="pt-4 text-[#7f7f7f]">
        CinegangTV&copy; Copyright 2023
      </small>
    </footer>
  );
};

export default Footer;
