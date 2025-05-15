

export default function BlockedCard() {
    const blockedAddresses = ["0x9b1..d02a", "0x9b1..d02b"];
    return (
      <>
        <div className="w-full gap-4 text-white border border-gray-700 rounded-lg px-2 sm:px-4 py-4">
          <h2 className="text-lg font-medium mb-4 text-left">
            Blocked Addresses
          </h2>
          <div className="flex flex-col w-full gap-3">
            {blockedAddresses.map((address, index) => (
              <div
                key={index}
                className="flex w-full hover:bg-[#232932cb] odd:bg-[#2c344066] px-3 items-center justify-between gap-4"
              >
                <div className="flex">{address}</div>
                <button className="cursor-pointer transition-class bg-[#2C3440] px-3 py-2 rounded-lg hover:bg-[#374458] transition-class flex items-center justify-center w-32">
                  Unblock
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full gap-3 text-white border border-gray-700 rounded-lg px-4 py-2 flex justify-between ">
          <input
            type="text"
            placeholder="Add address"
            name=""
            id="add"
            className="flex w-[60%]"
          />
          <button className="cursor-pointer self-end transition-class bg-[#2C3440] px-3 py-2 mr-1 rounded-lg hover:opacity-80 transition-class flex items-center justify-center w-32">
            Block
          </button>
        </div>
      </>
    );
}