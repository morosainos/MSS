alter table maritime.teacher add tEmail TEXT;
alter table maritime.teacher add tPhone TEXT;
alter table maritime.teacher add tCertiID TEXT;
alter table maritime.teacher add tNation TEXT;
alter table maritime.teacher alter tID type BIGINT;

UPDATE maritime.teacher SET tEmail = 'admin@admin.com',tPhone = '12345678901', tNation = '汉' where tId = 1;
UPDATE maritime.teacher SET tEmail = 'flower@ab.com', tNation = '汉' where tId = 2;
UPDATE maritime.teacher SET tEmail = 'ketch@sohu.com', tNation = '汉' where tId = 3;
