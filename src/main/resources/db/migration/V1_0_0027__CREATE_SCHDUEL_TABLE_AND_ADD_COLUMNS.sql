alter table maritime.course add coExamType INTEGER;
alter table maritime.course add coWeek TEXT;
alter table maritime.point add ppoint REAL;
alter table maritime.course add CONSTRAINT fk_course_examtype_ld_id FOREIGN KEY (coExamType) REFERENCES maritime.listdata(ldId);

CREATE TABLE maritime.schedule
( 
	sId SERIAL NOT NULL, 
	sCid INTEGER NOT NULL,
	sTerm TEXT NOT NULL,
	sWeek INTEGER NOT NULL,
	sSection INTEGER NOT NULL,
	sPositon TEXT,
	is_active BOOLEAN NOT NULL,
	sDescription TEXT,
	last_update_user TEXT,
	last_update_dt TIMESTAMP,
	CONSTRAINT pk_schedule_id PRIMARY KEY (sId), 
	CONSTRAINT fk_schedule_cid_course_id FOREIGN KEY (sCid) REFERENCES maritime.course(coId),
	CONSTRAINT fk_schedule_week_ld_id FOREIGN KEY (sWeek) REFERENCES maritime.listdata(ldId),
	CONSTRAINT fk_schedule_section_ld_id FOREIGN KEY (sSection) REFERENCES maritime.listdata(ldId)
);

INSERT INTO maritime.list (lsId,lsName,lsDescription,is_active)
VALUES (7,'CourseExamType','CourseExamType',true);
INSERT INTO maritime.list (lsId,lsName,lsDescription,is_active)
VALUES (8,'Week','7 days for a week',true);
INSERT INTO maritime.list (lsId,lsName,lsDescription,is_active)
VALUES (9,'Section','5 sections for a day',true);

INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (22,7,'考试','paper',1,'Exam for course score',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (23,7,'考查','review',2,'Review for course score',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (24,8,'星期一','1',1,'Monday',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (25,8,'星期二','2',2,'Teusday',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (26,8,'星期三','3',3,'Wednesday',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (27,8,'星期四','4',4,'Thursday',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (28,8,'星期五','5',5,'Friday',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (29,8,'星期六','6',6,'Saturday',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (30,8,'星期日','7',7,'Sunday',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (31,9,'1-2节','1-2',1,'1-2节08:00-09:35',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (32,9,'3-4节','3-4',2,'3-4节10:00-11:35',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (33,9,'5-6节','5-6',3,'5-6节13:30-15:05',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (34,9,'7-8节','7-8',4,'7-8节15:30-17:05',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (35,9,'9-10节','9-10',5,'9-10节18:00-19:35',true,true);
