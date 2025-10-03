export async function blogData() {
    try {
      const res = await fetch("https://aapkiyojana.org/abnoq/welcome/blogList", {
        cache: "no-store", // always fetch latest data
      });
      if (!res.ok) throw new Error("Failed to fetch case studies");
      return res.json();
    } catch (error) {
      console.error("❌ Failed to load case study data", error);
      return [];
    }
  }
  