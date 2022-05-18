const controller = {
  index : (req, res) => {
    console.log(req)
    res.render('index')
  },
  adminAcess: (req, res) => {
    res.send('Este usuario es admin')
  }
}

module.exports = controller;