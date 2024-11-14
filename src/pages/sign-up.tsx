import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import { useState } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { storeUserData, storeUserToken } from "../services/user_service";
import { Toaster, toast } from "sonner";
import Loader from '../components/loader';

const SignUpPage: React.FC<PageProps> = () => {
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [cpassword, setCPassword] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [toggler, setToggler] = useState<boolean>(false);
    const [togglerC, setTogglerC] = useState<boolean>(false);
    const [loader, setLoader] = useState<boolean>(false);

    function handleToggler() {
        setToggler(!toggler);
    }

    function handleTogglerC() {
        setTogglerC(!togglerC);
    }

    // Registering User
    const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true);
        if (password !== cpassword) {
            alert("Passwords do not match");
            return;
        }
        const response = await fetch(`https://backend.bcartgh.com/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        
        if (data.success === true) {
            console.log(data);
            //****Store User Data in Local Storage****//
            storeUserData({"user":data.data});
            storeUserToken({"token":data.token});
            setLoader(false);

            navigate("/verification"); // Uncomment if you want to navigate after registration
        } else {
            toast.error('Registration Failed', {
                position: 'top-center',
                duration: 5000,
                description:data.errors.email[0]
              });
        }
    };

    return (
        <div className="min-h-screen bg-center bg-cover bg-fixed" style={{ backgroundImage: "url(/img/bcart-bg.webp)" }}>
            <div className="bg-black bg-opacity-10 w-full py-7">
                <div className="container">
                    <div className="px-4">
                        <button onClick={() => navigate("/")}>
                            <img src="/img/bcart-white.webp" alt="logo" className="w-16 md:w-20" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="px-4">
                    <div className="pt-16">
                        <div className="w-full md:w-[500px] rounded-2xl bg-black bg-opacity-30">
                            <div className="pt-16 pb-20 px-10">
                                <div>
                                    <div className="text-[#FF6F51] font-bold">Sign Up</div>
                                    <div className="text-2xl font-bold text-white">Welcome to Bcart!</div>
                                </div>
                                <div className="pt-7">
                                    <form onSubmit={registerUser}>
                                        {/* <div className="py-2">
                                            <label className="text-[#E2E8F0]">First Name</label>
                                            <input
                                                type="text"
                                                value={fname}
                                                onChange={(e) => setFname(e.target.value)}
                                                placeholder="Uzziel"
                                                className="w-full mt-2 rounded-full placeholder:text-black px-4 py-3 outline-none bg-white bg-opacity-40 border text-black border-[#E2E8F0]"
                                            />
                                        </div>
                                        <div className="py-2">
                                            <label className="text-[#E2E8F0]">Last Name</label>
                                            <input
                                                type="text"
                                                value={lname}
                                                onChange={(e) => setLname(e.target.value)}
                                                placeholder="Ben Isreal"
                                                className="w-full mt-2 rounded-full placeholder:text-black px-4 py-3 outline-none bg-white bg-opacity-40 border text-black border-[#E2E8F0]"
                                            />
                                        </div>
                                        <div className="py-2">
                                            <label className="text-[#E2E8F0]">Username</label>
                                            <input
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="uzz"
                                                className="w-full mt-2 rounded-full placeholder:text-black px-4 py-3 outline-none bg-white bg-opacity-40 border text-black border-[#E2E8F0]"
                                            />
                                        </div> */}
                                        <div className="py-2">
                                            <label className="text-[#E2E8F0]">Email</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="someone@something.com"
                                                className="w-full mt-2 rounded-full placeholder:text-black px-4 py-3 outline-none bg-white bg-opacity-40 border text-black border-[#E2E8F0]"
                                            />
                                        </div>
                                        <div className="py-2">
                                            <label className="text-[#E2E8F0]">Password</label>
                                            <div className="flex bg-white bg-opacity-40 rounded-full mt-2 overflow-hidden border border-[#E2E8F0]">
                                                <input
                                                    type={toggler ? "text" : "password"}
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="***********"
                                                    className="w-full placeholder:text-black px-4 py-3 outline-none bg-transparent text-black"
                                                />
                                                <button type="button" onClick={handleToggler} className="flex items-center justify-center px-2">
                                                    {toggler ? <Eye size={32} /> : <EyeClosed size={32} />}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="py-2">
                                            <label className="text-[#E2E8F0]">Confirm Password</label>
                                            <div className="flex bg-white bg-opacity-40 rounded-full mt-2 overflow-hidden border border-[#E2E8F0]">
                                                <input
                                                    type={toggler ? "text" : "password"}
                                                    value={cpassword}
                                                    onChange={(e) => setCPassword(e.target.value)}
                                                    placeholder="***********"
                                                    className="w-full placeholder:text-black px-4 py-3 outline-none bg-transparent text-black"
                                                />
                                                <button type="button" onClick={handleToggler} className="flex items-center justify-center px-2">
                                                    {toggler ? <Eye size={32} /> : <EyeClosed size={32} />}
                                                </button>
                                            </div>
                                        </div>
                                        {/* <div className="py-2">
                                            <label className="text-[#E2E8F0]">Confirm Password</label>
                                            <div className="flex bg-white bg-opacity-40 rounded-full mt-2 overflow-hidden border border-[#E2E8F0]">
                                                <input
                                                    type={togglerC ? "text" : "password"}
                                                    value={cpassword}
                                                    onChange={(e) => setCPassword(e.target.value)}
                                                    placeholder="***********"
                                                    className="w-full placeholder:text-black px-4 py-3 outline-none bg-transparent text-black"
                                                />
                                                <button type="button" onClick={handleTogglerC} className="flex items-center justify-center px-2">
                                                    {togglerC ? <Eye size={32} /> : <EyeClosed size={32} />}
                                                </button>
                                            </div>
                                        </div> */}
                                        {/* <div className="py-2">
                                            <label className="text-[#E2E8F0]">Location</label>
                                            <input
                                                type="text"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                placeholder="Accra"
                                                className="w-full mt-2 rounded-full placeholder:text-black px-4 py-3 outline-none bg-white bg-opacity-40 border text-black border-[#E2E8F0]"
                                            />
                                        </div> */}
                                        <div className="pt-4">
                                            <button type="submit" className="w-full mt-4 rounded-full bg-[#FF6F51] text-white font-bold py-3">
                                               {loader ? <div className='flex items-center justify-center pt-20'><Loader size="w-12 h-12" />Processing</div> :"Complete"}
                                            </button>
                                        </div>
                                        <div className="flex justify-center items-center py-6 text-white">
                                            <div className="w-1/4 h-[1px] bg-[#E2E8F0]" />
                                            <div className="px-8">or</div>
                                            <div className="w-1/4 h-[1px] bg-[#E2E8F0]" />
                                        </div>
                                        <div>
                                            <button className="w-full rounded-full bg-[#FF6F51] text-white font-bold py-3" type="button" onClick={() => navigate('https://backend.bcartgh.com/api/auth/google')}>Continue with Google</button>
                                        </div>
                                        <div className="text-white pt-4 text-center text-sm">
                                            Already have an account? <a href="/login" className="underline">Sign In here</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster richColors />
        </div>
    );
};

export default SignUpPage;

export const Head: HeadFC = () => <title>Sign Up - Bcart</title>;