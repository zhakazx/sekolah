import React from 'react'

const NavbarDashboard = () => {
  return (
    <div>
        <header className="header bg-white shadow py-4 px-4">
        <div className="header-content flex items-center justify-end flex-row">
          <div className="flex">
              <img
                id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"
                src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                alt="User dropdown"
                className="h-10 w-10 bg-gray-200 border rounded-full cursor-pointer"
              />
              <span className="flex flex-col ml-2">
                <span className="truncate w-20 font-semibold tracking-wide leading-none">ZhakaZx</span>
                <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">Admin</span>
              </span>

              <div id="userDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div>ZhakaZx</div>
                    <div className="font-medium truncate">zhakazx@gmail.com</div>
                  </div>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
              </div>

            </div>
        </div>
      </header>
    </div>
  )
}

export default NavbarDashboard