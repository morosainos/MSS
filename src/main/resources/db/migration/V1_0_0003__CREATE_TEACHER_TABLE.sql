CREATE TABLE maritime.teacher 
( 
	tId INTEGER NOT NULL, 
	tName TEXT NOT NULL,
	tSex CHAR(1),
	tNumber BIGINT NOT NULL, 
	tPassword TEXT NOT NULL,
	is_active BOOLEAN NOT NULL, 
	tRole INTEGER NOT NULL,
	tDescription TEXT,
	CONSTRAINT pk_teacher_id PRIMARY KEY (tId), 
	CONSTRAINT uq_teacher_number UNIQUE (tNumber),
	CONSTRAINT fk_teacher_role_ld_id FOREIGN KEY (tRole) REFERENCES maritime.listdata(ldId)
);