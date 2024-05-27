class Task {
    constructor(id, name, description, completed, idUser, idTag, idList) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.idUser = idUser;
        this.idTag = idTag;
        this.idList = idList;
    }
}

module.exports = Task;