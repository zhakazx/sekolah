import React from 'react'
import { BiTrash, BiEdit } from 'react-icons/bi';

const Berita = () => {
  return (
    <div className="">
        <div class="w-full">
          <div class="relative flex flex-col min-w-0 break-words bg-white border-0 rounded-2xl bg-clip-border">
            <h1 className="font-bold text-2xl text-gray-700 mb-5">Data Berita</h1>
            <div className="flex flex-row items-center justify-between mb-3">
              <form>
                <select className="select select-bordered select-sm w-full max-w-xs select">
                  <option disabled selected>10</option>
                  <option>20</option>
                  <option>30</option>
                </select>
              </form>
              <div className="form-control">
                <form className="input-group">
                  <input type="text" placeholder="Search…" className="input input-sm input-bordered" />
                  <button className="btn btn-sm btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </form>
              </div>
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