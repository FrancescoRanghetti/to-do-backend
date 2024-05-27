const userRepository = require('../Repository/UserRepository');

class UserService {
    createUser(userData, callback) {
        userRepository.createUser(userData, callback);
    }

    getUserById(username, callback) {
        userRepository.getUserById(username, callback);
    }

    loginUser(username, password, callback) {
        userRepository.loginUser(username, password, callback);
    }
}

module.exports = new UserService();
