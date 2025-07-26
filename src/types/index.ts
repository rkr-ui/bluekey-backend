export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Asset {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    available: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Booking {
    id: string;
    userId: string;
    assetId: string;
    startDate: Date;
    endDate: Date;
    status: 'pending' | 'confirmed' | 'canceled';
    createdAt: Date;
    updatedAt: Date;
}