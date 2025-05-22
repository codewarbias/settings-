type CustomInputFieldProps = {
  link: string
}

export default function CustomInputField({ link }: CustomInputFieldProps) {
  return (
      <div className="mt-5 flex w-full max-w-lg rounded-full overflow-hidden border border-blue-600 shadow-lg">
        <div className="flex items-center justify-center bg-blue-700 text-white px-4 py-2 text-sm md:text-base font-medium whitespace-nowrap">
          {link}
        </div>
        <input
          type="text"
          className="flex-1 bg-[#070A2A] text-gray-200 px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        />
      </div>
  )
}
