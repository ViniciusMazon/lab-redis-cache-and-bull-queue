create table transactions (
    id serial primary key,
    name varchar not null,
    value int not null,
    donation_id int references donations(id)
);