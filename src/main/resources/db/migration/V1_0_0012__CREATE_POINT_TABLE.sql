CREATE TABLE maritime.point
( 
	pId INTEGER NOT NULL, 
	pSid INTEGER NOT NULL,
	pCategory INTEGER NOT NULL,
	pType INTEGER NOT NULL,
	is_active BOOLEAN NOT NULL,
	pDescription TEXT,
	last_update_user TEXT,
	last_update_dt TIMESTAMP,
	CONSTRAINT pk_point_id PRIMARY KEY (pId), 
	CONSTRAINT fk_point_sid_student_id FOREIGN KEY (pSid) REFERENCES maritime.student(sId),
	CONSTRAINT fk_point_cg_ld_id FOREIGN KEY (pCategory) REFERENCES maritime.listdata(ldId),
	CONSTRAINT fk_point_type_ld_id FOREIGN KEY (pType) REFERENCES maritime.listdata(ldId)
);