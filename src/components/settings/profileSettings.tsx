import React,{useState} from "react";
import { getUserData, storeUserData, storeUserToken, getUserToken } from "../../services/user_service";
import { navigate } from "gatsby";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { Toaster, toast } from "sonner";


export default function ProfileSettings() {
    const userData = getUserData();
    const token = getUserToken();
    const [fname, setFname] = useState<string>(userData.user.first_name);
    const [lname, setLname] = useState<string>(userData.user.last_name);
    const [username, setUsername] = useState<string>(userData.user.username);
    const [email, setEmail] = useState<string>(userData.user.email);
    const [current, setCurrent] = useState<string>("");
    const [fresh, setFresh] = useState<string>("");
    const [confirmFresh, setConfirmFresh] = useState<string>("");
    const [loader, setLoader] = useState<boolean>(false);
    const [toggler, setToggler] = useState<boolean>(false);

    function handleToggler() {
      setToggler(!toggler);
  }

    const update = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        setLoader(true);
        const response = await fetch(`https://backend.bcartgh.com/api/update-profile`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}`,
            },
            body: JSON.stringify({
                first_name: fname,
                last_name: lname,
                username: username,
                email: email,
            }),
        });
        const data = await response.json();
        
        if (data.success === true && response.status === 200) {
            // console.log(data);
            setLoader(false);
            //****Store User Data in Local Storage****//
            storeUserData({"user":data.data});
            toast.success('Profile Updated', {
              position: 'top-center',
              duration: 5000,
              description:data.message
            });
            // navigate("/");
        } else {
            setLoader(false);
            toast.error('Updating Profile Failed', {
              position: 'top-center',
              duration: 5000,
              description:data.message
            });
        }
    };

    const updatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true);
        if (fresh !== confirmFresh) {
          toast.error('Password Words Do Not Match', {
            position: 'top-center',
            duration: 5000,
            description: "Check your passwords and try again"
          });
          setLoader(false);
          return;
        }

        const response = await fetch(`https://backend.bcartgh.com/api/update-password`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}`,
            },
            body: JSON.stringify({
              current_password: current,
              new_password: fresh,
            }),
        });
        const data = await response.json();
        if (response.status === 200) {
          toast.success('Password Updated', {
            position: 'top-center',
            duration: 5000,
            description:data.message
          });
        } else {
            setLoader(false);
            toast.error('Password Update Failed', {
              position: 'top-center',
              duration: 5000,
              description:data.message
            });
        }
      }

  return (
    <div className="p-10">
      <div className="font-bold text-[#520B1F]">Profile Settings</div>
      <div className="flex flex-col md:flex-row items-start gap-10 py-10 border-b-2 border-[#520b1f3a] ">
        <div className="">
          <div className="rounded-full overflow-hidden w-40 h-40">
            <img src="/img/f-1.webp" alt="logo" className="w-full h-full" />
          </div>
        </div>
        <div>
          <div className="font-bold text-sm text-[#520B1F] pb-10">
            Personal Information
          </div>
          <form onSubmit={update}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                First Name
              </label>
              <input
                type="text"
                className="w-full mt-1 rounded-full px-4 py-2"
                placeholder={userData.user.first_name}
                value={fname} 
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Last Name
              </label>
              <input
                type="text"
                className="w-full mt-1 rounded-full px-4 py-2"
                placeholder={userData.user.last_name}
                value={lname} 
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Username
              </label>
              <input
                type="text"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={username}
                placeholder={userData.user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">Email</label>
              <input
                type="text"
                className="w-full mt-1 rounded-full px-4 py-2"
                placeholder={userData.user.email}
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="lg:col-span-2 pt-4">
              <button type="submit" className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">
              {loader === true ? "Processing ...... " : "Save"}
              </button>
            </div>
          </div>
          </form>
          
        </div>
      </div>
      <div className="pt-10 ">
      <form onSubmit={updatePassword}>
        <div className="font-bold text-sm pb-6 text-[#520B1F]">
          Password Reset
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-bold text-[#5C5C5C]">
              Current Password
            </label>
            <input type="text" placeholder="Enter" className="w-full mt-1 rounded-full px-4 py-2" onChange={(e) => setCurrent(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-bold text-[#5C5C5C]">
              New Password
            </label>
            <input type="text" placeholder="Enter" className="w-full mt-1 rounded-full px-4 py-2" onChange={(e) => setFresh(e.target.value)} />
            
          </div>
          <div>
            <label className="text-sm font-bold text-[#5C5C5C]">
              Confirm Password
            </label>
            <input type="text" placeholder="Enter" className="w-full mt-1 rounded-full px-4 py-2" onChange={(e) => setConfirmFresh(e.target.value)} />
            
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">
          {loader === true ? "Processing ...... " : "Save"}
          </button>
        </div>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
}
