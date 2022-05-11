export interface Position {
    id: string;
    value: string;
}

export interface Member {
    name: string;
    email: string;
    membershipDate: Date
}

export interface Student {
    id: number;
    readonly name: string;
    email: string;
    age?: number;
    phNumber?: string;
    hobby: string;
}

export interface Booking {
    name: string;
    address?: string;
    email: string;
    telephone: string;
    checkInDate: string;
    checkOutDate: string;
    numberOfGuest?: number;
    roomType: number;
    wifiOption: number;
    totalCost: number;
    specialRequirements?: string;
}

export interface InputObj {
    id: number;
    label: string;
    value: number;
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}