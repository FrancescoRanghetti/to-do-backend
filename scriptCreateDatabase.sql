create database toDoList;
use toDoList;

create table user
(
    id       int          not null auto_increment primary key,
    name     varchar(100) not null,
    lastName varchar(100) not null,
    username varchar(100) not null,
    password varchar(100) not null
);

create table tag
(
    id     int          not null auto_increment primary key,
    name   varchar(100) not null,
    idUser int          not null,
    foreign key (idUser) references user (id)
);

create table list
(
    id     int          not null auto_increment primary key,
    name   varchar(100) not null,
    idUser int          not null,
    foreign key (idUser) references user (id)
);

create table task
(
    id          int          not null auto_increment primary key,
    name        varchar(500) not null,
    description varchar(1000),
    complete    boolean,
    idUser      int          not null,
    idTag       int          not null,
    idList      int          not null,
    foreign key (idUser) references user (id),
    foreign key (idTag) references tag (id),
    foreign key (idList) references list (id) ON DELETE CASCADE
);
