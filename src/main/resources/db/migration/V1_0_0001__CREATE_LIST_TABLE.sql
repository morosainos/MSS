CREATE TABLE maritime.list 
( 
	lsId INTEGER NOT NULL, 
	lsName TEXT NOT NULL,
	lsDescription TEXT,
	is_active BOOLEAN NOT NULL, 
	CONSTRAINT pk_list_id PRIMARY KEY (lsId), 
	CONSTRAINT uq_list_name UNIQUE (lsName)
);