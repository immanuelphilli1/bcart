import React, { useEffect, useState } from "react";
import {
  getUserData,
  storeUserData,
  getUserToken,
} from "../../services/user_service";
import { navigate } from "gatsby";

export default function CreativeHiring() {
  const userData = getUserData();
  const token = getUserToken();
  const [formData, setFormData] = useState<any>(userData.user);
  const [creativeHireStatus, setCreativeHireStatus] = useState<boolean>(
    userData.user.creative_hire_status
  );
  const [categories, setCategories] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const [checks, setChecks] = useState(
    userData.user?.creative_categories?.map((c: any) => c.id)
  );

  //*******fetch all categories */
  const getAllCreate = async () => {
    const response = await fetch(
      `https://backend.bcartgh.com/api/creative-categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setCategories(data.data);
  };

  function updateFormData(value: any, name: any) {
    setFormData((formData: any) => ({ ...formData, [name]: value }));
  }

  useEffect(() => {
    getAllCreate();
  }, []);

  //*******update creative settings */
  const update = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoader(true);
    e.preventDefault();
    console.log(creativeHireStatus);
    const response = await fetch(
      `https://backend.bcartgh.com/api/update-creative-details`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token.token}`,
        },
        body: JSON.stringify({
          phone_number: formData.phone_number,
          ghana_post_gps: formData.ghana_post_gps,
          city: formData.city,
          physical_address: formData.physical_address,
          description: formData.description,
          creative_hire_status: creativeHireStatus,
          pricing: formData.pricing,
          payment_information: formData.payment_information,
          creative_categories: checks,
        }),
      }
    );
    console.log(formData);
    const data = await response.json();

    if (data.success === true && response.status === 200) {
      // console.log(data);
      setLoader(false);
      //****Store User Data in Local Storage****//
      storeUserData({ user: data.data, token: data.token });
      alert(data.message);
      // navigate("/");
    } else {
      setLoader(false);
      alert(data.message);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreativeHireStatus(event.target.checked);
  };

  useEffect(() => {
    console.log(checks);
  }, [checks]);

  console.log("user : ", userData);

  

  return (
    <div className="p-10">
      <form onSubmit={update}>
        <div className="font-bold text-[#520B1F] pb-10">
          Creative & Hiring Settings
        </div>
        <div className="border-b-2 border-[#520b1f3a] pb-8">
          <div>
            <label className="inline-flex flex-col md:flex-row items-center justify-between me-5 cursor-pointer">
              <span className="me-3 text-sm font-bold text-[#2B1139]">
                Toggle the checkmark to list yourself as available for hiring;
                application subject to review
              </span>
              <input
                type="checkbox"
                className="sr-only peer"
                checked={creativeHireStatus}
                onChange={handleCheckboxChange}
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#520B1F]"></div>
            </label>
          </div>
          <div className="pt-8 flex items-center justify-between">
            <div className="text-sm font-bold text-[#2B1139]">
              Creative Status
            </div>
            <div>
              <button type="button" className="text-[#520B1F] border border-[#520B1F] uppercase font-bold bg-white rounded-full px-4 text-sm py-2">
                {!!!userData.user.creative_status
                  ? "Pending verification"
                  : userData.user.creative_status}
              </button>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-[#520b1f3a] py-8">
          <div className="font-bold text-[#520B1F] pb-4">Creative Profile</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3">
              <label className="text-sm font-bold text-[#5C5C5C]">
                Provide a brief description (this will be displayed on your
                profile)
              </label>
              <textarea
                placeholder="Enter description"
                className="w-full mt-1 rounded-3xl px-4 py-2"
                rows={5}
                cols={5}
                value={formData.description}
                onChange={(e) => updateFormData(e.target.value, "description")}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.phone_number}
                onChange={(e) => updateFormData(e.target.value, "phone_number")}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Ghana Post GPS
              </label>
              <input
                type="text"
                placeholder="Enter Ghana Post GPS"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.ghana_post_gps}
                onChange={(e) =>
                  updateFormData(e.target.value, "ghana_post_gps")
                }
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">City</label>
              <input
                placeholder="Enter city"
                type="text"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.city}
                onChange={(e) => updateFormData(e.target.value, "city")}
              />
            </div>
            <div className="md:col-span-3">
              <label className="text-sm font-bold text-[#5C5C5C]">
                Physical Address
              </label>
              <input
                type="text"
                placeholder="Enter physical address"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.physical_address}
                onChange={(e) =>
                  updateFormData(e.target.value, "physical_address")
                }
              />
            </div>
          </div>
        </div>
        <div className="border-b-2 border-[#520b1f3a] py-8">
          <div className="font-bold text-[#520B1F] pb-4">Creative Profile</div>
          <div className="text-sm font-bold pb-3 text-[#5C5C5C]">
            What do you want to be hired for? (Select all that apply)
          </div>
          {/* checkbox */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat: any, index: number) => (
              <div className="flex items-center me-4">
                <input
                  id="red-checkbox"
                  type="checkbox"
                  checked={checks?.length > 0 ? checks.includes(cat.id) : false}
                  value=""
                  className="w-4 h-4 text-[#520B1F] bg-[#520B1F] checked:bg-[#520B1F] border-gray-300 rounded focus:ring-[#520B1F] focus:ring-2"
                  onChange={() => {
                    if (checks?.length > 0 && checks.includes(cat.id))
                      setChecks((checks: any) => checks.filter((c: any) => c !== cat.id));
                    else setChecks((checks: any) => [...checks, cat.id]);
                  }}
                />
                <label
                  htmlFor="red-checkbox"
                  className="ms-2 text-sm font-bold text-[#2B1139]"
                >
                  {cat.creative_category}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b-2 border-[#520b1f3a] py-8">
          <div className="font-bold text-[#520B1F] pb-4">
            Creative's pricing
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Hour Rate
              </label>
              <input
                type="text"
                placeholder="Hour rate"
                title=""
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.pricing?.hourly_rate}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      hourly_rate: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Daily Rate
              </label>
              <input
                type="text"
                placeholder="Enter rate"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.pricing?.daily_rate}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      daily_rate: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Minimum charge
              </label>
              <input
                type="text"
                placeholder="Enter price"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.pricing?.minimum_charge}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      minimum_charge: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="font-bold text-sm text-[#2B1139] py-2 md:col-span-3">
              Weddings (Leave this section if you don’t offer services for
              weddings)
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                One day (Traditional)
              </label>
              <input
                type="text"
                placeholder="Enter price"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.pricing?.one_day_traditional}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      one_day_traditional: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                One day (White)
              </label>
              <input
                type="text"
                placeholder="Enter price"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.pricing?.one_day_white}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      one_day_white: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                One day (White & Traditional)
              </label>
              <input
                type="text"
                placeholder="Enter price"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.pricing?.one_day_white_traditional}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      one_day_white_traditional: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="">
              <label className="text-xs lg:text-sm font-bold text-[#5C5C5C]">
                Two days (White & Traditional)
              </label>
              <input
                type="text"
                placeholder="Enter price"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.pricing?.two_days_white_traditional}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      two_days_white_traditional: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="">
              <label className="text-sm font-bold text-[#5C5C5C]">
                Three days (+Thanksgiving)
              </label>
              <input
                type="text"
                placeholder="Enter price"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.pricing?.three_days_thanksgiving}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      three_days_thanksgiving: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="md:col-span-3">
              <label className="text-sm font-bold text-[#5C5C5C]">
                Other charges (Please specify in detail)
              </label>
              <textarea
                className="w-full mt-1 rounded-3xl px-4 py-2"
                placeholder="Enter price"
                rows={5}
                cols={5}
                value={formData.pricing?.other_charges}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    pricing: {
                      ...formData.pricing,
                      other_charges: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
        <div className=" py-8">
          <div className="font-bold text-[#520B1F] pb-4">
            Payment Information
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Bank Name
              </label>
              <input
                type="text"
                placeholder="Enter bank name"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.payment_information?.bank_name}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    payment_information: {
                      ...formData.payment_information,
                      bank_name: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">Branch</label>
              <input
                type="text"
                placeholder="Enter branch"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.payment_information?.bank_branch}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    payment_information: {
                      ...formData.payment_information,
                      bank_branch: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Account Name
              </label>
              <input
                type="text"
                placeholder="Enter account name"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.payment_information?.bank_acc_name}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    payment_information: {
                      ...formData.payment_information,
                      bank_acc_name: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Account Number
              </label>
              <input
                type="text"
                placeholder="Enter account number"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.payment_information?.bank_acc_num}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    payment_information: {
                      ...formData.payment_information,
                      bank_acc_num: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="font-bold text-sm text-[#2B1139] pt-2 md:col-span-2">
              Mobile Money
            </div>
            <div>
              <label className="text-sm font-bold text-[#5C5C5C]">
                Account Name
              </label>
              <input
                type="text"
                placeholder="Enter account name"
                className="w-full mt-1 rounded-full px-4 py-2"
                value={formData.payment_information?.momo_acc_name}
                onChange={(e) =>
                  setFormData((formData: any) => ({
                    ...formData,
                    payment_information: {
                      ...formData.payment_information,
                      momo_acc_name: e.target.value,
                    },
                  }))
                }
              />
            </div>
            {/* <div>
                <label className='text-sm font-bold text-[#5C5C5C]'>Account Number</label>
                <input type="text" className='w-full mt-1 rounded-full px-4 py-2' value={formData.payment_information.bank_acc_num} onChange={(e) => setFormData((formData:any) => ({ ...formData, pricing: { ...formData.payment_information, bank_name: e.target.value } }))} />
            </div> */}
            <div className="font-bold text-sm text-[#2B1139] pt-2 md:col-span-2">
              Preferred Payment Account
            </div>
            {/* radio button */}
            <div className="flex items-center me-4">
              <div className="border-2 p-[2px] rounded-full border-[#520B1F]">
                <input
                  id="red-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="w-2 h-2 text-[#520B1F] bg-[#520B1F] "
                />
              </div>
              <label
                htmlFor="red-radio"
                className="ms-2 text-sm font-bold text-[#5c5c5c]"
              >
                Bank Account
              </label>
            </div>
            <div className="flex items-center me-4">
              <div className="border-2 p-[2px] rounded-full border-[#520B1F]">
                <input
                  id="yellow-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="w-2 h-2 text-[#520B1F] bg-[#520B1F] "
                />
              </div>
              <label
                htmlFor="yellow-radio"
                className="ms-2 text-sm font-bold text-[#5c5c5c]"
              >
                Mobile Money
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">
            {loader === true ? "Processing ...... " : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
