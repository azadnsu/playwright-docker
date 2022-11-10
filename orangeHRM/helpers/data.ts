import {Faker} from "faker"

export const data = {
    BASE_URL: "https://opensource-demo.orangehrmlive.com/",
    ADMIN_USER_NAME: "Admin",
    ADMIN_USER_PASSWORD: "admin123",


    //data generator
    generate_email: () => {
        const userEmail = Faker.internet.exampleEmail().toLowerCase();
        console.log("Generated email: " + userEmail);
        return userEmail;
    },
    generate_password: (length = 9) => {
        const userPassword = Faker.internet.password(length, false, null, "aA1!");
        console.log("Generated password: " + userPassword);
        return userPassword;
    },
    generate_string: (length = 6) => {
        const randomString =
            "playwright" + Faker.internet.password(length, false, null, "");
        return randomString.toLowerCase();
    },
    generate_number: (min = 2, max = 10) => {
        return Faker.datatype.number({min: min, max: max});
    },
    generate_numberFloat: (min = 4, max = 10) => {
        return Faker.random.number({
            min: min,
            max: max,
            precision: 0.01,
        });
    },

    generate_randomAddress : () => (
        {
            country: Faker.address.country(),
            city: Faker.address.city(),
            streetName: Faker.address.streetName(),
            state: Faker.address.state(),
            zipcode: Faker.address.zipCode(),
        }),
};
