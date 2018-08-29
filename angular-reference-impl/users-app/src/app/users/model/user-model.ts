export class User {

    id = 0;
    firstName = '';
    lastName = '';
    email = '';

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        email: string) {

            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
    }
 }
