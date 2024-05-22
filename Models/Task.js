class Task {
    constructor(id, name, description, completed, idUser, idTag) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.idUser = idUser;
        this.idTag = idTag;
    }
}

module.exports = Task;