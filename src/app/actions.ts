'use server'

export async function getApiBackendUrl() {
  return Promise.resolve(process.env.API_BACKEND);
}