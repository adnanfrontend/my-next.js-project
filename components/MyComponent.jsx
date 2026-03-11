// MyComponent.jsx
import React from "react";
import {
  ImageIcon,
  PlaySquare,
  MessageSquare,
  Smile,
  CornerUpLeft,
  Zap,
  Mic
} from "lucide-react";

export default function MyComponent() {
  return (
    <div className="flex gap-4">
      <ImageIcon />
      <PlaySquare />
      <MessageSquare />
      <Smile />
      <CornerUpLeft />
      <Zap />
      <Mic />
    </div>
  );

  
}