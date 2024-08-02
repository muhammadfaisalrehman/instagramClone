import { Outlet, Navigate, useLocation } from "react-router-dom";
import PhoneCarousel from "./PhoneCarousel";


const AuthLayout = () => {
  const isAuthenticated = false;
  const { pathname } = useLocation();
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex min-h-screen flex-col w-full">
          <main className="flex flex-1 flex-col md:flex-row items-center justify-center px-6 py-12 lg:px-8">
            {/* Left side - Mobile image */}
            <div className="hidden md:block md:w-1/2 lg:w-2/5 max-w-[468px]">
            <PhoneCarousel />
            </div>

            {/* Right side - Logo and Form */}
            <div className="w-full md:w-1/2 lg:w-3/5 max-w-xs">
              <div className="border border-gray-300">
              <div className="text-center">
                <img
                  src="/assets/images/Instagram-Logo-PNG7.png"
                  alt="Instagram"
                  className="mx-auto mt-8 mb-2 h-24 w-auto"
                />
              </div>
              <div className="bg-white px-6 pb-6 items-center">
                <Outlet />
              </div>
              </div>
              {/* Don't have an account? Sign up link */}
              <div className="bg-white px-6 py-5 mt-3 border border-gray-300">
              <p className="text-center text-sm text-gray-600">
                {/* Don&apos;t have an account?{" "} */}
                {pathname=='/sign-in'?`Don&apos;t have an account? `: `Have an account? `}
                <a href="/signup" className="font-semibold text-blue-500 hover:text-blue-600">
                  {pathname=='/sign-in'?`Sign up`: `Sign in`}
                </a>
              </p>
              </div>
              {/* Get the app section */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-4">Get the app.</p>
                <div className="flex justify-center space-x-4">
                  <img src="/assets/images/c5Rp7Ym-Klz.png" alt="App Store" className="h-10" />
                  <img src="/assets/images/EHY6QnZYdNX.png" alt="Google Play" className="h-10" />
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white py-4 text-center text-xs text-gray-500">
            <div className="container mx-auto">
              <nav className="mb-4">
                <ul className="flex flex-wrap justify-center space-x-4">
                  <li><a href="#">Meta</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">API</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Top Accounts</a></li>
                  <li><a href="#">Locations</a></li>
                  <li><a href="#">Instagram Lite</a></li>
                  <li><a href="#">Threads</a></li>
                  <li><a href="#">Contact Uploading & Non-Users</a></li>
                  <li><a href="#">Meta Verified</a></li>
                </ul>
              </nav>
              <p>&copy; {new Date().getFullYear()} Instagram from Meta</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default AuthLayout;