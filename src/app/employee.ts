export interface IEmployee {
    id: number;
    name: string;
    age: number;

    // online json test data
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zpcode: string;
    };

    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
