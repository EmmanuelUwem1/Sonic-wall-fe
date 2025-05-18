import FlexCard from "@/components/flex-card";
import TrafficCard from "@/components/traffic-card";
import GetStarted from "@/components/get-started-card";
import IntegrationCard from "@/components/integration-card";
import BlockedCard from "@/components/blocked-card";
export default function Home() {
  const data = [
    { title: "Total Calls", value: "12,840", unit: "" },
    { title: "% Blocked", value: "7.1", unit: " % " },
    { title: "Average Latency", value: "204", unit: "ms" },
  ];
 
  return (

       

        
         <>
          <div className="flex gap-3 justify-start items-center w-full flex-wrap lg:flex-nowrap">
            {data.map((data, index) => (
              <FlexCard
                title={data.title}
                unit={data.unit}
                value={data.value}
                key={index}
              />
            ))}
          </div>
          <div className="flex gap-4 w-full lg:flex-nowrap flex-wrap  justify-between items-start">
            <div className="flex w-full lg:w-[60%] flex-col justify-start items-start gap-4">
              <TrafficCard />
              {/* integration wizard */}
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
