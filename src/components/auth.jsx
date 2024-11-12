import authWithGoogle from "../providers/google.js";
import authWithFacebook from "../providers/facebook.js";
import authWithGithub from "../providers/github.js";
import authWithXTwitter from "../providers/x-twitter.js";
import { Link } from "react-router-dom";

const Auth = ({ type }) => {
  const authWithOAuth = async (e) => {
    const OAuths = [
      { name: "google", func: authWithGoogle },
      { name: "facebook", func: authWithFacebook },
      { name: "github", func: authWithGithub },
      { name: "x-twitter", func: authWithXTwitter },
    ];

    for (const OAuth of OAuths) {
      if (OAuth.name === e.currentTarget.name) {
        try {
          const result = await OAuth.func();
          setUser(result);
        } catch (err) {
          alert(err.message);
        }

        break;
      }
    }
  };

  return (
    <div className="flex justify-center min-h-screen text-gray-900 bg-gray-100">
      <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-10 sm:rounded-lg">
        <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
          <div className="flex items-center justify-center gap-2">
            <img src="/Kontakt-WBG.png" className="w-10 h-10" />
            <h1 className="text-3xl font-bold">Kontakt</h1>
          </div>
          <div className="flex flex-col items-center mt-12">
            <h1 className="text-2xl font-extrabold xl:text-3xl">
              Sign {type === "signup" ? "Up" : "In"}
            </h1>
            <div className="flex-1 w-full mt-8">
              <div className="flex flex-col items-center">
                <button
                  className="flex items-center justify-center w-full max-w-xs py-3 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  name="google"
                  onClick={authWithGoogle}
                >
                  <div className="p-2 bg-white rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">
                    Sign {type === "signup" ? "Up" : "In"} with Google
                  </span>
                </button>

                <button
                  className="flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  name="facebook"
                  onClick={authWithOAuth}
                >
                  <div className="p-1 bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="#039be5"
                        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                      ></path>
                    </svg>
                  </div>
                  <span className="ml-4">
                    Sign {type === "signup" ? "Up" : "In"} with Facebook
                  </span>
                </button>

                <button
                  className="flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  name="github"
                  onClick={authWithOAuth}
                >
                  <div className="p-1 bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </div>
                  <span className="ml-4">
                    Sign {type === "signup" ? "Up" : "In"} with Github
                  </span>
                </button>

                <button
                  className="flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  name="x-twitter"
                  onClick={authWithOAuth}
                >
                  <div className="p-1 bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
                    </svg>
                  </div>
                  <span className="ml-4">
                    Sign {type === "signup" ? "Up" : "In"} with X-Twitter
                  </span>
                </button>
              </div>

              <div className="max-w-xs mx-auto">
                {type === "signup" && (
                  <div className="mt-5 text-sm font-medium text-center text-gray-600">
                    Already using Kontakt ?{" "}
                    <Link
                      to="/auth/signin"
                      className="text-indigo-500 transition-colors hover:text-indigo-700"
                    >
                      Sign In
                    </Link>
                  </div>
                )}
                {type === "signin" && (
                  <div className="mt-2 text-sm font-medium text-center text-gray-600">
                    New to Kontakt ?{" "}
                    <Link
                      to="/auth/signup"
                      className="text-indigo-500 transition-colors hover:text-indigo-700"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
                {type === "signup" && (
                  <p className="mt-6 text-xs text-center text-gray-600">
                    I agree to abide by Kontakt's Terms of Service and its
                    Privacy Policy
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden text-center bg-indigo-100 lg:flex">
          <div
            className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
            style={{
              backgroundImage: "url(/auth.svg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
