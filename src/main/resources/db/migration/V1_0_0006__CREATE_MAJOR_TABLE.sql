CREATE TABLE maritime.major 
( 
	mId INTEGER NOT NULL, 
	mName TEXT NOT NULL,
	mAcademy INTEGER NOT NULL,
	mPointset INTEGER NOT NULL,
	mDescription TEXT,
	is_active BOOLEAN NOT NULL, 
	last_update_user TEXT,
	last_update_dt TIMESTAMP,
	CONSTRAINT pk_major_id PRIMARY KEY (mId), 
	CONSTRAINT fk_major_academy_ac_id FOREIGN KEY (mAcademy) REFERENCES maritime.academy(aId),
	CONSTRAINT fk_major_pointset_ps_id FOREIGN KEY (mPointset) REFERENCES maritime.pointset(psId)
);