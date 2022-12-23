import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsArrowLeftShort, BsChevronDown } from 'react-icons/bs';
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const menus = [
    { name: "Dashboard",
      link: "/dashboard",
      icon: MdOutlineDashboard,
      subMenu: false
    },
    {
      name: "Berita",
      icon: FiFolder,
      subMenu: true,
      subMenuItems: [
        {
          name: "View Berita",
          link: "/master/berita"
        }
      ]
    },
  ];

  return (
    <div
        className={`bg-[#0e0e0e] relative z-100 ${
          open ? "w-60" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className={`py-3 flex justify-end`}>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <ul>
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                onClick={() => setOpenMenu(prev => prev = true)}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } text-sm font-medium`}
              >
                <li className="group flex items-center gap-3.5 hover:bg-gray-800 p-2 rounded-md" onClick={() => setOpenSubMenu(!openSubMenu)}>
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  {menu.subMenu && openMenu && (
                    <BsChevronDown className={`duration-300 ${!openSubMenu && 'rotate-180'}`} />
                  )}
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </li>
                {menu.subMenu && openSubMenu && openMenu && (
                  <ul className='my-2 space-y-1 flex flex-col' key={i}>
                    {menu.subMenuItems.map((submenu, index) => (
                      <Link
                          to={submenu.link}
                          key={index}
                          className={`${!open && openSubMenu ? 'hidden' : 'block'}`}
                      >
                          <li
                            style={{
                                transitionDelay: `${i + 3}00ms`,
                            }}
                            className={`whitespace-pre text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-with rounded-md mx-9 duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
                            onClick={() => setOpenMenu(prev => prev = true)}
                          >
                              {submenu.name}
                          </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </Link>
              ))}
          </ul>
        </div>
    </div>
  )
}

export default Sidebar