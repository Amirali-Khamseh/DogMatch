"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePresenceChannel } from "../../hooks/usePresenceChannel";
export default function Providers({ children }: { children: React.ReactNode }) {
  usePresenceChannel();
  return (
    <NextUIProvider>
      <ToastContainer position="top-right" className="z-50" hideProgressBar />
      {children}
    </NextUIProvider>
  );
}
