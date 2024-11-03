export default async function fetched() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
  
      if (!response.ok) {
        throw new Error("Fetch failed");
      }
  
      const data = await response.json();
      return data; // Return the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error for handling in the calling function
    }
  }
  