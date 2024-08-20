// export const home = (req, res) => {
//     res.send('Welcome to the Home Page');
//   };
  
//   export const search = (req, res) => {
//     const query = req.query.q || 'No query provided';
//     res.send(`Search query: ${query}`);
//   };
  

export const home = (req, res) => {
  res.send('Welcome to the Home Page');
};

export const search = (req, res) => {
  const query = req.query.q || 'No query provided';
  res.send(`Search query: ${query}`);
};
