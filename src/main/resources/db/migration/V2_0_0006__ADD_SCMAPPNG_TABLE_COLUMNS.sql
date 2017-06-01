alter table maritime.schedule add frequency INTEGER;
alter table maritime.schedule add CONSTRAINT fk_map_freq_ld_id FOREIGN KEY (frequency) REFERENCES maritime.listdata(ldid);

INSERT INTO maritime.list (lsId,lsName,lsDescription,is_active)
VALUES (10,'CourseFreq','Frequency for course',true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (36,10,'单周','single-week',1,'Single week freq',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (37,10,'双周','double-week',2,'Double week freq',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (38,10,'每周','each-week',3,'Each week freq',true,true);