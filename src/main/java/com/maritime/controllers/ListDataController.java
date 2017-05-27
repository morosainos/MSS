package com.maritime.controllers;

import com.maritime.common.constants.CommonConstants;
import com.maritime.common.exception.MSSException;
import com.maritime.models.Examination;
import com.maritime.models.ListData;
import com.maritime.services.ExaminationService;
import com.maritime.services.ListDataService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ListDataController extends BaseController{
    /**
     * lOGGER
     */
    private static final Logger logger = LoggerFactory.getLogger(ListDataController.class);

    @Autowired
    private ListDataService listDataService;

    @ResponseBody
    @RequestMapping(value = "/listdata/selectByListID", method = RequestMethod.POST)
    public List<ListData> selectByListID(@RequestBody Integer ldlistid) throws MSSException {
        return listDataService.selectByListID(ldlistid);
    }

}
