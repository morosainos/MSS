package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan
@EnableScheduling
public class MssApplication {

    //Main entrance of MSS spring-boot main
    public static void main(String[] args) {
        SpringApplication.run(MssApplication.class, args);
    }

}
