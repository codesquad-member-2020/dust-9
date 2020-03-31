# dust-9
미세먼지 프로젝트 - 9팀


# 팀 그라운드 룰 

## 요구사항 분석 스프레드시트 
[https://docs.google.com/spreadsheets/d/1tAolHvdSZUqzN1v54wQQhXsosJQsSVjXHvc1UjUMKPA/edit#gid=0](https://docs.google.com/spreadsheets/d/1tAolHvdSZUqzN1v54wQQhXsosJQsSVjXHvc1UjUMKPA/edit#gid=0)

## 요청 URL형식 
- 사용자 근처 측정소 : GET air.honux.com/location?latitude=36.5&longitude=-122.321
- 예보 이미지 : GET air.honux.com/images
- 예보 문구, 지역별 등급 : GET air.honux.com/information


## Json 형식 
- 사용자 근처 측정소와 지난 24시간 미세먼지 농도 응답 결과 
```
{
  "stationName": "강남구",
  "dustValues": [30, 10, 25, 11, 100, 50, ...]
}
```

- 예보 문구, 지역별 등급
```
{
  "informOverall": "수도권·강원영서·충청권·호남권·부산·경남·제주권은 ‘나쁨’, 그 밖의 권역은 ‘보통’으로 예상됨. 다만, 그 밖의 권역에서도 ‘나쁨’ 수준의 농도가 일시적으로 나타날 수 있음",
  "informGrade": "서울 : 나쁨,제주 : 나쁨,전남 : 나쁨,전북 : 나쁨,광주 : 나쁨,경남 : 나쁨,경북 : 보통,울산 : 보통,대구 : 보통,부산 : 나쁨,충남 : 나쁨,충북 : 나쁨,세종 : 나쁨,대전 : 나쁨,영동 : 보통,영서 : 나쁨,경기남부 : 나쁨,경기북부 : 나쁨,인천 : 나쁨"
}
```
