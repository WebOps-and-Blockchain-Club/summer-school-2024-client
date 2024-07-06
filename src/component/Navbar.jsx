import { useEffect ,useState} from "react";
import Alert from './Alert'
import { Link,useNavigate } from "react-router-dom";
 
export default function Navbar(props) {
  const [openNav, setOpenNav] = useState(false);
 
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);

  const checkLoggedIn = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/verify`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    if (data.status === 401) {
      localStorage.clear();
      if (
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/signup"
      ) {
        props.showAlert("Please login");
        navigate("/login");
      }
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);




 useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/" className="flex items-center">
                  Home
                </Link>
              </li>
      <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
      <Link to="/upload" className="flex items-center">
        Upload
      </Link>
    </li>
      
        <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/userproduct" className="flex items-center">
                  Your Products
                </Link>
              </li>
     
    </ul>
  );
 
  return (
    <div className='sticky top-0 z-10'>
    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-2 dark:text-white dark:bg-black dark:border-black">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
      <Link
          to="/"
          className="mr-4 flex cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased items-center"
        >
          
          {/* {props.mode==="Dark Mode"?<img  name='mode' src='logo_light.jpg' className='w-10' alt=''/>:<img  name='mode' src='logo_dark.jpeg' className='w-10' alt=''/>} */}
          <img  name='mode' src='logoo.png' className='w-10' alt=''/>
          InstiOlx
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
        <button onClick={props.toggleMode} className="hidden lg:block">
          {props.mode!=="Dark Mode"?<img size='2xs' name='mode' src='sun.jpg' className='w-7 h' alt=''/>:  
          <img size='2xs' name='mode' src='moon.png' className='w-7 mix-blend-multiply ' alt=''/>}
          </button>
            
            
            <button
              className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
              onClick={() => {
                localStorage.clear();
                setLoggedIn(false);
                navigate("/login");
              }}
            >
              <span>Log out</span>
            </button>
            
          </div>
          <button onClick={props.toggleMode} className="lg:hidden ml-auto mr-4">
          {props.mode!=="Dark Mode"?<img size='2xs' name='mode' src='sun.jpg' className='w-7 ' alt=''/>:  
          <img size='2xs' name='mode' src='moon.png' className='w-7 mix-blend-multiply' alt=''/>}
          </button>  
        <button
          variant="text"
          className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <nav className={openNav?"block":"hidden"}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-6">
           
            <button
              className=" select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
            >
              <span>Log out</span>
            </button>
            
          </div>
        </div>
      </nav>
    </nav>
    <Alert alert={props.alert}/>
    </div>
  );
}