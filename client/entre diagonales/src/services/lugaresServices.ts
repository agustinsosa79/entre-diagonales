




export const getLugares = () => {
  return fetch('http://localhost:4000/api/lugares')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching lugares:', error);
      throw error;
    });
}