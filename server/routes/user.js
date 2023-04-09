
const user = require('../api/controllers/user')

module.exports = (app)=>{
app.post('/addUser',user.addUser)
app.post('/getUser',user.getUser)
app.post('/')

}