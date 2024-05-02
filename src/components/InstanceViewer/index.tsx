import { instanceData } from "@/data/instances";

function InstanceViewer() {
  return (
    <div className="rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
      <h5 className="mb-5 text-xl font-semibold text-black dark:text-white">
        Instances
      </h5>
      <div className="mb-4 grid w-full grid-cols-8 gap-1 border-2 border-slate-100 font-bold">
        <div className="border-r-2 border-slate-100">Name</div>
        <div className="border-r-2 border-slate-100">Instance Id</div>
        <div className="border-r-2 border-slate-100">State</div>
        <div className="border-r-2 border-slate-100">Type</div>
        <div className="border-r-2 border-slate-100">Alarm</div>
        <div className="border-r-2 border-slate-100">Zone</div>
        <div className="border-r-2 border-slate-100">Public Ip</div>
        <div className="">Monitoring</div>
      </div>
      <div className="flex flex-col gap-3">
        {instanceData.map((instance, i) => {
          const statusColor =
            instance.state === "Running" ? "bg-green-400" : "bg-rose-800";
          return (
            <div
              className="grid w-full grid-cols-8 border-b-2 border-b-slate-50 pb-1"
              key={instance.name}
            >
              <div className="font-bold">{instance.name}</div>
              <div className="">{instance.instanceId}</div>
              <div className="flex flex-row gap-2">
                <span className="relative top-[7px] flex h-3 w-3">
                  {instance.state === "Running" && (
                    <span
                      className={`${statusColor} absolute inline-flex h-full w-full animate-ping rounded-full opacity-75`}
                    ></span>
                  )}
                  <span
                    className={`${statusColor} relative inline-flex h-3 w-3 rounded-full`}
                  ></span>
                </span>
                {instance.state}
              </div>
              <div>{instance.type}</div>
              <div>{instance.alarm}</div>
              <div>{instance.zone}</div>
              <div>{instance.publicIp}</div>
              <div>{instance.monitoring}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InstanceViewer;
