use HMU_ROBOTICS_CLUB;

insert into role(name) values ("admin");
insert into role(name) values ("editor");
insert into role(name) values ("viewer");

/* Member insertion for having an admin user for logging in */

insert into member(language,academic_id,first_name,last_name,school) values ("english","1","admin","HMU","admin");