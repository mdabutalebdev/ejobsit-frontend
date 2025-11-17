import Link from "next/link"
import Button from "./Button"
import Image from "next/image"

 

const Navbar = () => {
  return (
    <div className="py-2">
        <div className="container mx-auto px-20 flex items-center justify-between"> 
        <div className="">
            
            <Image 
            src="/images/Logo.png"
            alt="logo"
            width={90}
            height={50}
            />
        </div>
        <div className="flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/course">Course</Link>
            <Link href="/product">Product</Link>
            <Link href="/event">Event</Link>
            <Link href="/about">About </Link>
            <Link href="/contact">Contact  </Link>
        </div>
        <div className="flex items-center gap-2">
            <button className="text-[#067FDA]">
                register
            </button>
            <Button className="rounded-md">
                Login
            </Button>
        </div>
    </div>
    </div>
  )
}

export default Navbar