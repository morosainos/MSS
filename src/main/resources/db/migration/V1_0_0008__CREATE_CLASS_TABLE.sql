CREATE TABLE maritime.class 
( 
	cId INTEGER NOT NULL, 
	cNum INTEGER NOT NULL,
	cMajor INTEGER NOT NULL,
	cGrade INTEGER NOT NULL,
	cYear INTEGER NOT NULL,
	cAmount INTEGER NOT NULL,
	cDescription TEXT,
	is_active BOOLEAN NOT NULL, 
	last_update_user TEXT,
	last_update_dt TIMESTAMP,
	CONSTRAINT pk_class_id PRIMARY KEY (mId), 
	CONSTRAINT fk_class_major_major_id FOREIGN KEY (cMajor) REFERENCES maritime.major(mId)
);