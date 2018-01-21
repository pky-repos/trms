export class Reservation {
    constructor(
        public type: string,
        public attributes: Attributes
    ){ }
}

export class Attributes {
    constructor(
        public date_time: Date,
        public slot_start: number,
        public slot_end: number,
        public guest_count: number,
        public table_number: number,
        public guest_mobile_num: string,
        public contact_details: ContactDetails,
        public tags: [string],
        public status: string
    ){ }
}

export class ContactDetails {
    constructor(
        public name: string,
        public email: string
    ){ }
}

export class Tag {
    constructor(
        public name: string,
        public value: number,
        public checked: boolean
    ){ }
}
