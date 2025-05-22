'use client'
import { Input } from '@/components/ui/input'
import { HelpCircle } from 'lucide-react'
import { CheckboxWithText } from './components/Checkbox'
import CustomInputField from './components/Inputefield';

const checkboxData = [
  { head: "Reports", sub: "Enable report notification" },
  { head: "Sound", sub: "Enable sound notifications" },
  { head: "Vibrations", sub: "Enable vibration effect" },
];

const sociallinks = [
    { link: "facebook.com/"},
    { link: "twitter.com/"},
    { link: "discord.com/"},
];

export default function SettingDesign() {
  return (
    <div className="bg-[#070A2A] text-white px-4 py-2">
        <div className="px-2">
            <div className="w-fit">
                <h1>Profile</h1>
                <div className="mt-3 h-[3px] bg-gradient-to-r from-white to-[#0036F6] rounded-full shadow-[0px_0px_45px_10px_rgba(0,54,246,1)]">
                </div>
            </div>
            {/* <div className="h-[3px] bg-gradient-to-r from-[#385682] via-[#385682] to-red-900 w-full"> 
            </div> */}
        </div>
        <div className="mt-8 p-px bg-gradient-to-b rounded-lg from-[#0680FF] via-[#070A2A] to-transparent">
            <div className="bg-[#070A2A] rounded-lg px-8 py-2">
                <div className="border-b-2 border-gray-600 py-4">
                    <h1 className="text-lg font-semibold">Profile Details</h1>
                    <p>You can change your profile details here seamlessly.</p>
                </div>
                <div className="flex lg:flex-row flex-col border-b-2 border-gray-600 py-5 gap-10">
                    <div className="flex flex-col items-start">
                        <div className="flex gap-x-2 items-center">
                            <h1 className="font-semibold">Public Profile</h1>
                            <HelpCircle className="w-5 h-5 text-white" />
                        </div>
                        <p className="lg:w-[20vw]">This is the main profile that will be visible for everyone</p>
                        <button className="bg-[#070A2A] text-blue-700 font-semibold mt-4">View Details</button>
                    </div>
                    <div className="flex flex-col lg:gap-8">
                        <Input placeholder="Gago Official" className="border-blue-600 rounded-full"/>
                        <CustomInputField link='https://gago.com/'/>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row border-b-2 border-gray-600 py-5 gap-5 lg:gap-20">
                    <div>
                        <h1 className="font-semibold">Bio Description</h1>
                        <p className="lg:w-[18vw]">This will be your main story. Keep it very, very long</p>
                    </div>
                    <div>
                        <textarea className="h-[20vh] w-full lg:w-[22vw] border border-blue-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Gago is the one and only design system for intelligent, lazy gen Z people"
                        ></textarea>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row border-b-2 border-gray-600 py-5 lg:gap-20">
                    <div>
                        <h1 className="font-semibold">Profile Picture</h1>
                        <p className="lg:w-[18vw]">This where people will see your acutual face</p>
                        <button className="bg-[#070A2A] text-blue-700 font-semibold mt-4 ">View Details</button>
                    </div>
                    <div className="flex mt-3 lg:mt-0 gap-2">
                        <img src="file.svg" alt="" className="w-15 h-15 rounded-full"/>
                        <Input className="h-[20vh] bg-gray-900 border-blue-600" id='picture' type='file' />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row border-b-2 border-gray-600 py-5 gap-2 lg:gap-32">
                   <div>
                        <h1 className="font-semibold" >Notifications</h1>
                        <p>This where you'll receive notifications</p>
                   </div>
                   <div>
                    {checkboxData.map((item, idx) => (
                        <CheckboxWithText key={idx} head={item.head} sub={item.sub}/>
                    ))}
                   </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-50 py-5">
                    <div>
                        <div className="flex gap-x-2 items-center">
                            <h1 className="font-semibold">Social Media Links</h1>
                            <HelpCircle className="w-5 h-5 text-white" />
                        </div>
                        <p>Links for your social media.</p>
                    </div>
                    <div className="">
                        {sociallinks.map((item, idx) => (
                            <CustomInputField key={idx} link={item.link}/>
                        ))}
                    </div>
                </div>
                <div className="mt-5 flex gap-3 justify-end">
                    <button className="rounded-full border-2 px-3 py-1 border-white">Cancel</button>
                    <button className="rounded-full bg-blue-600 border-2 px-3 py-1 border-blue-600">Save settings</button>
                </div>
            </div>
        </div>
    </div>
  )
}
