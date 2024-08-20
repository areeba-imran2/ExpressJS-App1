// export const getUserProfile = (req, res) => {
//     const userId = req.params.id;
//     res.send(`User Profile for user ID: ${userId}`);
//   };
  

export const getUserProfile = (req, res) => {
  const userId = req.params.id;
  res.send(`User Profile for user ID: ${userId}`);
};
