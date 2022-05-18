const admins = ['Ada', 'Greta', 'Vim', 'Tim']
function checkAdmin (req, res, next) {
 admins.includes(req.query.user) ? next() : res.send('No tienes los privilegios para ingresar')
}

module.exports = checkAdmin