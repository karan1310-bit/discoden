import React from 'react'
import Button from './Button'
import { CiMenuBurger } from "react-icons/ci";
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between px-6 lg:px-8 py-4 lg:py-8">
            <div className="text-4xl lg:text-7xl font-bold font-yoyo tracking-wider uppercase">
              <Link href="/">DiscoDen</Link>
            </div>
            <ul className="flex md:hidden space-x-4 lg:space-x-6 text-xl lg:text-2xl font-neue"><CiMenuBurger /></ul>
            <ul className="hidden md:flex space-x-4 lg:space-x-6 text-xl lg:text-2xl font-neue">
              <li>
              <Button id="contact-hero" title="Club" link="services">
              </Button>
              </li>
              <li>
              <Button id="contact-hero" title="Services" link="services">
              </Button>
              </li>
              <li>
                <Button id="contact-hero" title="Residents" link="services">
                </Button>
              </li>
              <li>
              <Button id="contact-hero" title="About" link="services">
              </Button>
              </li>
              <li>
              <Button id="contact-hero" title="Contact" link="services">
              </Button>
              </li>
            </ul>
          </nav>
  )
}

export default Navbar