const controller = {
  index : (req, res) => {
    console.log(req)
    res.render('index')
  },
  adminAcess: (req, res) => {
    res.send('Hola admin :' + req.query.user)
  }
}

module.exports = controller;