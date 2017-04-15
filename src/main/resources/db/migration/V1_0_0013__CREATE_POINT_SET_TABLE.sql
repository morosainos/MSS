CREATE TABLE maritime.pointset
( 
	psId INTEGER NOT NULL, 
	psSetId INTEGER NOT NULL,
	psTotal DOUBLE,
	psMax DOUBLE,
	psMin DOUBLE,
	psCategory INTEGER NOT NULL,
	psType INTEGER NOT NULL,
	is_active BOOLEAN NOT NULL,
	psDescription TEXT,
	last_update_user TEXT,
	last_update_dt TIMESTAMP,
	CONSTRAINT pk_pointset_id PRIMARY KEY (psId), 
	CONSTRAINT fk_pointset_cg_ld_id FOREIGN KEY (psCategory) REFERENCES maritime.listdata(ldId),
	CONSTRAINT fk_pointset_type_ld_id FOREIGN KEY (psType) REFERENCES maritime.listdata(ldId)
);