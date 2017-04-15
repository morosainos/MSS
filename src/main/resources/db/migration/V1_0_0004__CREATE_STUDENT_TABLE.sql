CREATE TABLE maritime.student 
( 
	sId INTEGER NOT NULL, 
	sName TEXT NOT NULL,
	sSex CHAR(1),	
	sNumber BIGINT NOT NULL, 
	sPassword TEXT NOT NULL,
	is_active BOOLEAN NOT NULL, 
	sGrade INTEGER NOT NULL,
	sAcademy INTEGER NOT NULL,
	sMajor INTEGER NOT NULL,
	sClass INTEGER NOT NULL,
	sDescription TEXT,
	CONSTRAINT pk_student_id PRIMARY KEY (sId), 
	CONSTRAINT uq_student_number UNIQUE (sNumber),
	CONSTRAINT fk_student_academy_ac_id FOREIGN KEY (sAcademy) REFERENCES maritime.academy(aId),
	CONSTRAINT fk_student_major_mj_id FOREIGN KEY (sMajor) REFERENCES maritime.major(mId),
	CONSTRAINT fk_student_class_cl_id FOREIGN KEY (sClass) REFERENCES maritime.class(cId)
);