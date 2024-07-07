import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="relative">
        <video
          className="w-full h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4">
          <Image
            src="/logo.png"
            alt="Local Logic"
            width={400}
            height={100}
            priority
            className="w-40 md:w-80 lg:w-96"
          />
          <h2 className="text-sm md:text-lg lg:text-xl font-bold text-center text-yellow-500">
            VIDEO PRODUCTION | PHOTOGRAPHY | DIGITAL SOLUTIONS
          </h2>
        </div>
        <nav className="absolute top-0 w-full flex flex-wrap justify-center space-x-2 md:space-x-4 lg:space-x-6 text-xs md:text-sm lg:text-lg font-medium p-2 md:p-4 lg:p-6">
          <Link href="/" className="hover:text-gray-500">HOME</Link>
          <Link href="/services" className="hover:text-gray-500">SERVICES</Link>
          <Link href="/portfolio" className="hover:text-gray-500">PORTFOLIO</Link>
          <Link href="/client" className="hover:text-gray-500">CLIENT</Link>
          <Link href="/about-us" className="hover:text-gray-500">ABOUT US</Link>
        </nav>
      </div>
    </div>
  );
}
