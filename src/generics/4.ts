type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(
  updatedValues: Partial<User>,
  initialValues?: User
): User {
  const defaultValues: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  //initialValues is for update, default for create
  return initialValues
    ? { ...initialValues, ...updatedValues }
    : { ...defaultValues, ...updatedValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

// ================
// ANOTHER VERSION

// function createOrUpdateUser(values: Partial<User>, initialValues: User): User {
//   return { ...values, ...initialValues };
// }

// const userAlice: User = {
//   name: "Alice",
//   surname: "Bright",
//   email: "prev@mail.com",
//   password: "password321",
// };

// const userDefault: User = {
//   name: "",
//   surname: "",
//   email: "",
//   password: "",
// };

// // ==> update user
// createOrUpdateUser(
//   {
//     email: "user@mail.com",
//     password: "password123",
//   },
//   userAlice
// );

// // ==> create user
// createOrUpdateUser(
//   {
//     email: "user@mail.com",
//     password: "password123",
//   },
//   userDefault
// );
