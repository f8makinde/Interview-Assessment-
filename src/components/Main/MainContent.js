import React from "react";
import logo from "../../assets/icon.svg";
import Bag from "../../assets/Bag.svg";
import profile from "../../assets/icon (1).svg";
import arrowDown from "../../assets/fi_chevron-down.png";
import folderLight from "../../assets/Folder.png";
import cart from "../../assets/icon (2).svg";
import iphoneGold from "../../assets/Rectangle 3.png";
import iphoneDark from "../../assets/Rectangle 3 (1).png";
import Chart from "./Chart";
import Piechart from "./Piechart";
export default function Main() {
  return (
    <div className="md:pl-[296px] flex flex-col flex-1">
      <main className="flex-1">
        <div className="p-4">
          <div className="mt-2">
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Cards />
              <div className="flex flex-col gap-y-6">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="pt-5 px-5">
                    <div className="flex justify-between">
                      <p>Marketing</p>
                      <div className="flex items-center">
                        <p className="text-black10 text-[12px]">This Week</p>
                        <img src={arrowDown} alt="icon" />
                      </div>
                    </div>
                    <div>
                      <ul className="flex justify-between">
                        <li className="flex items-center gap-1 text-black20 text-[11px]">
                          <p className="h-2 w-2 bg-primary rounded-full"></p>
                          Acquisition
                        </li>
                        <li className="flex items-center gap-1 text-black20 text-[11px]">
                          <p className="h-2 w-2 bg-primary50 rounded-full"></p>
                          Purchase
                        </li>
                        <li className="flex items-center gap-1 text-black20 text-[11px]">
                          <p className="h-2 w-2 bg-primary rounded-full"></p>
                          Retention
                        </li>
                      </ul>

                      <Piechart />
                    </div>
                  </div>
                </div>

                <div className="bg-white grid  overflow-hidden shadow rounded-lg p-5">
                    <div className="flex justify-between mx-auto">
                      <div className="flex items-center gap-3">
                        <p>Summary</p>
                        <select className="bg-[#5570F114] rounded-lg outline-none text-primary">
                          <option>
                            <p className="text-[14px]">Sales</p>
                            <img src={arrowDown} alt="arrow-down" />
                          </option>
                        </select>
                      </div>
                      <select className="outline-none rounded-lg">
                        <option>
                          <p className="text-[14px]">Last 7 Days</p>
                          <img src={arrowDown} alt="arrow-down" />
                        </option>
                      </select>
                    </div>
                    <Chart />
                
                </div>
              </div>
              <div className="flex-col flex flex-1 gap-4">
                <div className="bg-primary  text-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <img src={folderLight} alt="logo" aria-hidden="true" />
                      <div className="flex items-center">
                        <p className="text-[12px]">This Week</p>
                        <img src={arrowDown} alt="icon" />
                      </div>
                    </div>

                    <div className="justify-between flex gap-12 pr-12 pt-6">
                      <div className="flex flex-col">
                        <p className="text-[14px]">Sales</p>
                        <p className="text-xl">₦4,000,000.00</p>
                      </div>
                      <div className="flex-col">
                        <p className="text-[14px]">Volume</p>
                        <span className="flex items-center gap-2">
                          <p className="text-xl">450</p>
                          <p className="text-[12px] text-primary10">+20.00%</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <img
                        src={cart}
                        className="text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="flex items-center">
                        <p className="text-black10 text-[12px]">This Week</p>
                        <img src={arrowDown} alt="icon" />
                      </div>
                    </div>

                    <div className="justify-between flex gap-12 pr-12 pt-6">
                      <div className="flex flex-col">
                        <p className="text-[14px] text-black30">Sales</p>
                        <p className="text-black60 text-xl">₦4,000,000.00</p>
                      </div>
                      <div className="flex-col">
                        <p className="text-[14px] text-black30">Volume</p>
                        <span className="flex items-center gap-2">
                          <p className="text-black60 text-xl">450</p>
                          <p className="text-[12px] text-green">+20.00%</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Table />
            </div>
          </div>
          {/* <div className="py-4">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
        </div> */}
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
}

function Cards() {
  return (
    <>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <img src={logo} className="text-gray-400" aria-hidden="true" />
            <div className="flex items-center">
              <p className="text-black10 text-[12px]">This Week</p>
              <img src={arrowDown} alt="icon" />
            </div>
          </div>

          <div className="justify-between flex gap-12 pr-12 pt-6">
            <div className="flex flex-col">
              <p className="text-[14px] text-black30">Sales</p>
              <p className="text-black60 text-xl">₦4,000,000.00</p>
            </div>
            <div className="flex-col">
              <p className="text-[14px] text-black30">Volume</p>
              <span className="flex items-center gap-2">
                <p className="text-black60 text-xl">450</p>
                <p className="text-[12px] text-green">+20.00%</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <img src={profile} className="text-gray-400" aria-hidden="true" />
            <div className="flex items-center">
              <p className="text-black10 text-[12px]">This Week</p>
              <img src={arrowDown} alt="icon" />
            </div>
          </div>

          <div className="justify-between flex gap-12 pr-12 pt-6">
            <div className="flex flex-col">
              <p className="text-[14px] text-black30">Customers</p>
              <span className="flex items-center gap-2">
                <p className="text-black60 text-xl">1,250</p>
                <p className="text-[12px] text-green">+15.80%</p>
              </span>
            </div>
            <div className="flex-col">
              <p className="text-[14px] text-black30">Active</p>
              <span className="flex items-center gap-2">
                <p className="text-black60 text-xl">1,180</p>
                <p className="text-[12px] text-green">85%</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <img src={profile} className="text-gray-400" aria-hidden="true" />
            <div className="flex items-center">
              <p className="text-black10 text-[12px]">This Week</p>
              <img src={arrowDown} alt="icon" />
            </div>
          </div>

          <div className="justify-between flex gap-12 pr-12 pt-6">
            <div className="flex flex-col">
              <p className="text-[14px] text-black30">All Orders</p>
              <p className="text-black60 text-xl">1,250</p>
            </div>
            <div className="flex-col">
              <p className="text-[14px] text-black30">Pending</p>
              <p className="text-black60 text-xl">5</p>
            </div>
            <div className="flex-col">
              <p className="text-[14px] text-black30">Completed</p>
              <p className="text-black60 text-xl">445</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const list = [
  {
    id: 0,
    img: iphoneGold,
    name: "iPhone 13",
    amount: "₦730,000.00 x 1",
    btn: "Pending",
    date: "12 Sept 2022",
  },
  {
    id: 1,
    img: iphoneDark,
    name: "iPhone 13",
    amount: "₦730,000.00 x 1",
    btn: "Completed",
    date: "12 Sept 2022",
  },
  {
    id: 2,
    img: iphoneGold,
    name: "iPhone 13",
    amount: "₦730,000.00 x 1",
    btn: "Pending",
    date: "12 Sept 2022",
  },
  {
    id: 3,
    img: iphoneDark,
    name: "iPhone 13",
    amount: "₦730,000.00 x 1",
    btn: "Completed",
    date: "12 Sept 2022",
  },
  {
    id: 4,
    img: iphoneDark,
    name: "iPhone 13",
    amount: "₦730,000.00 x 1",
    btn: "Completed",
    date: "12 Sept 2022",
  },
  {
    id: 5,
    img: iphoneDark,
    name: "iPhone 13",
    amount: "₦730,000.00 x 1",
    btn: "Completed",
    date: "12 Sept 2022",
  },
  {
    id: 6,
    img: iphoneGold,
    name: "iPhone 13",
    amount: "₦730,000.00 x 1",
    btn: "Pending",
    date: "12 Sept 2022",
  },
  {
    id: 7,
    img: iphoneGold,
    name: "iPhone 13",
    amount: "₦730,000.00 x 1",
    btn: "Pending",
    date: "12 Sept 2022",
  },
  {
    id: 8,
    img: iphoneGold,
    name: "iPhone 13",
    amount: "₦730,000.00 x 1",
    btn: "Pending",
    date: "12 Sept 2022",
  },
];
function Table() {
  return (
    <section aria-labelledby="recent-hires-title">
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="p-6">
          <h2
            className="text-base font-medium text-gray-900"
            id="recent-hires-title"
          >
            Recent Orders
          </h2>
          <div className="flow-root mt-6">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {list.map((item) => (
                <li key={item.handle} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {item.amount}
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] text-black20">{item.date}</p>
                      <button
                        className={`${
                          item.btn === "Completed"
                            ? "bg-[#32936F1F] text-green"
                            : "bg-[#F57E771F] text-[#CC5F5F]"
                        } inline-flex items-center shadow-sm px-2.5 py-0.5  text-sm leading-5 font-medium rounded-full`}
                      >
                        {item.btn}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
