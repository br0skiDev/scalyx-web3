"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Download } from "lucide-react";

export function DownloadWhitePaper() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Downloading",
      description: "SCALYX_WHITEPAPER.pdf",
    });
  };

  return (
    <a
      href="/assets/SCALYX_WHITEPAPER.pdf"
      download="SCALYX_WHITEPAPER.pdf"
      className="self-center py-6"
    >
      <Button variant="outline" onClick={handleDownload}>
        <span>
          <Download className="w-[16px] mr-1" />
        </span>
        WHITEPAPER
      </Button>
    </a>
  );
}
