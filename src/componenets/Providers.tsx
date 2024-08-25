"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePresenceChannel } from "../../hooks/usePresenceChannel";
import { useNotificationChannel } from "../../hooks/useNotificationChannel";
export default function Providers({
  children,
  userId,
}: {
  children: React.ReactNode;
  userId: string | null;
}) {
  usePresenceChannel();
  useNotificationChannel(userId);
  return (
    <NextUIProvider>
      <ToastContainer position="top-right" className="z-50" hideProgressBar />
      {children}
    </NextUIProvider>
  );
}
