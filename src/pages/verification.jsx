import { CheckFat } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { getUserData, getUserToken } from "../services/user_service";
import Loader from "../components/loader";
import { Toaster, toast } from "sonner";
import { navigate } from "gatsby";

function Verification() {
  //****** fetch the params from the url*/
  let urlParams;

if (typeof window !== 'undefined') {
  urlParams = new URLSearchParams(window.location.search);
} else {
  // Handle the server-side rendering case if needed
  urlParams = new URLSearchParams();
}

  const userId = urlParams.get("id");
  const hash = urlParams.get("hash");
  const expires = urlParams.get("expires");
  const signature = urlParams.get("signature");
  const token = getUserToken();
  const [loader, setLoader] = React.useState(false);
  const [check, setCheck] = React.useState(true);

  const verifyUser = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `https://backend.bcartgh.com/api/email-verify/${userId}/${hash}?expires=${expires}&signature=${signature}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      console.log("verification request: ", response);
      const data = await response.json();
      console.log("verification response: ", data);

      if (response.status === 200 && data.success === true) {
        toast.success("Verification Success", {
          position: "top-center",
          duration: 5000,
          description: data.message,
        });
        setTimeout(() => {
          navigate("/settings");
        }, 2000);
      } else {
        if (data.message === "Email already verified") {
          setCheck(true);
          setLoader(false);
          toast.success("Verification Already Done", {
            position: "top-center",
            duration: 5000,
            description: data.message,
          });

          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error("Verification Failed", {
            position: "top-center",
            duration: 5000,
            description: data.message,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoader(true);
    if (userId !== null) {
      setCheck(false);
      verifyUser();
    }
  }, []);

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center ">
        {loader ? (
          <div className="flex items-center justify-center pt-20">
            <Loader size="w-12 h-12" />{" "}
            {check === true
              ? "Waiting For Verification Please Check Your Email ......."
              : "Verifying ......."}{" "}
          </div>
        ) : (
          <>
            <CheckFat size={150} color="green" />
            <div className="text-center text-2xl font-bold pb-4">
              Verification Successful
            </div>
            <div>
              This page will automatically redirect to the login page after 2
              seconds
            </div>
          </>
        )}
      </div>
      <Toaster richColors />
    </div>
  );
}

export default Verification;
