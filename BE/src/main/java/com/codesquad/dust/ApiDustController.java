package com.codesquad.dust;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;

@RestController
public class ApiDustController {

    private Logger logger = LoggerFactory.getLogger(ApiDustController.class);

    @GetMapping("")
    public String index() {
        return "index";
    }

    @GetMapping("/location")
    public JSONObject stations(@RequestParam(value = "latitude") String latitude,
                               @RequestParam(value = "longitude") String longitude) throws ParseException {
        logger.info("latitude : {}", latitude);
        logger.info("longitude : {}", longitude);

        StringBuffer result = new StringBuffer();
        try {
            String urlString = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?" +
                    "stationName=노원구" +
                    "&dataTerm=daily" +
                    "&pageNo=1" +
                    "&numOfRows=24" +
                    "&ServiceKey=sk%2FDXfdYMcYzpqoqa%2FB3wfVChJB7GPbzZgxasEmcfvZogvbX0H77alhv2Ct%2FaXvRw63OsFrEP8MusiURY7xjAQ%3D%3D" +
                    "&ver=1.3" +
                    "&_returnType=json";

            URL url = new URL(urlString);
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
            httpURLConnection.setRequestMethod("GET");

            BufferedReader br = new BufferedReader(
                    new InputStreamReader(httpURLConnection.getInputStream(), "UTF-8"));

            String returnLine;
            while ((returnLine = br.readLine()) != null) {
                result.append(returnLine + "\n");
            }
            httpURLConnection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
        JSONObject rawDateFromOpenApi = (JSONObject) new JSONParser().parse(String.valueOf(result));
        JSONArray secondDate = (JSONArray) rawDateFromOpenApi.get("list");
        JSONArray dustValues = new JSONArray();
        for (int count = 0; count < 24; count++) {
            JSONObject eachData = (JSONObject) secondDate.get(count);
            String pm10Value = (String) eachData.get("pm10Value");
            String pm10Grade = (String) eachData.get("pm10Grade1h");
            String dataTime = (String) eachData.get("dataTime");
            String[] splitDataTime = dataTime.split(" ");
            String[] splitDataTimeTwo = splitDataTime[1].split(":");
            String hour = splitDataTimeTwo[0];
            HashMap<String, String> hashMap = new HashMap<>();
            hashMap.put("pm10Value", pm10Value);
            hashMap.put("pm10Grade", pm10Grade);
            hashMap.put("datetime", hour);

            JSONObject jsonObject = new JSONObject(hashMap);
            dustValues.add(jsonObject);
        }
        JSONObject parsedData = new JSONObject();
        parsedData.put("stationName", "노원구");
        parsedData.put("dustValues", dustValues);
        return parsedData;
    }

    @GetMapping("/geoInformation")
    public JSONObject getGeo(@RequestParam(value = "latitude") String latitude,
                             @RequestParam(value = "longitude") String longitude) throws ParseException {
        StringBuffer result = new StringBuffer();

        try {
            String urlString = "http://api.vworld.kr/req/address?" +
                    "service=address&request=getAddress&version=2.0&crs=epsg:4326" +
                    "&point=" + latitude + "," + longitude + "&format=json&type=PARCEL&zipcode=true&simple=true" +
                    "&key=AAC8C667-87DE-333E-BF82-68EB6EC3A8DC";

            URL url = new URL(urlString);
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
            httpURLConnection.setRequestMethod("GET");

            BufferedReader br = new BufferedReader(
                    new InputStreamReader(httpURLConnection.getInputStream(), "UTF-8"));

            String returnLine;
            while ((returnLine = br.readLine()) != null) {
                result.append(returnLine + "\n");
            }
            httpURLConnection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
        JSONObject geoInfo = (JSONObject) new JSONParser().parse(String.valueOf(result));
        return geoInfo;
    }
}
