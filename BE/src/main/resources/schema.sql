create table if not exists user (
    id int identity,
    name VARCHAR (64)
);

insert into user (name) values ('hyunjun');