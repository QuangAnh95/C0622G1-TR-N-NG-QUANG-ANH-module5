drop database if exists spring_2;
create database spring_2;
use spring_2;

create table `role`(
role_id int primary key,
name varchar(45),
is_delete bit default 0
);

create table `user`(
user_name Varchar(50)  primary key,
password Varchar(200),
is_delete bit default 0
);
create table user_role(
user_name Varchar(50) ,
role_id int ,
is_delete bit default 0,
foreign key(user_name) references `user`(user_name),
foreign key(role_id) references `role`(role_id)
);

create table customer_type(
customer_type_id int primary key,
name varchar(100),
is_delete bit default 0
);

create table customer(
customer_id int primary key,
name varchar(100),
is_delete bit default 0,
day_of_birth varchar(100),
gender int,
id_card varchar(12),
email varchar(100),
address varchar(100),
image varchar(500),
phone_number varchar(15),
user_name varchar(50),
foreign key(user_name) references `user`(user_name),
customer_type_id int,
foreign key(customer_type_id) references customer_type(customer_type_id)
);

create table employee(
employee_id int primary key,
name varchar(100),
gender int,
email varchar(100),
address varchar(100),
phone_number varchar(100),
id_card varchar(20),
day_of_birth varchar(20),
image varchar(500),
is_delete Bit default 0);

create table promotion(
promotion_id int primary key,
name varchar(250),
is_delete bit default 0,
image text,
start_time varchar(50),
end_time varchar(50),
detai text,
discount int);

create table pet_type(
pet_type_id int primary key,
name varchar(250));

create table pet(
pet_id int primary key,
is_delete bit default 0,
name varchar(100),
weight varchar(50),
height varchar(50),
color varchar(100),
gender varchar(50),
image varchar(500),
quantity int,
price int,
status int,
pet_type_id int,
foreign key(pet_type_id) references pet_type(pet_type_id),
employee_id int,
foreign key(employee_id) references employee(employee_id),
promotion_id int,
foreign key(promotion_id) references promotion(promotion_id)
);

create table booking_pet(
booking_pet_id int,
is_delete bit default 0,
status bit default 0,
pet_booking_time datetime,
 pet_id int,
foreign key( pet_id) references  pet( pet_id),
customer_id int,
foreign key( customer_id) references  customer( customer_id),
quantity int
);

