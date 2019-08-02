const baseUrl = 'http://localhost:8000/payees';

const queryPayees = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .catch(handleError);
};

const getById = id => {
  return fetch(`${baseUrl}/${id}`)
    .then(response => {
      if (!response.ok) {
        return Promise.reject({ status: response.status });
      }
      return response.json();
    })
    .catch(handleError);
};

function handleError(error) {
  console.error('Payees DAO error');
  return Promise.reject({ message: 'DAO error. Please try again.', ...error });
}

const dao = {
  queryPayees,
  getById,
};

export default dao;
