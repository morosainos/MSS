alter table maritime.student add sEmail TEXT;
alter table maritime.student add sPhone TEXT;
alter table maritime.student add sCertiID TEXT;
alter table maritime.student add sNation TEXT;
alter table maritime.student alter sID type BIGINT;

UPDATE maritime.student SET sEmail = 'morosainos@163.com',sPhone = '15542421136',sCertiID = '210281199510243045', sNation = '满' where sId = 4;
UPDATE maritime.student SET sEmail = 'aaa@qq.com',sPhone = '13103030223',sCertiID = 'xx1234567890121234', sNation = '汉' where sId = 1;
UPDATE maritime.student SET sEmail = 'bbb@gmail.com', sNation = '汉' where sId = 2;
UPDATE maritime.student SET sEmail = 'ccc@qq.com', sNation = '汉' where sId = 3;
