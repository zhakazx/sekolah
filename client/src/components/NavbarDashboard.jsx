import { useDispatch } from "react-redux"
import { logOut } from "../features/auth/authSlice"

const NavbarDashboard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="navbar flex flex-row items-center shadow justify-between bg-base-100">
        <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className="gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><a>{user.nama}</a></li>
              <li onClick={() => dispatch(logOut())}><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default NavbarDashboard