export class Booking{
    id: number;
    name: string;
    image: string;
    show_time: Array<show_time>;
}

export class show_time{
    date: string;
    time: Array<time>;
}

export class time{
    time: string;
    teater: number;
    seat: Array<seat>;
}

export class seat{
    number : string;
    book: boolean;
    type: string;
    price: number;
}