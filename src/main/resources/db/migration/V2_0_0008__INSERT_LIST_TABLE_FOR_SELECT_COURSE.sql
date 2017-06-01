INSERT INTO maritime.list (lsId,lsName,lsDescription,is_active)
VALUES (11,'isCourseSelectable','To judge if current time course select is active',true);

INSERT INTO maritime.listdata (ldId,ldListID,ldValue,ldCode,ldOrder,ldDescription,is_active,is_visible)
VALUES (39,11,'1','1',1,'If 1 then is selectable,0 is not',true,false);