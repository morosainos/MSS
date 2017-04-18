CREATE TABLE maritime.score
( 
	sId INTEGER NOT NULL, 
	sEid INTEGER NOT NULL,
	sSid INTEGER NOT NULL,
	score TEXT NOT NULL,
	point REAL,
	is_active BOOLEAN NOT NULL,
	sDescription TEXT,
	last_update_user TEXT,
	last_update_dt TIMESTAMP,
	CONSTRAINT pk_score_id PRIMARY KEY (sId), 
	CONSTRAINT fk_score_eid_exam_id FOREIGN KEY (sEid) REFERENCES maritime.examination(eId),
	CONSTRAINT fk_score_sid_student_id FOREIGN KEY (sSid) REFERENCES maritime.student(sId)
);