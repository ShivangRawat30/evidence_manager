"use client";
import axios from "axios";

export const checkAuth = async (address: string) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth`, { address });
    if (response.data.authorized) {
      console.log("Authorized:", response.data);
    } else {
      console.log("Not authorized:", response.data);
    }
    return response.data; // Properly return the data
  } catch (error) {
    console.error("Error in checkAuth:", error);
    return undefined; // Handle error case
  }
};

export const printNew = async (escape: number) => {
  return { newNumber: escape + 1 };
};
