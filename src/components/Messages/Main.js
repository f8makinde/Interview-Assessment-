import React from "react";
import woman from "../../assets/Group 11.png";
import woman2 from "../../assets/Group 12.png";
import man from "../../assets/Group 12 (1).png";
import mainWoman from "../../assets/Rectangle 3 (5).png"
import searchIcon from "../../assets/Search.svg"
import Bag from "../../assets/Bag.svg"
import iphoneGold from "../../assets/Rectangle 3.png";
import plus from "../../assets/fi_plus.svg"
import smile from "../../assets/fi_smile.svg"
import send from "../../assets/Send.svg"
export default function Main() {
  return (
    <div className="md:pl-20 flex flex-col max-w-full flex-1">
      <div className="py-5 px-[15px] font-inter">
        <div className="flex justify-between">
          <p className="font-medium text-black60 text-base">Conversations with Customers</p>
          <div className="w-[161px] h-9 px-4 py-[17px] bg-indigo-500 rounded-xl justify-center items-center gap-2.5 inline-flex">
            <div className="h-[17px] justify-between items-center gap-5 flex">
              <div className="text-center text-white text-sm font-normal">
                New Message
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 w-auto gap-[20px] px-4">
        <div className=" bg-white p-[22px] overflow-hidden shadow rounded-xl">
          <div className="flex font-poppins pb-3 font-medium justify-between">
            <p className="text-[#2C2D33] text-xl">Contacts</p>
            <p className="text-black20">34</p>
          </div>
           <div className="border border-[#CFD3D4] rounded-lg py-2 px-4 flex gap-4">
               <img src={searchIcon} alt="searchicon"/>
               <input type="text" className="outline-none" placeholder="Search"/>
            </div>
          <Table />
        </div>
        <div className="bg-white  lg:col-span-2 py-4 overflow-hidden shadow rounded-xl px-[22px]">
        <User img={mainWoman} userName="Jane Doe" active="Online" time="12:55 am" customerType="New Customer" view="View Profile"  numOrders={0}/>
           <div className="border border-[#F1F3F9] w-full my-1"></div>
        <div>
           <Content />
           <Content2 />
           
           </div> 
             <SendMessage />      
        </div>       
      </div>     
    </div>
  );
}
const SendMessage = () => {
  return(
      <div className='border border-[#E1E2E9] rounded-lg flex justify-between p-1'>
          <div className="flex items-center gap-[23px]">
            <div className="bg-secondary50 p-1">
            <img src={plus} alt="plus" />
            </div>
            
             <input type="text" placeholder="Your message" className="outline-none"/>
          </div>
          <div className="flex items-center gap-[19px]">
          <img src={smile} alt="smile" />
          <button className="bg-secondary50 flex items-center gap-1 py-2 px-4">Send <img src={send} alt="send" /></button>
          </div>
      </div>
  )
}
const Content =()=>{
  return(
    <div className="flex flex-col p-[21px]">
    <div className="bg-mainBg flex mx-auto text-center px-3 py-2 rounded-lg">12 August 2022</div>
  
    <div className="w-[343px] justify-start items-start gap-3.5 inline-flex">
  <img  src={iphoneGold} />
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
    <div className="self-stretch justify-between items-start gap-[215px] inline-flex">
      <div className="text-black60 text-sm font-normal">iPhone 13</div>
      <div className="opacity-0 justify-start items-start gap-[9px] flex">
        <div className="text-gray-400 text-xs font-normal">12 Sept 2022</div>
      </div>
    </div>
    <div className="self-stretch justify-between items-end gap-[131px] inline-flex">
      <div className="justify-start items-start gap-[9px] flex">
        <div className="text-[#33343A] text-sm font-medium">₦730,000.00</div>
      </div>
      <div className="justify-start items-start gap-[9px] flex">
        <div><span className="text-primary text-xs font-medium">12 </span><span className="text-black20 text-xs font-medium">In Stock</span></div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col">
<Chat bg="primary" text="Hello, I want to make enquiries about your
product" color="white" time="12:55 am"/>
<Reply bg="secondary50" text="Hello Janet, thank you for reaching out" color="#1C1D22" time="12:55 am"/>
<Reply bg="secondary50" text="What do you need to know?" color="#1C1D22" time="12:55 am"/>
</div>
    </div> 
  )
}
const Content2 =()=>{
  return(
    <div className="flex flex-col p-[21px]">
    <div className="bg-mainBg flex mx-auto text-center px-3 py-2 rounded-lg">Today</div>
<div className="flex flex-col">
<Chat bg="primary" text="Hello, I want to make enquiries about your
product" color="white" time="12:55 am"/>
</div>
    </div> 
  )
}
function Chat({bg, color, text, time}){
  return(
    <div className="flex flex-col items-start">
    <div className={`w-[350px] p-4 bg-${bg} rounded-tl-2xl rounded-tr-2xl rounded-br-2xl flex items-start justify-start  gap-2.5`}>
    <div className={`text-${color} text-base font-normal leading-normal`}>{text}</div>
  </div>
  <p className="text-black30">{time}</p>
  </div>
  )

}
function Reply({bg, color, text, time}){
  return(
    <div className="flex flex-col items-end">
    <div className={`w-[325px] p-4 bg-${bg} rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl justify-end  flex items-end  gap-2.5`}>
  <div className={`text-${color} text-base font-normal leading-normal`}>{text}</div>
</div>
<p className="text-black30">{time}</p>
</div>
  )
}
const User = ({img, userName, active, time, customerType, view, numOrders}) =>{
  return(
    <>
    <div className="flex justify-between w-full  items-center ">
    <div className="flex md:gap-[14px] gap-1">
      <img src={img} alt="woman" className="object-cover"/>
      <div className="flex flex-col">
          <p className="text-black60">{userName}</p>
          <span className="flex gap-1 items-center"><div className="w-2 h-2 rounded-full bg-primary"></div>
            <p className="text-[#B6BFE8] text-[14px]">{active}</p>
            <p className="text-black30">{time}</p>
          </span>
      </div>
    </div>
     <div className="flex md:gap-[12px] gap-1">
       <button className="text-[#1C1D22] bg-secondary20 py-1 px-3 rounded-lg">{customerType}</button>
       <div className="flex flex-col">
       <p className="text-primary text-[14px]">{view}</p>
       <span className="flex gap-2"><img src={Bag} alt="cart" /><p className="text-black20">{numOrders} Orders</p></span>
       </div>
     </div>
   </div>
   </>
  )
}
const list = [
  {
    id: 0,
    img: woman,
    name: "Jane Doe",
    amount: "Hi, i want make enquiries about yo...",
    btn: "New",
    date: "12 Sept 2022",
  },
  {
    id: 1,
    img: woman2,
    name: "Janet Adebayo",
    amount: "Hi, i want make enquiries about yo...",
    btn: "New",
    date: "12 Sept 2022",
  },
  {
    id: 2,
    img: man,
    name: "Janet Adebayo",
    amount: "Hi, i want make enquiries about yo...",
    btn: "New",
    date: "12 Sept 2022",
  },
  {
    id: 3,
    img: woman,
    name: "Kunle Adekunle",
    amount: "Hi, i want make enquiries about yo...",
    date: "12 Sept 2022",
  },
  {
    id: 4,
    img: woman2,
    name: "Jane Doe",
    amount: "Hi, i want make enquiries about yo...",
    date: "12 Sept 2022",
  },
  {
    id: 5,
    img: man,
    name: "Janet Adebayo",
    amount: "Hi, i want make enquiries about yo...",
    date: "12 Sept 2022",
  },
  {
    id: 6,
    img: woman,
    name: "Kunle Adekunle",
    amount: "Hi, i want make enquiries about yo...",
    date: "12 Sept 2022",
  },
  {
    id: 7,
    img: woman2,
    name: "Jane Doe",
    amount: "Hi, i want make enquiries about yo...",
    date: "12 Sept 2022",
  },
  {
    id: 8,
    img: man,
    name: "Janet Adebayo",
    amount: "Hi, i want make enquiries about yo...",
    date: "12 Sept 2022",
  },
];
function Table() {
  return (
    <section aria-labelledby="recent-hires-title">
      <div className=" overflow-hidden">
        <div>
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
                        className= "bg-secondary20 text-[#1C1D22] inline-flex items-center shadow-sm px-2.5 py-0.5  text-sm leading-5 font-medium rounded-full"
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
