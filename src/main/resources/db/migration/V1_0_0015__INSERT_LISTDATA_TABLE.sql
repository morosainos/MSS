DELETE FROM maritime.listdata;
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (1,1,'管理员','admin',1,'Have admin privilige to change teacher/student/score',true,false);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (2,1,'教师','normal',2,'Have privilige to change score',true,false);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (3,1,'人事','person',3,'Have privilige to change teacher/student',true,false);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (4,2,'必修课','required',1,'Required courses',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (5,2,'限选课','limited',2,'Limited courses',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (6,2,'任选课','optional',3,'Optional courses',true,true);	
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (7,3,'测试','test',1,'normal test',true,true);	
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (8,3,'期中','middletest',2,'Midterm exam',true,true);	
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (9,3,'期末','finaltest',3,'Final exam',true,true);	
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (10,3,'补考','makeuptest',4,'Make up exam',true,true);		
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (11,3,'考查','review',5,'Review test',true,true);	
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (12,4,'笔试','paper',1,'Paper test',true,true);	
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (13,4,'口试','oral',2,'Oral test',true,true);	
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (14,4,'实物展示','object',3,'Physical display',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (15,4,'考查','review',4,'Review test',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (16,5,'创新类','innovation',1,'Innovation course',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (17,5,'综合素质类','quality',2,'Comprehensive quality course',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (18,5,'经管法类','economics',3,'Economics,administration and law course',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (19,5,'理工类','science',4,'Science and engineering course',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (20,6,'航海类','navigation',4,'Student navigation related',true,true);
INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (21,6,'非航海类','non-navigation',4,'Student non-navigation related',true,true);