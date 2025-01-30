"use client";

import { useState, useEffect } from "react";
import { Button, Typography, Stack } from "@mui/material";

export default function ClapsButton({ postId }: { postId: string }) {
  const [claps, setClaps] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchClaps() {
      try {
        const response = await fetch("/api/claps");
        const data = await response.json();
        setClaps(data[postId] || 0);
      } catch (error) {
        console.error("Failed to fetch claps:", error);
      }
    }
    fetchClaps();
  }, [postId]);

  const updateClaps = async (method: "POST" | "PUT", newClaps?: number) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch("/api/claps", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          method === "POST"
            ? { postId }
            : { postId, newClaps: Math.max(0, newClaps ?? 0) }
        ),
      });

      if (!response.ok) throw new Error("Failed to update claps");

      const data = await response.json();
      setClaps(data.claps);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => updateClaps("PUT", claps - 1)}
        disabled={loading || claps === 0}
      >
        👎 Unclap
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => updateClaps("POST")}
        disabled={loading}
      >
        👏 {claps}
      </Button>
      <Typography variant="body2">Claps</Typography>
    </Stack>
  );
}
