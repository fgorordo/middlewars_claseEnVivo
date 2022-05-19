const admins = ['Ada', 'Greta', 'Vim', 'Tim']
function checkAdmin (req, res, next) {
 admins.includes(req.query.user) ? next() : res.send(req.query.user + ' no tienes los privilegios para ingresar')
}

module.exports = checkAdmin