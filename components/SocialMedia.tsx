"use client";

import React from "react";
import {
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const socialLink = [
  {
    name: "Facebook",
    link: "https://facebook.com/",
    icon: Facebook,
    color: "hover:text-blue-600",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/",
    icon: Youtube,
    color: "hover:text-red-600",
  },
  {
    name: "X (Twitter)",
    link: "https://x.com/",
    icon: Twitter,
    color: "hover:text-sky-500",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/",
    icon: Linkedin,
    color: "hover:text-blue-500",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    icon: Github,
    color: "hover:text-gray-800",
  },
];

function SocialMedia() {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex items-center gap-6">
        {socialLink.map((item) => {
          const Icon = item.icon;
          return (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lightColor transition-all duration-300 ${item.color}`}
                >
                  <Icon className="w-6 h-6 hover:scale-110 hoverEffect" />
                </Link>
              </TooltipTrigger>

              {/* Tooltip show on top */}
              <TooltipContent
                side="top"
                className="bg-shop_light_green text-white text-xs px-2 py-1 rounded-md shadow-md"
              >
                {item.name}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia;
