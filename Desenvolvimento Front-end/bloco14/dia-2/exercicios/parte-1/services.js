const randomNumber = () => Math.floor(Math.random() * 100);

const toUpperCase = (str) => str.toUpperCase();

const firstIndex = (str) => str[0];

const concatStr = (str1, str2) => str1 + str2;

// const fetchDog = async () => {
//   try {
//     const url = 'https://dog.ceo/api/breeds/image/random';
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

const fetchDog = () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  return fetch(url).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
};

module.exports = { randomNumber, toUpperCase, firstIndex, concatStr, fetchDog };
