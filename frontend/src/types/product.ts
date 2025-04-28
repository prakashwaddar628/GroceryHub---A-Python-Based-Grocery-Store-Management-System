export interface Product {
    id: string;
    name: string;
    description?: string;
    image: string;
    new_price?: number;
    old_price?: number | null;
    quantity?: number;
    category?: string;
    rating?: number;
    // ... other product properties
  }