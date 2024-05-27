const tagRepository = require('../Repository/TagRepository');
const userRepository = require('../Repository/UserRepository');

class TagService {
    createDefaultTag(idUser, callback) {
        tagRepository.createDefaultTag(idUser, callback);
    }

    getAllTag(idUser, callback) {
        tagRepository.getAllTag(idUser, callback);
    }

    addTag(username, name, callback) {
        console.log(username)
        userRepository.getUserById(username, (error, user) => {
            if (error) {
                return callback(error);
            }
            if (!user) {
                return callback(new Error('User not found'));
            }
            tagRepository.addTag(username, name, callback);
        });
    }

    addTagByIdUser(name, idUser, callback) {
        tagRepository.addTagByIdUser(name, idUser, callback);
    }

    deleteTag(idUser, name, callback) {
        tagRepository.deleteTag(idUser, name, callback);
    }
}

module.exports = new TagService();
