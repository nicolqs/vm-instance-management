export interface Instance {
  name: string;
  instanceId: string;
  state: string;
  type: string;
  alarm: string;
  zone: string;
  publicIp: string;
  monitoring: string;
}

export const instanceData: Instance[] = [
  {
    name: "Neptune 1",
    instanceId: "i-45890a",
    state: "Running",
    type: "Micro2x",
    alarm: "No",
    zone: "US-1",
    publicIp: "8.8.8.8",
    monitoring: "Yes",
  },
  {
    name: "Elysium 42",
    instanceId: "i-s6ds6n",
    state: "Running",
    type: "Large4x",
    alarm: "No",
    zone: "US-1",
    publicIp: "4.4.4.4",
    monitoring: "Yes",
  },
  {
    name: "Eth Node",
    instanceId: "i-m6sg8",
    state: "Stopped",
    type: "Medium1x",
    alarm: "Yes",
    zone: "EU-1",
    publicIp: "78.56.86.145",
    monitoring: "No",
  },
  {
    name: "Neptune 6",
    instanceId: "i-9090as",
    state: "Running",
    type: "Micro2x",
    alarm: "No",
    zone: "US-1",
    publicIp: "45.65.78.124",
    monitoring: "Yes",
  },
  {
    name: "Elysium 182",
    instanceId: "i-56nn4",
    state: "Running",
    type: "Large4x",
    alarm: "No",
    zone: "US-1",
    publicIp: "45.65.78.123",
    monitoring: "Yes",
  },
  {
    name: "Eth Node Test",
    instanceId: "i-mas012",
    state: "Stopped",
    type: "Medium1x",
    alarm: "Yes",
    zone: "EU-1",
    publicIp: "78.56.90.56",
    monitoring: "No",
  },
];
