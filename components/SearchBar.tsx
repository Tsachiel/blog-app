"use client";

import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBarProps } from "@/types";

export default function SearchBar({ searchQuery }: SearchBarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchQuery);
  
    const debouncedSearch = useDebounce(searchTerm, 2000); 
  
    useEffect(() => {
      const params = new URLSearchParams();
      if (debouncedSearch) {
        params.set("query", debouncedSearch);
      }
  
      router.push(`?${params.toString()}`, { scroll: false });
    }, [debouncedSearch, router]);
  
    return (
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
    );
  }