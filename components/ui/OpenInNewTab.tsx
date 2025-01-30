"use client";

import { Button } from "@mui/material";

export default function OpenInNewTab({ url }: { url: string }) {
  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={() => window.open(url, "_blank")}
    >
      Go To Original Post
    </Button>
  );
}
