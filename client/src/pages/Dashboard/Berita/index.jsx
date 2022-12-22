import React from 'react'
import { BiTrash, BiEdit } from 'react-icons/bi';

const Berita = () => {
  return (
    <div className="">
        <div class="w-full max-w-full">
          <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
            <h1 className="font-bold text-2xl text-gray-700 mb-5">Data Berita</h1>
            <div className="flex flex-row items-center justify-between mb-3">
              <form action="#">
                <div className="hidden md:flex relative">
                  <div
                    className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  <input
                    id="search"
                    type="text"
                    name="search"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
                    placeholder="Search..."
                  />
                </div>
                <div className="flex md:hidden">
                  <a href="#" className="flex items-center justify-center h-10 w-10 border-transparent">
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </a>
                </div>
              </form>
            </div>
            <div className="overflow-x-scroll">
                <table className="w-full">
                  <thead className="bg-slate-900 text-white border-b-2 border-gray-200 py-1">
                    <tr>
                      <th className="p-3 text-sm font-normal md:font-semibold tracking-wide text-left">
                        No
                      </th>
                      <th className="p-3 text-sm font-normal md:font-semibold tracking-wide text-left">
                        Judul
                      </th>
                      <th className="p-3 text-sm font-normal md:font-semibold tracking-wide text-left">
                        Deskripsi
                      </th>
                      <th className="p-3 text-sm font-normal md:font-semibold tracking-wide text-left">
                        Tanggal Dibuat
                      </th>
                      <th className="p-3 text-sm font-normal md:font-semibold tracking-wide text-left">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">1</td>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">Berita 1</td>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consequuntur.</td>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">15-07-2005</td>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">
                        <button
                          className='text-sm md:text-xl text-black mr-1 bg-white font-medium md:font-semibold py-1 px-3 hover:text-amber-400'
                        >
                            <BiEdit className='inline' />
                        </button>
                        <button
                          className='text-sm md:text-xl text-black mr-1 bg-white font-medium md:font-semibold py-1 px-3 hover:text-red-400'
                        >
                            <BiTrash className='inline' />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">2</td>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">Berita 2</td>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consequuntur.</td>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">15-07-2005</td>
                      <td className="p-3 whitespace-nowrap text-gray-700 text-sm">
                        <button
                          className='text-sm md:text-xl text-black mr-1 bg-white font-medium md:font-semibold py-1 px-3 hover:text-amber-400'
                        >
                            <BiEdit className='inline' />
                        </button>
                        <button
                          className='text-sm md:text-xl text-black mr-1 bg-white font-medium md:font-semibold py-1 px-3 hover:text-red-400'
                        >
                            <BiTrash className='inline' />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Berita