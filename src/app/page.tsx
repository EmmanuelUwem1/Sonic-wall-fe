"use client";
import { useEffect, useState } from "react";
import FlexCard from "@/components/flex-card";
import GetStarted from "@/components/get-started-card";
import IntegrationCard from "@/components/integration-card";
import { getStats } from "@/lib/api/actions";
import TrafficCard from "@/components/traffic-card";
import BlockedCard from "@/components/blocked-card";

type Stats = {
  totalCalls: string;
  blockedPercentage: string;
  averageLatencyMs: string;
};

export default function Home() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const statsRes = await getStats();
        if (isMounted) {
          setStats(statsRes);
        }
      } catch {
        // handle error if needed
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000); // Refetch every 5 seconds
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const data = [
    { title: "Total Calls", value: stats?.totalCalls ?? "3", unit: "" },
    { title: "% Blocked", value: stats?.blockedPercentage ?? "25", unit: "%" },
    {
      title: "Average Latency",
      value: stats?.averageLatencyMs ?? "11",
      unit: "ms",
    },
  ];

  return (
    <>
      <div className="flex gap-3 justify-start items-center w-full flex-wrap lg:flex-nowrap">
        {data.map((item, index) => (
          <FlexCard
            title={item.title}
            unit={item.unit}
            value={item.value}
            key={index}
          />
        ))}
      </div>
      <div className="flex gap-4 w-full lg:flex-nowrap flex-wrap  justify-between items-start">
        <div className="flex w-full lg:w-[60%] flex-col justify-start items-start gap-4">
          <TrafficCard />
          <IntegrationCard />

        </div>
        <div className="flex w-full lg:w-[40%] flex-col justify-start items-start gap-4 max-lg:mb-18">
          <BlockedCard />
          <GetStarted />
        </div>
      </div>
    </>
  );
}
