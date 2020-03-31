package com.codesquad.dust;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiDustController {

    private Logger logger = LoggerFactory.getLogger(ApiDustController.class);

    @GetMapping("")
    public String index() {
        return "index";
    }

    @GetMapping("/location")
    public String stations(@RequestParam(value = "latitude") String latitude,
                           @RequestParam(value = "longitude") String longitude) {
        logger.info("latitude : {}", latitude);
        logger.info("longitude : {}", longitude);
        String result = "{\n" +
                "  \"stationName\": \"강남구\",\n" +
                "  \"dustValues\": [10, 20, 30, 40, 50, 60, 70, 80, 90. 100, 110, 120, \n" +
                "                130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240]\n" +
                "}";
        return result;
    }
}
