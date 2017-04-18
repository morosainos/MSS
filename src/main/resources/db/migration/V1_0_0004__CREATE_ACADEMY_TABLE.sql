CREATE TABLE maritime.academy 
( 
	aId INTEGER NOT NULL, 
	aName TEXT NOT NULL,
	aDescription TEXT,
	is_active BOOLEAN NOT NULL, 
	last_update_user TEXT,
	last_update_dt TIMESTAMP,
	CONSTRAINT pk_academy_id PRIMARY KEY (aId), 
	CONSTRAINT uq_academy_name UNIQUE (aName)
);