import { Footer } from "flowbite-react";
import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

const FooterComp = () => {
  return (
    <>
      <Footer container className="border border-t-2">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="#"
                src="https://tse4.mm.bing.net/th?id=OIP.mpK0dtxPxPchXtGHdK86qgHaHa&pid=Api&P=0&h=180"
                alt="Logo"
                name="Logic"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title
                  title="About"
                  className="text-green-400 font-semibold"
                />
                <Footer.LinkGroup col>
                  <Footer.Link href="/">Home</Footer.Link>
                  <Footer.Link href="/">Contact</Footer.Link>
                  <Footer.Link href="/">course</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="Follow us"
                  className="text-green-400 font-semibold"
                />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">LinkedIn</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="Legal"
                  className="text-green-400 font-semibold"
                />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between font-bold">
            <Footer.Copyright
              href="#"
             
              year={new Date().getFullYear()}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="#"
                icon={BsFacebook}
                className="text-blue-700 "
              />
              <Footer.Icon
                href="#"
                icon={BsInstagram}
                className="text-pink-500"
              />
              <Footer.Icon
                href="#"
                icon={BsLinkedin}
                className="text-blue-500 "
              />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon
                href="#"
                icon={BsDribbble}
                className="text-pink-500"
              />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComp;