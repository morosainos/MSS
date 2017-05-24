delete from maritime.teacher;  
delete from maritime.student;
delete from maritime.class;

CREATE SEQUENCE id_seq  
START WITH 1
INCREMENT BY 1  
NO MINVALUE  
NO MAXVALUE  
CACHE 1;  

alter table maritime.teacher alter column tID set default nextval('id_seq');  
alter table maritime.student alter column sID set default nextval('id_seq');
alter table maritime.score alter column sID set default nextval('id_seq');  
alter table maritime.scmapping alter column pID set default nextval('id_seq');
alter table maritime.examination alter column eID set default nextval('id_seq');
alter table maritime.point alter column pID set default nextval('id_seq');
alter table maritime.class alter column cID set default nextval('id_seq');


INSERT INTO maritime.teacher (tName,tSex,tNumber,tPassword,is_active,tRole,temail,tPhone,tnation)
VALUES ('Admin','男',131440,'202CB962AC59075B964B07152D234B70',true,1,'admin@admin.com',12345678901,'汉');

INSERT INTO maritime.class (cNum,cMajor,cYear,cAmount,is_active,last_update_user,last_update_dt)
VALUES (1,4,2013,24,true,'DBsetup',current_timestamp);	
INSERT INTO maritime.class (cNum,cMajor,cYear,cAmount,is_active,last_update_user,last_update_dt)
VALUES (1,14,2013,30,true,'DBsetup',current_timestamp);		
INSERT INTO maritime.class (cNum,cMajor,cYear,cAmount,is_active,last_update_user,last_update_dt)
VALUES (2,14,2013,28,true,'DBsetup',current_timestamp);	

INSERT INTO maritime.student (sName,sSex,sNumber,sPassword,is_active,sDate,sAcademy,sMajor,sClass,sType,semail,sphone,scertiid,snation)
VALUES ('秦明玉','女',2220131749,'202CB962AC59075B964B07152D234B70',true,'20130901',3,14,3,21,'moroasinos@163.com','15542421136','2102811','满');
