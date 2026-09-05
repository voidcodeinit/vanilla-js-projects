//export default getUser; Cannot access 'getUser' before initialization
const URL = 'https://randomuser.me/api/';
/** Handles get user. */
const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // destructure
  //read about this destructuring!!
  const person = data.results[0];
  const { phone, email, dob:{age} } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  // const {
  //   dob: { age },
  // } = person;
  const {
    street: { number, name },
  } = person.location;
  
  return {
    image,
    phone,
    email,
    password,
    age,
    //craete street and name property
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};
export default getUser;



