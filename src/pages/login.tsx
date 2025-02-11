import * as React from "react"
import { navigate, type HeadFC, type PageProps } from "gatsby"
import { useState } from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react"
import { storeUserData,storeUserToken } from "../services/user_service";
import { Toaster, toast } from "sonner";

const LoginPage: React.FC<PageProps> = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [toggler, setToggler] = useState<boolean>(false);
    const [loader, setLoader] = useState<boolean>(false);
    function handleToggler() {
        setToggler(!toggler)
      }

       // Login User
    const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoader(true);
        e.preventDefault();
        const response = await fetch(`https://backend.bcartgh.com/api/login`, {
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
        
        if (data.success === true && response.status === 200) {
            // console.log(data);
            setLoader(false);
            //****Store User Data in Local Storage****//
            storeUserData({"user":data.data});
            storeUserToken({"token":data.token});
            navigate("/");
        } else {
            setLoader(false);
            toast.error('Login Failed', {
                position: 'top-center',
                duration: 5000,
                description:data.message
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
                    <div className="pt-16 pb-6">
                        <div className="w-full md:w-[500px] rounded-2xl bg-black bg-opacity-30">
                            <div className="pt-16 pb-20 px-10">
                                <div>
                                    <div className="text-[#FF6F51] font-bold">Sign In</div>
                                    <div className="text-2xl font-bold text-white">Welcome Back!</div>
                                </div>
                                <div className="pt-7">``
                                <form onSubmit={loginUser}>
                                    <div className="py-2">
                                        <label className="text-[#E2E8F0]">Email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="someone@something.com" className="w-full mt-2 rounded-full placeholder:text-black px-4 py-3 outline-none bg-white bg-opacity-40 border text-black border-[#E2E8F0]" />
                                    </div>
                                    <div className="py-2">
                                        <label className="text-[#E2E8F0]">Password</label>
                                        <div className="flex bg-white bg-opacity-40 rounded-full mt-2 overflow-hidden border border-[#E2E8F0]">
                                        <input type={toggler ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="***********" className="w-full  placeholder:text-black px-4 py-3 outline-none bg-transparent text-black " />
                                        <button type="button" onClick={handleToggler} className="flex items-center justify-center px-4">{toggler ? (<Eye size={24} />) : (<EyeClosed size={24} />)}</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-end text-white text-xs">
                                        <a href="#" >Forget Password?</a>
                                    </div>
                                    <div className="pt-8">
                                        <div><button className="w-full mt-4 rounded-full bg-[#FF6F51] text-white font-bold py-3"> {loader === true ? "Processing ...... " : "Log In"}</button></div>
                                        <div className="flex justify-center items-center py-8 text-white">
                                            <div className="w-1/4 h-[1px] bg-[#E2E8F0] " />  
                                            <div className="px-8">or</div>
                                            <div className="w-1/4 h-[1px] bg-[#E2E8F0] " />  
                                        </div>
                                        <div><button className="w-full rounded-full bg-[#FF6F51] text-white font-bold py-3" type="button" onClick={() => navigate('https://backend.bcartgh.com/api/auth/google')}>{loader === true ? "Redirecting ...... " : "Continue with Google"}</button></div>
                                        <div className="text-white pt-4 text-center text-sm">Don’t have an account? <a href="/sign-up" className="underline">Sign Up here</a></div>
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
    )
}

export default LoginPage

export const Head: HeadFC = () => <title>Login - Bcart</title>
