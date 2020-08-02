const models = require("../models");
const shortId = require("shortid");

module.exports = {
  newUser: (req, res) => {
    const { name, postname, mail, username, _password } = req.body;

    models.users
      .findOne({
        where: { name: name, postname: postname },
      })
      .then((find) => {
        if (find)
          res.status(403).json({ result: "L'utilisateur existe deja..." });
        else
          models.users
            .create({
              id: shortId.generate(),
              name: name,
              postname: postname,
              mail: mail,
              username: username,
              _password: _password,
            })
            .then((create) => {
              if (create) res.status(200).json({ create });
            })
            .catch((error) => {
              console.log(error);
              res.status(403).json("something went wrong");
            });
      })
      .catch((error) => {
        console.log(error);
        res.status(403).json("something went wrong");
      });
  },
};
