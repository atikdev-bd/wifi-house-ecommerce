import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import  {toast, Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import GoogleSvg from '../../Assets/svg/icons8-google.svg'

const Register = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {
      createUserEmailAndPassword,
      googleLogin,
      userUpdateProfile,
    } = useContext(AuthContext);
  
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      const { email, name, photoURL, password } = data;
      console.log(photoURL);
  
      createUserEmailAndPassword(email, password)
        .then((result) => {
          toast.success(" Login successfully ");
          navigate(from, { replace: true });
  
          handleUpdateProfile(name, photoURL);
        })
        .catch((error) => toast.error(error));
    };
  
    const handleGoogleSignIn = () => {
      googleLogin()
        .then((result) => {
          navigate(from, { replace: true });
        })
        .catch((error) => toast.error(error));
    };
  
    const handleUpdateProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
  
      userUpdateProfile(profile)
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {});
    };
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Pleaser Register !</h1>
            </div>
  
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    name="name"
                    placeholder="full name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    {...register("photoURL")}
                    type="text"
                    name="photoURL"
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password")}
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p>
                  Already have an account :{" "}
                  <button className="btn text-emerald-500 btn-active btn-link">
                    {" "}
                    <Link to="/login">Login Here</Link>
                  </button>
                </p>
                <div
                  onClick={handleGoogleSignIn}
                  className="flex justify-center items-center cursor-pointer border bg-emerald-200 hover:bg-emerald-300 rounded-full"
                >
                  <img className="w-12 " src={GoogleSvg } alt="" />
                  <p className="px-4">continue with google</p>
                </div>
               <Toaster></Toaster>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;