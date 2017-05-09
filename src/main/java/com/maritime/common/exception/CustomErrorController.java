package com.maritime.common.exception;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

/**
 * Created by Moros on 2017/5/7.
 */
@RestController
public class CustomErrorController implements ErrorController {

    private static final String ERROR_PATH = "/error";

    @RequestMapping(value=ERROR_PATH)
    public ModelAndView handleError(){
        return new ModelAndView(new RedirectView("/errorP.html"));
    }

    @Override
    public String getErrorPath() {
        return ERROR_PATH;
    }

}