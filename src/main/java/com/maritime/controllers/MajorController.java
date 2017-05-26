package com.maritime.controllers;

import com.maritime.common.exception.MSSException;
import com.maritime.models.Major;
import com.maritime.services.MajorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MajorController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(MajorController.class);

    @Autowired
    private MajorService majorService;

    @ResponseBody
    @RequestMapping(value = "/major/loadMajorByAcademy", method = RequestMethod.POST)
    public List<Major> selectAllAcademy(@RequestBody Integer aid) throws MSSException {
        List<Major> content = majorService.selectByAcademy(aid);
        return majorService.selectByAcademy(aid);
    }

}
