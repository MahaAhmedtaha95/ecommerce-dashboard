export const fetchProducts = async () => {
    const response = await fetch('./products.json'); 
    console.log ("Responseeeeeee:",response)
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  };
  