CREATE TABLE maritime.course 
( 
	coId INTEGER NOT NULL, 
	coName TEXT NOT NULL,	
	coNumber BIGINT NOT NULL, 
	coTeacher1 INTEGER,
	coTeacher2 INTEGER,
	is_active BOOLEAN NOT NULL, 
	coAcademy INTEGER,
	coCategory INTEGER NOT NULL,
	coType INTEGER,
	coPoint DOUBLE NOT NULL,
	coHour INTEGER NOT NULL,
	coDescription TEXT,
	last_update_user TEXT,
	last_update_dt TIMESTAMP,
	CONSTRAINT pk_course_id PRIMARY KEY (coId), 
	CONSTRAINT uq_course_number UNIQUE (coNumber),
	CONSTRAINT fk_course_teacher1_teacher_id FOREIGN KEY (coTeacher1) REFERENCES maritime.teacher(tId),
	CONSTRAINT fk_course_teacher2_teacher_id FOREIGN KEY (coTeacher2) REFERENCES maritime.teacher(tId),
	CONSTRAINT fk_course_academy_ac_id FOREIGN KEY (coAcademy) REFERENCES maritime.academy(aId),
	CONSTRAINT fk_course_category_cg_id FOREIGN KEY (coCategory) REFERENCES maritime.listdata(ldId),
	CONSTRAINT fk_course_type_ld_id FOREIGN KEY (coType) REFERENCES maritime.listdata(ldId)
);