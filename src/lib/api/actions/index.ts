import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";

// GET /
export async function getRoot() {
  const res = await axios.get(`${backendUrl}/`);
  return res.data;
}

// GET /api/stats
export async function getStats() {
  const res = await axios.get(`${backendUrl}/api/stats`);
  return res.data;
}

// GET /api/stats/latency
export async function getLatency() {
  const res = await axios.get(`${backendUrl}/api/stats/latency`);
  return res.data;
}

// GET /api/traffic
export async function getTraffic() {
  const res = await axios.get(`${backendUrl}/api/traffic`);
  return res.data;
}

// POST /api/traffic
export async function addTrafficCall(data: string) {
  const res = await axios.post(`${backendUrl}/api/traffic`, data);
  return res.data;
}

// GET /api/blocked
export async function getBlocked() {
  const res = await axios.get(`${backendUrl}/api/blocked`);
  return res.data;
}

// POST /api/blocked
export async function blockAddress(data: { address: string }) {
  const res = await axios.post(`${backendUrl}/api/blocked`, data);
  return res.data;
}

// DELETE /api/blocked/{addr}
export async function unblockAddress(addr: string) {
  const res = await axios.delete(
    `${backendUrl}/api/blocked/${encodeURIComponent(addr)}`
  );
  return res.data;
}
