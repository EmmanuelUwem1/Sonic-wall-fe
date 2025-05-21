"use client";
import { useEffect, useState } from "react";
import { getBlocked, blockAddress, unblockAddress } from "@/lib/api/actions";
import formatAddress from "@/lib/utils";
type Blocked = {
  id: number;
  address: string;
};

export default function BlockedCard() {
  const [blockedAddresses, setBlockedAddresses] = useState<Blocked[]>([]);
  const [input, setInput] = useState("");
  const [loadingBlock, setLoadingBlock] = useState(false);
  const [loadingUnBlock, setLoadingUnBlock] = useState(false);

  // Fetch blocked addresses on mount
  useEffect(() => {
    let isMounted = true;
    const fetchBlocked = async () => {
      try {
        const data = await getBlocked();
        if (isMounted && Array.isArray(data)) {
          setBlockedAddresses(data);
        }
      } catch {
        // handle error if needed
      }
    };
    fetchBlocked();
    return () => {
      isMounted = false;
    };
  }, [loadingBlock, loadingUnBlock]);

  // Helper to slice address

  // Handle block address
  const handleBlock = async () => {
    if (!input.trim()) return;
    setLoadingBlock(true);
    try {
      await blockAddress({ address: input.trim() });
      // Refetch blocked addresses after blocking
      const data = await getBlocked();
      setBlockedAddresses(data);
      setInput("");
    } catch {
      // handle error if needed
    }
    setLoadingBlock(false);
  };

  // Handle unblock address
  const handleUnblock = async (address:string) => {
    setLoadingUnBlock(true);
    try {
      await unblockAddress(address);
      const data = await getBlocked();
      setBlockedAddresses(data);
    } catch {
      // handle error if needed
    }
    setLoadingUnBlock(false);
  };

  return (
    <>
      <div className="w-full gap-4 text-white border border-gray-700 bg-[#161a2342] glass rounded-lg px-2 sm:px-4 py-4">
        <h2 className="text-lg font-medium mb-4 text-left">
          Blocked Addresses
        </h2>
        <div className="flex flex-col w-full gap-3">
          {blockedAddresses.length === 0 ? (
            <div className="text-center opacity-60">No blocked addresses.</div>
          ) : (
            blockedAddresses.map((item) => (
              <div
                key={item.id}
                className="flex w-full hover:bg-[#232932cb] odd:bg-[#2c344066] px-3 items-center justify-between gap-4"
              >
                <div className="flex">{formatAddress(item.address)}</div>
                <button
                  className="cursor-pointer bg-[#2789bed1] px-3 py-2 rounded-lg flex items-center justify-center w-32 hover:opacity-80 transition-class"
                  onClick={() => handleUnblock(item.address)}
                  disabled={loadingUnBlock}
                  title="Unblock"
                >
                  { "Unblock"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full gap-3 text-white border border-gray-700 bg-[#161a2342] rounded-lg px-4 py-2 flex justify-between ">
        <input
          type="text"
          placeholder="Add address"
          name=""
          id="add"
          className="flex w-[60%] bg-transparent border-b border-gray-500 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loadingBlock}
        />
        <button
          className="cursor-pointer self-end transition-class bg-[#ff2d2db5] px-3 py-2 mr-1 rounded-lg hover:opacity-80 transition-class flex items-center justify-center w-32"
          onClick={handleBlock}
          disabled={loadingBlock}
        >
          {loadingBlock ? "Blocking..." : "Block"}
        </button>
      </div>
    </>
  );
}
