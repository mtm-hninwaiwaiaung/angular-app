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
    name: string;
    email: string;
    age?: number;
    phNumber?: string;
    hobby: string;
}