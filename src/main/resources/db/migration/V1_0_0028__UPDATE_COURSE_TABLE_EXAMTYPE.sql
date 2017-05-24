update maritime.course set coexamtype = 22;
alter table maritime.course drop coWeek;
alter table maritime.scmapping alter psID type BIGINT;
alter table maritime.score alter ssid type BIGINT;
alter table maritime.point alter psid type BIGINT;