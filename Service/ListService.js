const listRepository = require('../Repository/ListRepository')

class ListService {
    createDefaultList(idUser, callback) {
        listRepository.createDefaultList(idUser, callback);
    }

    getAllList(idUser, callback) {
        listRepository.getAllList(idUser, callback);
    }

    addList(name, idUser, callback) {
        listRepository.addList(name, idUser, callback);
    }

    deleteList(name, idUser, callback) {
        listRepository.deleteList(name, idUser, callback);
    }

    getIdListByName(name, idUser, callback) {
        listRepository.getIdListByName(name, idUser, callback);
    }
}

module.exports = new ListService();
