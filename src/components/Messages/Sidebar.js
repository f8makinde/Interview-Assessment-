import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import matrixLogo from "../../assets/Group 1.png"
import Category from "../../assets/Combined.svg"
import Bag from "../../assets/Bag.svg"
import User from "../../assets/2 User.svg"
import Folder from "../../assets/Folder.svg"
import Chat from "../../assets/Chat.svg"
import Setting from "../../assets/Setting.svg"
import arrowDown from "../../assets/fi_chevron-down (1).svg"
import Notification from "../../assets/Notification.svg"
import profileImg from "../../assets/profile 1.png"
import home from "../../assets/Home.svg"
import headphones from "../../assets/fi_headphones.svg"
import gift from "../../assets/fi_gift.svg"
import arrowleft from "../../assets/fi_chevron-down (2).svg"
import homeIcon from "../../assets/Category.svg"
import logout from "../../assets/Logout.svg"
import { Link } from 'react-router-dom'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: homeIcon, current: false },
  { name: 'Orders', href: '#', icon: Bag, current: false },
  { name: 'Customers', href: '#', icon: User, current: false },
  { name: 'Inventory', href: '#', icon: Folder, current: false },
  { name: 'Conversations', href: '/messages', icon: Chat, current: true },
  { name: 'Settings', href: '#', icon: Setting, current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className='bg-white font-inter'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
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
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
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
                            ? 'bg-primary text-white'
                            : 'text-white hover:bg-primary',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <img src={item.icon} alt={item.name} className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
               
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden md:flex md:w-20 md:flex-col md:fixed md:inset-y-0 bg-white">
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className=" objet-cover"
                  src={matrixLogo}
                  alt="Workflow"
                />
              </div>
              <nav className="mt-[78px] flex-1 mx-auto gap-y-[12px]">
                {navigation.map((item) => (
               
                <Link to={item.href}>
                    <img src={item.icon} alt={item.name} 
                    className={`
                             ${item.current ? 'bg-primary text-white  fill-white' : ' hover:bg-primary hover:text-white hover:bg-opacity-75 hover:p-4'}
                             'group flex items-center p-4 text-sm font-medium text-[14px] rounded-md text-indigo-300`
                          }
                     aria-hidden="true"/>
                     </Link>
                ))}
              </nav>
            </div>
            <div className='flex flex-col gap-4 px-3'>
                <div className='flex gap-3 py-[11px] px-4 rounded-2xl bg-[#5E63661A]'>
                   <img src={headphones} alt="headphones" />
                </div>
                <div className='flex flex-col bg-[#FFCC9133] justify-center px-4 rounded-2xl'>
                <div className='flex gap-3 py-[11px]'>
                   <img src={gift} alt="headphones" />
                </div>
                </div>
              <Link to="#" className="flex-shrink-0 pt-[38px] w-full group block">
                <div className="flex items-center justify-center rounded-full gap-3 py-[11px]">
                  <div>
                    <img
                      className="inline-block h-9 w-9 mx-auto "
                      src={logout}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:pl-20 flex flex-col flex-1 bg-white">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
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
  )
}

function Navbar(){
    return(
        <nav className='p-3'>
        <div className='flex md:flex-row flex-col justify-between'>
            <h1 className='text-xl text-black60 font-poppins font-medium'>Conversations</h1>
            <div className='flex items-center gap-4 '>
                <select className='bg-secondary50 py-[5px] px-[12px] rounded-lg outline-none'>
                    <option><p className='text-[14px] font-inter'>Nanny’s Shop</p><img src={arrowDown} alt="arrow-down" /></option>
                </select>
                <img src={Notification} alt="notification-icon" />
                <img src={profileImg} alt="profile-img" />
            </div>
        </div>
        <div className=' border-b py-2'/>
        <div className='flex items-center gap-3'>
        <Link to='/'>
        <img src={home} alt="home-icon" className='py-1'/>
        </Link>
       <Link to="/messages" className='text-black30'> / Conversations</Link>
        </div>
  
        </nav>
    )
}