CREATE TABLE maritime.scmapping
( 
	pId INTEGER NOT NULL, 
	pCid INTEGER NOT NULL,
	pSid INTEGER NOT NULL,
	start_dt TIMESTAMP,
	finish_dt TIMESTAMP,
	pTerm TEXT NOT NULL,
	is_active BOOLEAN NOT NULL, 
	pDescription TEXT,
	last_update_user TEXT,
	last_update_dt TIMESTAMP,
	CONSTRAINT pk_mapping_id PRIMARY KEY (pId), 
	CONSTRAINT fk_mapping_cid_course_id FOREIGN KEY (pCid) REFERENCES maritime.course(coId),
	CONSTRAINT fk_mapping_sid_student_id FOREIGN KEY (pSid) REFERENCES maritime.student(sId)
);