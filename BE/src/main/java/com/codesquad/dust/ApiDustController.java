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
import org.springframework.web.servlet.ModelAndView;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@RestController
public class ApiDustController {

    private Logger logger = LoggerFactory.getLogger(ApiDustController.class);
    private final String SERVEICE_KEY = "sk%2FDXfdYMcYzpqoqa%2FB3wfVChJB7GPbzZgxasEmcfvZogvbX0H77alhv2Ct%2FaXvRw63OsFrEP8MusiURY7xjAQ%3D%3D";

    @GetMapping("")
    public ModelAndView index() {
        return new ModelAndView("index.html");
    }

    @GetMapping("/location")
    public JSONObject stations(@RequestParam(value = "latitude") String latitude,
                               @RequestParam(value = "longitude") String longitude) throws ParseException, UnsupportedEncodingException {
        logger.info("latitude : {}", latitude);
        logger.info("longitude : {}", longitude);
        String dongName = getDongNameFromCoordinate(latitude, longitude);
        List<String> coordinates = getTMCoordinateFromDongName(dongName);
        String stationName = getStationName(coordinates);

        String urlString = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?" +
                "stationName=" + stationName +
                "&dataTerm=daily" +
                "&pageNo=1" +
                "&numOfRows=24" +
                "&ServiceKey=" + SERVEICE_KEY +
                "&ver=1.3" +
                "&_returnType=json";
        String result = requestOpenApi(urlString);
        JSONObject rawDateFromOpenApi = (JSONObject) new JSONParser().parse(result);
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
        parsedData.put("stationName", stationName);
        parsedData.put("dustValues", dustValues);
        return parsedData;
    }

    private String getStationName(List<String> coordinate) throws ParseException {
        String tmX = coordinate.get(0);
        String tmY = coordinate.get(1);
        String urlString = "http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?" +
                "tmX=" + tmX +
                "&tmY=" + tmY +
                "&ServiceKey=" + SERVEICE_KEY +
                "&_returnType=json";

        String result = requestOpenApi(urlString);
        JSONObject rawDateFromOpenApi = (JSONObject) new JSONParser().parse(result);
        String stationName = (String) ((JSONObject) ((JSONArray) rawDateFromOpenApi.get("list")).
                get(0)).get("stationName");
        logger.info("stationName : {}", stationName);
        return stationName;
    }

    private List<String> getTMCoordinateFromDongName(String dongName) throws ParseException {

        String urlString = "http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getTMStdrCrdnt?" +
                "umdName=" + dongName +
                "&pageNo=1&numOfRows=1" +
                "&ServiceKey=" + SERVEICE_KEY +
                "&_returnType=json";
        String result = requestOpenApi(urlString);
        JSONObject rawDateFromOpenApi = (JSONObject) new JSONParser().parse(result);
        JSONObject parsedData = ((JSONObject) ((JSONArray) rawDateFromOpenApi.get("list")).get(0));
        String tmX = (String) parsedData.get("tmX");
        String tmY = (String) parsedData.get("tmY");
        List<String> coordinates = Arrays.asList(tmX, tmY);
        coordinates.forEach(System.out::println);
        return coordinates;
    }

    private String getDongNameFromCoordinate(String latitude, String longitude) throws ParseException, UnsupportedEncodingException {
//        String urlString = "http://api.vworld.kr/req/address?" +
//                "service=address&request=getAddress&version=2.0&crs=epsg:4326" +
//                "&point=" + longitude + "," + latitude + "&format=json&type=PARCEL&zipcode=true&simple=true" +
//                "&key=AAC8C667-87DE-333E-BF82-68EB6EC3A8DC";
        StringBuilder urlBuilder = new StringBuilder("http://api.vworld.kr/req/address");
        urlBuilder.append("?").append(URLEncoder.encode("service", "UTF-8")).append("=").append("address");
        urlBuilder.append("&").append(URLEncoder.encode("request", "UTF-8")).append("=").append("getAddress");
        urlBuilder.append("&").append(URLEncoder.encode("version", "UTF-8")).append("=").append("2.0");
        urlBuilder.append("&").append(URLEncoder.encode("crs", "UTF-8")).append("=").append("epsg:4326");
        urlBuilder.append("&").append(URLEncoder.encode("point", "UTF-8")).append("=").append(longitude).append(",").append(latitude);
        urlBuilder.append("&").append(URLEncoder.encode("format", "UTF-8")).append("=").append("json");
        urlBuilder.append("&").append(URLEncoder.encode("type", "UTF-8")).append("=").append("PARCEL");
        urlBuilder.append("&").append(URLEncoder.encode("zipcode", "UTF-8")).append("=").append("true");
        urlBuilder.append("&").append(URLEncoder.encode("simple", "UTF-8")).append("=").append("true");
        urlBuilder.append("&").append(URLEncoder.encode("key", "UTF-8")).append("=").append("AAC8C667-87DE-333E-BF82-68EB6EC3A8DC");
        String urlString = urlBuilder.toString();
        logger.info("urlString : {}", urlString);

        String result = requestOpenApi(urlString);
        JSONObject rawDataFromAPI = (JSONObject) new JSONParser().parse(result);
        logger.info("response : {}", rawDataFromAPI);
        JSONObject response = (JSONObject) rawDataFromAPI.get("response");
        String dongName = (String) (((JSONObject) ((JSONObject) ((JSONArray) response.get("result")).
                get(0)).get("structure"))).get("level4L");
        logger.info("dongName : {}", dongName);
        return dongName;
    }

    private String requestOpenApi(String urlString) {
        StringBuilder result = new StringBuilder();
        try {
            logger.info("url 만들기 전 로그");
            URL url = new URL(urlString);
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
            httpURLConnection.setRequestMethod("GET");
            httpURLConnection.setRequestProperty("Content-type", "application/json");
            httpURLConnection.setConnectTimeout(1000);
            logger.info("연결 전 로그");


            BufferedReader br = new BufferedReader(
                    new InputStreamReader(httpURLConnection.getInputStream()));
            logger.info("연결 성공?");

            String returnLine;
            while ((returnLine = br.readLine()) != null) {
                result.append(returnLine + "\n");
            }
            httpURLConnection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return String.valueOf(result);
    }

    @GetMapping("images")
    public JSONObject images() throws ParseException {
        String informData = "2020-04-03";
        String informCode = "PM10";
        String dataTime = "2020-04-03 11시 발표";
        String urlString = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMinuDustFrcstDspth?" +
                "searchDate=" + informData +
                "&ServiceKey=" + SERVEICE_KEY +
                "&ver=1.1" +
                "&_returnType=json";
        String result = requestOpenApi(urlString);
        JSONObject rawDataFromAPI = (JSONObject) new JSONParser().parse(result);
        JSONArray list = (JSONArray) rawDataFromAPI.get("list");
        JSONObject whatIFind = new JSONObject();
        for (int count = 0; count < list.size(); count++) {
            JSONObject each = (JSONObject) list.get(count);
            if (isWhatIWant(each, informData, informCode, dataTime)) {
                whatIFind = each;
                break;
            }
        }
        JSONArray images = new JSONArray();
        for (int count = 1; count < 4; count++) {
            images.add(whatIFind.get("imageUrl" + count));
        }
        JSONObject imageUrls = new JSONObject();
        imageUrls.put("images", images);
        return imageUrls;
    }

    private boolean isWhatIWant(JSONObject each, String informData, String informCode, String dataTime) {
        logger.info("each : {}", each);
        String eachSearchDate = (String) each.get("informData");
        String eachInformCode = (String) each.get("informCode");
        String eachDataTime = (String) each.get("dataTime");
        return eachSearchDate.equals(informData) && eachInformCode.equals(informCode) && eachDataTime.equals(dataTime);
    }


    @GetMapping("information")
    public JSONObject information() throws ParseException {
        String informData = "2020-04-03";
        String informCode = "PM10";
        String dataTime = "2020-04-03 11시 발표";
        String urlString = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMinuDustFrcstDspth?" +
                "searchDate=" + informData +
                "&ServiceKey=" + SERVEICE_KEY +
                "&ver=1.1" +
                "&_returnType=json";
        String result = requestOpenApi(urlString);
        JSONObject rawDataFromAPI = (JSONObject) new JSONParser().parse(result);
        JSONArray list = (JSONArray) rawDataFromAPI.get("list");
        JSONObject whatIFind = new JSONObject();
        for (int count = 0; count < list.size(); count++) {
            JSONObject each = (JSONObject) list.get(count);
            if (isWhatIWant(each, informData, informCode, dataTime)) {
                whatIFind = each;
                break;
            }
        }
        String informOverall = (String) whatIFind.get("informOverall");
        String informGrade = (String) whatIFind.get("informGrade");
        JSONObject informaions = new JSONObject();
        informaions.put("informOverall", informOverall);
        informaions.put("informGrade", informGrade);
        return informaions;
    }
}
