const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://errol:aUdi0o0o@cluster0.6ps2d.mongodb.net/tr', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});
 
//Connecting Node and MongoDB
require('./course.model');