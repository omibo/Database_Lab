-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;


-- ************************************** users

CREATE TABLE users
(
 email     uuid NOT NULL,
 firstname varchar(20) NOT NULL,
 lastname  varchar(30) NOT NULL,
 password  varchar(20) NOT NULL,
 phoneNum  char(9) NULL,
 CONSTRAINT PK_user PRIMARY KEY ( email )
);

-- ************************************** occurrence_happens

CREATE TABLE occurrence_happens
(
 occ_id      varchar(10) NOT NULL,
 email       uuid NOT NULL,
 description varchar(50) NOT NULL,
 occ_time    time NOT NULL,
 occ_date    date NOT NULL,
 CONSTRAINT PK_occurrence_happens PRIMARY KEY ( occ_id, email ),
 CONSTRAINT FK_87 FOREIGN KEY ( email ) REFERENCES users ( email )
);

CREATE INDEX fkIdx_88 ON occurrence_happens
(
 email
);

-- ************************************** entrance_records

CREATE TABLE entrance_records
(
 entranceID char(10) NOT NULL,
 browser    varchar(20) NOT NULL,
 ip         varchar(16) NOT NULL,
 ent_time   time NOT NULL,
 ent_date   date NOT NULL,
 email      uuid NOT NULL,
 CONSTRAINT PK_entrance_records PRIMARY KEY ( entranceID ),
 CONSTRAINT FK_70 FOREIGN KEY ( email ) REFERENCES users ( email )
);

CREATE INDEX fkIdx_71 ON entrance_records
(
 email
);

-- ************************************** bank_account

CREATE TABLE bank_account
(
 shaba_num char(24) NOT NULL,
 email     uuid NOT NULL,
 bank_name varchar(20) NOT NULL,
 firstname varchar(20) NOT NULL,
 lastname  varchar(20) NOT NULL,
 CONSTRAINT PK_bank_account PRIMARY KEY ( shaba_num, email ),
 CONSTRAINT FK_58 FOREIGN KEY ( email ) REFERENCES users ( email )
);

CREATE INDEX fkIdx_59 ON bank_account
(
 email
);

-- ************************************** financial_data

CREATE TABLE financial_data
(
 financeID         varchar(20) NOT NULL,
 inventory         int NULL,
 last_month_income int NULL,
 email             uuid NOT NULL,
 CONSTRAINT PK_financial_data PRIMARY KEY ( financeID ),
 CONSTRAINT FK_39 FOREIGN KEY ( email ) REFERENCES users ( email )
);

CREATE INDEX fkIdx_40 ON financial_data
(
 email
);

-- ************************************** deposit

CREATE TABLE deposit
(
 depositID  varchar(10) NOT NULL,
 financeID  varchar(20) NOT NULL,
 dep_time   time NOT NULL,
 recieptNum varchar(10) NOT NULL,
 status     varchar(10) NOT NULL,
 amount     int NOT NULL,
 CONSTRAINT PK_deposit PRIMARY KEY ( depositID, financeID ),
 CONSTRAINT FK_48 FOREIGN KEY ( financeID ) REFERENCES financial_data ( financeID )
);

CREATE INDEX fkIdx_49 ON deposit
(
 financeID
);

-- ************************************** employer

CREATE TABLE employer
(
 email uuid NOT NULL,
 CONSTRAINT PK_employer PRIMARY KEY ( email ),
 CONSTRAINT FK_27 FOREIGN KEY ( email ) REFERENCES users ( email )
);

CREATE INDEX fkIdx_28 ON employer
(
 email
);

-- ************************************** freelancer

CREATE TABLE freelancer
(
 email uuid NOT NULL,
 CONSTRAINT PK_freelancer PRIMARY KEY ( email ),
 CONSTRAINT FK_30 FOREIGN KEY ( email ) REFERENCES users ( email )
);

CREATE INDEX fkIdx_31 ON freelancer
(
 email
);

-- ************************************** company

CREATE TABLE company
(
 "id"           varchar(20) NOT NULL,
 email        uuid NOT NULL,
 name         varchar(30) NOT NULL,
 phoneNum     varchar(11) NULL,
 LinkedInPage varchar(60) NULL,
 CONSTRAINT PK_company PRIMARY KEY ( "id", email ),
 CONSTRAINT FK_96 FOREIGN KEY ( email ) REFERENCES employer ( email )
);

CREATE INDEX fkIdx_97 ON company
(
 email
);

-- ************************************** project

CREATE TABLE project
(
 projectID     char(10) NOT NULL,
 email         uuid NOT NULL,
 title         varchar(40) NOT NULL,
 subject       varchar(40) NULL,
 type          varchar(30) NULL,
 status        varchar(20) NULL,
 budget        int NULL,
 deadline_time time NULL,
 deadline_date date NULL,
 CONSTRAINT PK_project PRIMARY KEY ( projectID, email ),
 CONSTRAINT FK_167 FOREIGN KEY ( email ) REFERENCES employer ( email )
);

CREATE INDEX fkIdx_168 ON project
(
 email
);

-- ************************************** works_in

CREATE TABLE works_in
(
 projectID        char(10) NOT NULL,
 employer_email   uuid NOT NULL,
 work_time        time NOT NULL,
 work_date        date NOT NULL,
 money            int NOT NULL,
 working_days     int NOT NULL,
 status           varchar(20) NOT NULL,
 freelancer_email uuid NOT NULL,
 CONSTRAINT PK_works_in PRIMARY KEY ( projectID, employer_email ),
 CONSTRAINT FK_176 FOREIGN KEY ( projectID, employer_email ) REFERENCES project ( projectID, email ),
 CONSTRAINT FK_193 FOREIGN KEY ( freelancer_email ) REFERENCES freelancer ( email )
);

CREATE INDEX fkIdx_177 ON works_in
(
 projectID,
 employer_email
);

CREATE INDEX fkIdx_194 ON works_in
(
 freelancer_email
);

-- ************************************** has_request

CREATE TABLE has_request
(
 projectID        char(10) NOT NULL,
 employer_email   uuid NOT NULL,
 freelancer_email uuid NOT NULL,
 req_time         time NOT NULL,
 req_date         date NOT NULL,
 money            int NOT NULL,
 working_days     int NOT NULL,
 CONSTRAINT PK_works_in_clone PRIMARY KEY ( projectID, employer_email, freelancer_email ),
 CONSTRAINT FK_150_clone FOREIGN KEY ( projectID, employer_email ) REFERENCES project ( projectID, email ),
 CONSTRAINT FK_196 FOREIGN KEY ( freelancer_email ) REFERENCES freelancer ( email )
);

CREATE INDEX fkIdx_151_clone ON has_request
(
 projectID,
 employer_email
);

CREATE INDEX fkIdx_197 ON has_request
(
 freelancer_email
);

-- ************************************** freelancer_resume

CREATE TABLE freelancer_resume
(
 res_id        uuid NOT NULL,
 email         uuid NOT NULL,
 personal_data varchar(500) NOT NULL,
 descriptions  varchar(500) NOT NULL,
 file_path     varchar(50) NOT NULL,
 CONSTRAINT PK_resume PRIMARY KEY ( res_id, email ),
 CONSTRAINT FK_104 FOREIGN KEY ( email ) REFERENCES freelancer ( email )
);

CREATE INDEX fkIdx_105 ON freelancer_resume
(
 email
);

-- ************************************** work

CREATE TABLE work
(
 company        varchar(20) NOT NULL,
 responsibility varchar(60) NOT NULL,
 res_id         uuid NOT NULL,
 email          uuid NOT NULL,
 start_time     time NULL,
 end_time       time NULL,
 CONSTRAINT PK_work PRIMARY KEY ( company, responsibility, res_id, email ),
 CONSTRAINT FK_113 FOREIGN KEY ( res_id, email ) REFERENCES freelancer_resume ( res_id, email )
);

CREATE INDEX fkIdx_114 ON work
(
 res_id,
 email
);

-- ************************************** education

CREATE TABLE education
(
 university varchar(20) NOT NULL,
 major      varchar(30) NOT NULL,
 res_id     uuid NOT NULL,
 email      uuid NOT NULL,
 start_time time NULL,
 end_time   time NULL,
 CONSTRAINT PK_work_clone PRIMARY KEY ( university, major, res_id, email ),
 CONSTRAINT FK_113_clone FOREIGN KEY ( res_id, email ) REFERENCES freelancer_resume ( res_id, email )
);

CREATE INDEX fkIdx_114_clone ON education
(
 res_id,
 email
);

-- ************************************** skill

CREATE TABLE skill
(
 name   varchar(40) NOT NULL,
 res_id uuid NOT NULL,
 email  uuid NOT NULL,
 rating double precision NULL,
 CONSTRAINT PK_work_clone_clone PRIMARY KEY ( name, res_id, email ),
 CONSTRAINT FK_113_clone_clone FOREIGN KEY ( res_id, email ) REFERENCES freelancer_resume ( res_id, email )
);

CREATE INDEX fkIdx_114_clone_clone ON skill
(
 res_id,
 email
);

