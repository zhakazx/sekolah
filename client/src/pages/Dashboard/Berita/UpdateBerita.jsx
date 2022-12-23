import { Link } from 'react-router-dom';
import previewImg from "../../../assets/previewImage.jpg";

const UpdateBerita = () => {
  return (
    <div className="w-full bg-base-100">
        <div className="p-5">
            <h2 className="text-2xl font-medium text-gray-600 mb-5">Edit Data</h2>

            <div className="flex items-center justify-center w-full">
                <img src={previewImg} alt="preview" className="h-48 w-96 bg-grey-600 object-cover" />
            </div>
            
            <form>
            <div className="mb-6">
                <label htmlFor="judul" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Judul
                </label>
                <input
                    type="judul" 
                    id="judul"
                    placeholder="Masukkan judul"
                    className="border border-grey-400 outline-0 text-gray-900 text-sm rounded-lg ring-offset-0 border-2 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 block w-full p-2.5" 
                />
            </div>

            <div className="mb-6">
                <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
                <input
                    type="deskripsi" 
                    id="deskripsi"
                    placeholder="Masukkan Deskripsi"
                    className="border border-grey-400 outline-0 text-gray-900 text-sm rounded-lg ring-offset-0 border-2 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 block w-full p-2.5" 
                />
            </div>

            <div className="mb-6">
                <label htmlFor="isPublished" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publish</label>
                <select id="isPublished" className="border border-grey-400 outline-0 text-gray-900 text-sm rounded-lg ring-offset-0 border-2 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 block w-full p-2.5">
                    <option>- Pilih -</option>
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">Pilih gambar</label>
                <label className="w-full">
                    <input
                        id="image"
                        type="file"
                        className="text-sm text-grey-500 w-full rounded-lg
                        border border-grey-400 border-2
                        file:mr-5 file:py-2 file:px-6
                        file:rounded file:border-0
                        file:text-sm file:font-medium
                        file:bg-teal-50 file:text-teal-700
                        hover:file:cursor-pointer hover:file:bg-amber-50
                        hover:file:text-amber-700
                " />
                </label>
                <label className="label">
                    <span className="label-text-alt">PNG, JPG, JPEG, OR GIF</span>
                </label>
            </div>

            <div className="flex gap-3">
                <Link to="/master/berita" className="text-teal-800 bg-white border border-grey-400 outline-0 text-gray-900 text-sm rounded-lg ring-offset-0 border-2 hover:bg-grey-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Batal</Link>

                <button className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Simpan</button>
            </div>
            </form>

        </div>
    </div>
  )
}

export default UpdateBerita