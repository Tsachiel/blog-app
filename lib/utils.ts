export function formatDateTime(dateString: string): string {
    if (!dateString) return "Unknown Date"; 
  
    const date = new Date(dateString);
  
    const formattedDate = date.toISOString().split("T")[0];
  
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
  
    return `${formattedDate}, ${formattedTime}`;
  }

  export function safeUrl(url: string): string {
    return encodeURIComponent(url);
  }
  
  