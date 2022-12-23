import { useEffect } from 'react';
import { BiTrash, BiEdit, BiVerticalCenter } from 'react-icons/bi';
import { 
  useGetAllBeritaQuery,
  useDeleteBeritaMutation
} from '../../../features/dashboard/beritaApi';

const Berita = () => {
  const { data, isLoading, isError } = useGetAllBeritaQuery();
  const [deleteBerita] = useDeleteBeritaMutation();

  const handleDelete = async (id) => {
    await deleteBerita(id);
  }
  return (
    <div className="">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 rounded-2xl bg-clip-border">
            <h1 className="font-bold text-2xl text-gray-700 mb-5">Data Berita</h1>
            <div className="flex flex-row items-center justify-between mb-3">
              <form>
                <select className="select select-bordered select-sm w-full max-w-xs select">
                  <option>10</option>
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
            <div>
                <table className="w-96 md:w-full overflow-x-auto">
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
                      {data && data?.data?.map((item, i) => (
                        <>
                          <tr key={item.id}>
                            <td className="p-3 whitespace-nowrap text-gray-700 text-sm">{i + 1}</td>
                            <td className="p-3 whitespace-nowrap text-gray-700 text-sm">{item.judul}</td>
                            <td className="p-3 whitespace-nowrap text-gray-700 text-sm">{item.deskripsi}</td>
                            <td className="p-3 whitespace-nowrap text-gray-700 text-sm">{item.created_at}</td>
                            <td className="p-3 whitespace-nowrap text-gray-700 text-sm">
                              <button
                                className='text-sm md:text-xl text-black mr-1 bg-white font-medium md:font-semibold py-1 px-3 hover:text-amber-400'
                              >
                                  <BiEdit className='inline' />
                              </button>
                              <button onClick={() => handleDelete(item.id)}
                                className='text-sm md:text-xl text-black mr-1 bg-white font-medium md:font-semibold py-1 px-3 hover:text-red-400'
                              >
                                  <BiTrash className='inline' />
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                    {isLoading || data.data.length == 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="p-3 whitespace-nowrap text-gray-700 text-sm text-center"
                          >Belum ada data
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Berita