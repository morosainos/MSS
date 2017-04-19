package com.maritime;

import com.MssApplication;
import com.maritime.dao.AcademyMapper;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = MssApplication.class)
@WebAppConfiguration
public class BaseTester {

}
