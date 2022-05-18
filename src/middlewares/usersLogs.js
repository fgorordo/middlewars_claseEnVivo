const fs = require('fs')
const path = require('path')

const usersLogsPath = path.join(__dirname, '../data/logs/')



function usersLogs (req, res , next) {
  const logText = `${req.method} to => ${req.originalUrl} at:  ${req._startTime}\n` 
  fs.appendFileSync(usersLogsPath + 'usersLogs.txt', logText)
  next()
}


module.exports = usersLogs