var appRouter = function(app) {

  //Example
  app.get("/", function(req, res) {
    res.send("We Know The Way :)");
  });

  //Example more
  app.get("/account", function(req, res) {

    //Mock data
    var userMock = {
      "username": "theRock",
      "password": "notAllowed",
      "instagram": "theRock_oficial"
    }

    //Check data
    if (!req.query.username) {
      return res.send( {"status": "error", "message": "missing username"} );

    } else if (req.query.username != userMock.username) {
        return res.send( {"status": "error", "message": "wrong username"} );

    } else {
        return res.send(userMock);
    }
  });

}

module.exports = appRouter;
