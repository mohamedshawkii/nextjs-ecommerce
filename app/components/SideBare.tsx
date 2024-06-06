// import React, { useState } from "react";
// import ProfileImage from "../../assets/profileImg.png";
// import {
//   IoIosArrowForward,
//   IoIosArrowBack,
//   IoMdSettings,
// } from "react-icons/io";
// import Logo from "../../assets/Logo.png";
// import { ImSearch } from "react-icons/im";
// import { HiTemplate } from "react-icons/hi";
// import BtnSection from "./RenderSection/BtnSection";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { TbChartDots3 } from "react-icons/tb";
// import { TbChartGridDotsFilled } from "react-icons/tb";
// import { BiSolidDoughnutChart } from "react-icons/bi";
// import { RiDashboardHorizontalFill } from "react-icons/ri";
// import { BsUiChecksGrid } from "react-icons/bs";
// import { SlCalender } from "react-icons/sl";

// function SideBare({ toggle, setToggle }) {
//   const FirstSection = [
//     {
//       name: "Dashboard",
//       icon: <RiDashboardHorizontalFill />,
//     },
//     {
//       name: "Map Chart",
//       icon: <FaMapMarkerAlt />,
//     },
//     {
//       name: "Parallel Coordinates",
//       icon: <TbChartDots3 />,
//     },
//     {
//       name: "pin Data",
//       icon: <TbChartGridDotsFilled />,
//     },
//     { name: "Pie Chart", icon: <BiSolidDoughnutChart /> },
//     { name: "Team", icon: <BsUiChecksGrid /> },
//     { name: "Calender", icon: <SlCalender /> },
//   ];

//   const SecondSection = [
//     {
//       name: "Settings",
//       icon: <IoMdSettings />,
//     },
//     {
//       name: "Template pages",
//       icon: <HiTemplate />,
//     },
//   ];

//   const [selectedBtn, setSelectedBtn] = useState("");
//   const [formSubmit, setFormSubmit] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // setFormSubmit(e.target.value);
//   };

//   return (
//     <aside>
//       <div className=" w-[300px] h-svh overflow-scroll bg-[#081028] fixed top-0 left-0">
//         <div className="flex flex-col justify-start items-center gap-6  w-full h-auto p-6">
//           <div className="flex flex-row justify-start items-center w-full h-auto">
//             <img src={Logo} alt="" />
//             <div className="flex flex-row justify-center items-center ml-auto">
//               <IoIosArrowBack size={14} />
//               <IoIosArrowForward size={14} />
//             </div>
//           </div>
//           <div>
//             <form
//               className="flex flex-row justify-between items-center gap-8 py-2 px-4 rounded
//                border-[1px] border-[#343B4F] bg-[#0B1739]"
//               onSubmit={handleSubmit}
//             >
//               <input
//                 className="border-none rounded box-border outline-none bg-[#0B1739]
//                 shadow appearance-none border w-full py-2 px-3 border-[#7E89AC]
//                 text-[#7E89AC] leading-tight focus:outline-none focus:shadow-outline"
//                 value={formSubmit}
//                 type="text"
//                 placeholder="Search for..."
//                 onChange={(e) => setFormSubmit(e.target.value)}
//               />
//               <button type="submit">
//                 <ImSearch size={24} />
//               </button>
//             </form>
//           </div>
//           <BtnSection
//             BtnObject={FirstSection}
//             selectedBtn={selectedBtn}
//             setSelectedBtn={setSelectedBtn}
//             toggle={toggle}
//             setToggle={setToggle}
//           />
//         </div>
//         <hr className="border-1 border-[#7E89AC] rounded-3xl" />
//         <div className="flex flex-col justify-start items-center  gap-6 w-full h-auto p-6">
//           <BtnSection
//             BtnObject={SecondSection}
//             selectedBtn={selectedBtn}
//             setSelectedBtn={setSelectedBtn}
//             toggle={toggle}
//             setToggle={setToggle}
//           />
//           <div className="flex flex-row justify-start items-center gap-3 w-full h-auto">
//             <img width={40} height={40} src={ProfileImage} alt="" />
//             <div className="flex flex-col justify-start items-start">
//               <p className="text-white font-bold text-lg">John Carter</p>
//               <p>Account settings</p>
//             </div>
//             <div className="ml-auto">
//               <IoIosArrowForward />
//             </div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

// export default SideBare;
