const user = require('../models/user.js');
 const User = require('../models/user.js')

const addUser = async (req, res) => {
    try {
        const user = new User(req.body)
        console.log(req.body);
        user.save(user).then((user) => {
            res.status(200).json({
                statusCode: 200,
                message: 'user created successfully',
                result: user
            })
        })
            .catch((err) => {
                res.status(500).json({
                    statusCode: 500,
                    message: err
                })
            })
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err
        })
    }
}

const getUser = async (req, res) => {
    try {
     //   if (req.body._id) {
            user.find().then((user) => {
                if (!user) {
                    res.status(200).json({
                        statusCode: 200,
                        message: "User not found"
                    })
                } else {
                    res.status(200).json({
                        statusCode: 200,
                        message: "User found",
                        userData: user
                    })
                }
            })
       // }
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error
        })
    }
}

const deleteUser = async (req, res) => {

    try {
        if (req.body._id) {
            user.deleteOne({ "_id": req.body._id }).then((user) => {
                if (!user) {
                    res.status(200).json({
                        statusCode: 200,
                        message: "User not found"
                    })
                } else {
                    res.status(200).json({
                        statusCode: 200,
                        message: "User deleted successfully",
                        userData: user
                    })
                }
            })
        }
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error
        })
    }
}

exports.addUser = addUser;
exports.getUser = getUser;
exports.deleteUser = deleteUser;