alter table maritime.teacher add tAcademy INTEGER;
alter table maritime.teacher add tMajor INTEGER;
alter table maritime.teacher add tClass INTEGER;
alter table maritime.teacher add CONSTRAINT fk_teacher_academy_ac_id FOREIGN KEY (tAcademy) REFERENCES maritime.academy(aId);
alter table maritime.teacher add CONSTRAINT fk_teacher_major_mj_id FOREIGN KEY (tMajor) REFERENCES maritime.major(mId);
alter table maritime.teacher add CONSTRAINT fk_teacher_class_cl_id FOREIGN KEY (tClass) REFERENCES maritime.class(cId);

UPDATE maritime.teacher SET tAcademy = 1,tMajor = 4,tClass = 1 where tId = 2;
UPDATE maritime.teacher SET tAcademy = 3,tMajor = 14,tClass = 2 where tId = 3;
UPDATE maritime.teacher SET tAcademy = 3,tMajor = 14,tClass = 2 where tId = 4;
UPDATE maritime.teacher SET tAcademy = 3,tMajor = 14,tClass = 3 where tId = 5;
