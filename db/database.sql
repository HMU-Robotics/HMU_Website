drop database HMU_ROBOTICS_CLUB;
create database HMU_ROBOTICS_CLUB;
use HMU_ROBOTICS_CLUB;

create table role(
    id int not null auto_increment,
    name varchar(25) not null,
    primary key (id)
);

create table post(
    id int not null auto_increment,
    title varchar(80) not null,
    desc varchar(80) not null,
    content varchar(1500) not null,
    created_at varchar(24),
    updated_at timestamp default current_timestamp on update current_timestamp,
    primary key(id)
);

create table postImages(
    id int not null auto_increment,
    post_id int not null,
    img varchar(80) not null,
    primary key (id),
    foreign key (post_id) references post(id)
);



create table user(
    id int not null auto_increment,
    email varchar(254) not null,
    first_name varchar(50) not null ,
    last_name varchar(50) not null,
    confirmed_at timestamp,
    password varchar(80),
    academic_id varchar(25) not null,
    school varchar(120) not null,
    subscription Boolean not null,
    subscription_date varchar(150),
    role_id int not null,
    end_date timestamp,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    primary key (id),
    foreign key (role_id) references role(id)
);

create table userImages(
    id int not null auto_increment,
    user_id int not null,
    img varchar(80) not null,
    caption varchar(80),
    primary key (id),
    foreign key (user_id) references user(id)
);

create table reservation(
    id int not null auto_increment,
    user_id int not null,
    start_date timestamp not null ,
    end_date timestamp not null,
    created_at timestamp default current_timestamp,
    primary key (id),
    foreign key (user_id) references user(id)
);

create table category
(
    id int not null auto_increment,
    name varchar(80) not null,
    primary key (id)
);

create table item(
    id int not null auto_increment,
    name text not null ,
    image longblob,
    category_id int not null,
    description varchar(250),
    code varchar(36) not null,
    status enum('available', 'unavailable'),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    primary key (id),
    foreign key (category_id) references category(id)
);

create table item_reservation(
    item_id int not null,
    reservation_id int not null,
    primary key (item_id, reservation_id),
    foreign key (item_id) references item(id),
    foreign key (reservation_id) references reservation(id)
);


create table session(
    session_id int not null auto_increment,
    member_id int not null,
    expires long not null,
    data varchar(254),
    primary key (session_id),
    foreign key (member_id) references user(id) 
)