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
    language varchar(10) not null,
    tag varchar(50) not null,
    title varchar(80) not null,
    post_desc varchar(200) not null,
    content varchar(16000) not null,
    created_at date,
    updated_at timestamp default current_timestamp on update current_timestamp,
    primary key(id)
    index idx_tag (tag)
);

-- adds post images to posts based on the post tag
create table postImages(
    id int not null auto_increment,
    tag varchar(50) not null,
    img varchar(80) not null,
    primary key (id),
    foreign key (tag) references post(tag)
);

create table member(
    id int not null unique auto_increment,
    academic_id varchar(25) not null,
    fullname_en varchar(60) not null,
    fullname_gr varchar(60) not null,
    school varchar(120) not null,
    subscription Boolean not null default true,
    subscription_date date,
    end_date date default null,
    role varchar(20) not null default "Member",
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    primary key (academic_id)
);

create table user(
    id int not null auto_increment,
    email varchar(254) not null,
    password varchar(80) not null,
    academic_id varchar(25) not null,
    role_id int not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    primary key (id),
    foreign key (role_id) references role(id),
    foreign key (academic_id) references member(academic_id)
);

create table memberImages(
    id int not null auto_increment,
    member_id varchar(25) not null,
    img varchar(80) not null,
    caption varchar(80),
    primary key (id),
    foreign key (member_id) references member(academic_id)
);


create table sponsor(
    id int not null auto_increment,
    sponsor_name varchar(50) not null,
    sponsor_tier varchar(20) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp,
    primary key (id)
);


create table sponsorImages(
    id int not null auto_increment,
    sponsor_id int not null,
    image varchar(100) not null,
    primary key(id),
    foreign key (sponsor_id) references sponsor(id)
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

create table category(
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
    user_id int not null,
    expires long not null,
    data varchar(254),
    primary key (session_id),
    foreign key (user_id) references user(id) 
)