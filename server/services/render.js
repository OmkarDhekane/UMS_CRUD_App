const axios = require("axios");

exports.homeRoutes = (req, res) => {
  //make get request to apic/users

  //axios is able to send GET request to our database and store data in 'data' variable
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      // console.log(response.data); //get data to console
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", {
      params: { id: req.query.id },
    })
    .then(function (userData) {
      res.render("update_user", { user: userData.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
