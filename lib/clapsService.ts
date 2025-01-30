import fs from "fs/promises";
import path from "path";

const clapsFilePath = path.join(process.cwd(), "data", "claps.json");

export async function getClaps() {
  try {
    const data = await fs.readFile(clapsFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("error reading claps.json: ", error);
    return {};
  }
}

export async function updateClaps(postId: string, newClaps: number) {
  try {
    const claps = await getClaps();
    claps[postId] = newClaps;

    await fs.writeFile(clapsFilePath, JSON.stringify(claps, null, 2));
    return { postId, claps: newClaps };
  } catch (error) {
    console.error("error updating claps.json: ", error);
    throw new Error("failed to update claps");
  }
}
