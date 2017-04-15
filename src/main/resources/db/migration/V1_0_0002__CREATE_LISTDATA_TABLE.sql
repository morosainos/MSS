CREATE TABLE maritime.listdata
( 
	ldId INTEGER NOT NULL, 
	ldListID INTEGER NOT NULL,
	ldValue TEXT NOT NULL,
	ldCode TEXT NOT NULL,
	ldOrder INTEGER NOT NULL,
	ldDescription TEXT,
	is_active BOOLEAN NOT NULL, 
	is_visible BOOLEAN NOT NULL,
	CONSTRAINT pk_listdata_id PRIMARY KEY (ldId), 
	CONSTRAINT fk_listdata_listid_ls_id FOREIGN KEY (ldListID) REFERENCES maritime.list(lsId)
);