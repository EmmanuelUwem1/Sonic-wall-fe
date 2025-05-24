"use client";
// import { useState, useEffect } from "react";
// import { getTraffic } from "@/lib/api/actions";
import formatAddress from "@/lib/utils";
// type ApiTraffic = {
//   method: string;
//   from_address: string;
//   id: number;
//   confirmed_at: string | null;
//   to_address: string;
//   call_time: string;
// };

// type Traffic = {
//   time: string;
//   sender: string;
//   address: string;
//   method: string;
// };

// function formatDate(dateString: string) {
//   const date = new Date(dateString);
//   return date.toLocaleString();
// }

export default function TrafficCard() {
  const tableHeaders = ["Timestamp", "Sender", "Address", "Method"];

  const transactions = [
    {time:"2:45 PM", sender:"0x9b1..d02a", address:"0x5fc...ef91", method:"transfer"},
    {time:"2:45 PM", sender:"0x9b1..d02a", address:"0x5fc...ef91", method:"withdraw"},
    {time:"2:45 PM", sender:"0x9b1..d02a", address:"0x5fc...ef91", method:"transfer"},
    {time:"2:45 PM", sender:"0x9b1..d02a", address:"0x5fc...ef91", method:"transfer"},
]
  // const [transactions, setTransactions] = useState<Traffic[]>([]);

  // useEffect(() => {
  //   let isMounted = true;

  //   const fetchTraffic = async () => {
  //     try {
  //       const data: ApiTraffic[] = await getTraffic();
  //       if (isMounted && Array.isArray(data)) {
  //         // Map API response to Traffic type
  //         // const mapped = data.map((item) => ({
  //         //   time: formatDate(item.call_time),
  //         //   sender: item.from_address,
  //         //   address: item.to_address,
  //         //   method: item.method,
  //         // }));
  //         // setTransactions(mapped);
  //       }
  //     } catch {
  //       // handle error if needed
  //     }
  //   };

  //   fetchTraffic();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div className="w-full bg-[#161a2359] text-white border border-gray-700 rounded-lg p-4 glass">
      <h2 className="text-lg font-semibold mb-4 text-left">Contract Traffic</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="text-base opacity-80 font-normal">
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} className="text-left py-2 px-4">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-2 px-4 text-center opacity-60">
                  No traffic data available.
                </td>
              </tr>
            ) : (
              transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#232932ca] odd:bg-[#2c3440b5] cursor-default opacity-90"
                >
                  <td className="py-2 px-4">{transaction.time}</td>
                  <td className="py-2 px-4">{formatAddress(transaction.sender)}</td>
                  <td className="py-2 px-4">{formatAddress(transaction.address)}</td>
                  <td className="py-2 px-4">{transaction.method}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
