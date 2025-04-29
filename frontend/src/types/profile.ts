export interface ProfileProps {
    name: string;
    email: string;
    phone: string;
    gender: string;
    address: string;
    orders: Order[];
    totalSpent: number;
    recentOrders: Order[];
    image: string;
}

export interface Order {
    orderId: string;
    date: string;
    total: number;
    items: string[];
}