import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import matrixLogo from "../../assets/MatrixLogo.svg";
import Category from "../../assets/Combined.svg";
import Bag from "../../assets/Bag.svg";
import User from "../../assets/2 User.svg";
import Folder from "../../assets/Folder.svg";
import Chat from "../../assets/Chat.svg";
import Setting from "../../assets/Setting.svg";
import arrowDown from "../../assets/fi_chevron-down (1).svg";
import Notification from "../../assets/Notification.svg";
import profileImg from "../../assets/profile 1.png";
import home from "../../assets/Home.svg";
import headphones from "../../assets/fi_headphones.svg";
import gift from "../../assets/fi_gift.svg";
import arrowleft from "../../assets/fi_chevron-down (2).svg";
import logout from "../../assets/Logout.svg";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "#", icon: Category, current: true },
  { name: "Orders", href: "#", icon: Bag, current: false },
  { name: "Customers", href: "#", icon: User, current: false },
  { name: "Inventory", href: "#", icon: Folder, current: false },
  { name: "Conversations", href: "/messages", icon: Chat, current: false },
  { name: "Settings", href: "#", icon: Setting, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="bg-white font-inter">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-primary">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src={matrixLogo}
                      alt="Workflow"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-primary text-white"
                            : "text-white hover:bg-primary",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-primary p-4">
                  <Link to="#" className="flex-shrink-0 group block">
                  </Link>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden md:flex md:w-[296px] mx-auto md:flex-col md:fixed md:inset-y-0 bg-white z-[9999]">
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-8">
                <img
                  className="h-[52px] w-auto"
                  src={matrixLogo}
                  alt="Workflow"
                />
              </div>
              <nav className="mt-16 flex-1 px-8 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-primary rounded-xl px-5 py-4 text-white"
                        : "text-[#53545C] hover:rounded-xl hover:px-5 hover:py-4 hover:bg-primary hover:text-white hover:bg-opacity-75",
                      "group flex items-center px-2 py-2 text-sm font-inter font-medium text-[14px]"
                    )}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                      aria-hidden="true"
                    />

                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-4 px-8 text-[14px]">
              <div className="flex gap-3 py-[11px] px-4 rounded-2xl bg-[#5E63661A]">
                <img src={headphones} alt="headphones" />
                <p className="black">Contact Support</p>
              </div>
              <div className="flex flex-col bg-[#FFCC9133] justify-center py-[11px] px-[20px] rounded-2xl gap-4">
                <div className="flex gap-3">
                  <img src={gift} alt="headphones" />
                  <p>Free Gift Awaits You!</p>
                </div>
                <span className="flex gap-4 text-[12px] text-[#6E7079]">
                  <p>Upgrade your account</p>
                  <img src={arrowleft} alt="arrowleft" />
                </span>
              </div>
              <Link to="#" className="flex-shrink-0 w-full group block mx-auto">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      className="inline-block h-6 w-6 rounded-full"
                      src={logout}
                      alt=""
                    />
                  </div>
                  <p className="text-[#CC5F5F] text-[14px]">Logout</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:pl-[296px] overflow-hidden flex flex-col flex-1 bg-white">
          <div className="sticky top-0 z-10  md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="p-3">
      <div className="flex justify-between">
        <h1 className="text-xl text-black60 font-poppins font-medium">Dashboard</h1>
        <div className="flex items-center gap-5">
          <select className="bg-secondary50 py-[5px] px-3  rounded-lg outline-none">
            <option>
              <p className="text-[14px] font-inter ">Nanny’s Shop</p>
              <img src={arrowDown} alt="arrow-down" />
            </option>
          </select>
          <img src={Notification} alt="notification-icon" />
          <img src={profileImg} alt="profile-img" />
        </div>
      </div>
      <div className="border-b py-2"></div>
      <img src={home} alt="home-icon" className="py-1" />
    </nav>
  );
}
