package com.maritime.dao;

import com.maritime.BaseTester;
import com.maritime.models.Academy;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.assertTrue;

/**
 * Created by Moros on 2017/4/19.
 */

@Transactional
public class AcademyMapperTest extends BaseTester{

    private static final Logger logger = Logger.getLogger(AcademyMapperTest.class);

    @Autowired
    private AcademyMapper academyMapper;

    private Integer id = 1;

    @Test
    public void testAcademyMapperSelect() {
        Academy academy = new Academy();
        academy = academyMapper.selectByPrimaryKey(id);
        assertTrue("The testAcademyMapperSelect successful", academy.getAname() != null);
    }

}
