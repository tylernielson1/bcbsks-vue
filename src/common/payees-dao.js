const baseUrl = 'http://localhost:8000/payees';

const queryPayees = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .catch(handleError);
};

function handleError(error) {
  console.error('Payees DAO error');
  return Promise.reject('DAO error. Please try again.');
}

const dao = {
  queryPayees
};

export default dao;
