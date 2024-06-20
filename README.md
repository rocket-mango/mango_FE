### 1. 프로젝트 제목

망고 초보 재배자를 위한 이미지 객체 검출 및 분류 기반 농작물 질병 식별 앱 서비스
"망하지망고"

### 2. 프로젝트 로고

![image](https://github.com/rocket-mango/mango_FE/assets/117718423/8506fe7a-ebbf-4e16-b283-fcc384ec7b19)

### 3. 프로젝트 소개

- 프로젝트 문제 정의
  - 망고 재배의 까다로움: 망고 재배 자체가 까다롭고, 재배 실패 시 피해가 특히 크다.
  - 질병 진단 대처의 어려움: 망고에 질병이 생기면, 상황에 맞는 대처 방법을 찾는 것이 오래 걸린다.
  - 망고 재배 정보의 산재: 망고를 재배하면서 참고해야 할 정보들이 너무 산재되어 있다.
  - 유저 맞춤 UX의 부족: 망고 재배자들의 다수가 나이가 있다보니, 복잡하고 어려운 화면은 피하게 된다.
- 주요 기능 및 제안 내용
  - 망고 잎의 촬영을 통해 1분 내외로 망고 질병 결과를 알리고 질병의 증상과 원인 및 대처 방법에 대한 정보를 제공한다.
  - 망고 재배에 필요한 정보를 한곳에 모아 종합적으로 제공한다.
  - 유저의 틀성을 충분히 고려하여 앱의 UX를 설계하였다.
- 기대효과 및 의의
  - 망고 재배 증가 추세: 국내 아열대 과일 재배 면적이 17년도에 비해 약 1.7배 증가하였다.
  - 높은 서비스 확장 유연성: 파파야, 용과, 올리브 등 타 아열대 작물로도 충분히 범위를 확장시킬 수 있다.
- 개발 기간
  - 2023.09 ~ 2024.06
- 기술 스택

  ![image](https://github.com/rocket-mango/mango_FE/assets/117718423/a67f4e2e-21f2-4d0a-a4c7-5850e87eb590)

  - 프론트엔드에서는 안드로이드 환경에서 사용할 수 있게 제작되었으며, React Native, JavaScript, TypeScript를 사용하여 동적인 화면 UI를 구축하였다.

### 4. 시작 가이드

- 로그인 계정 정보

  - ID: yujin00
  - Password: yujin0926$

- 설치 및 실행

  - Installation

    - git clone https://github.com/rocket-mango/mango_FE.git
    - cd mango_FE

  - 실행

    - npm start
    - npm run android

  - 패키지, 툴 설치
    - npm install @react-native-async-storage/async-storage
    - npm install @react-native-community/geolocation
    - npm install @react-navigation/native
    - npm install @react-navigation/native @react-navigation/stack
    - npm install react-native-vector-icons
    - npm install axios
    - npm install react-native-image-picker
    - npm install react-native-dotenv
    - npm install react-native-config

### 5. 화면 구성 / 백엔드 API + Geolocation API + OpenWeatherMap API

- 로그인 화면
  - /api/user/login
  - 입력 : username, password
  - 내용 : 사용자 로그인
  - 출력 : Header의 authorization에 JWT
  - [ ] POST
  - http Header
  - Authorization : Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiaGVsbG8iLCJ1c2VybmFtZSI6ImhlbGxvIiwibmlja25hbWUiOiJoZWxsbyIsImVtYWlsIjoic2Fsa2pmQGFsZGtmai5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzA5NjEwMzkxLCJleHAiOjE3MDk2MTM5OTF9.glSZWr-i7n-UdBt6aAzWzYULLDHwtbvXr1gTlprxZk8

![스크린샷 2024-06-18 134902](https://github.com/rocket-mango/mango_FE/assets/117718423/ead4ba55-2908-439f-8ebc-66247c3064e4)

- 홈 화면
  - /api/home
  - 입력 : 없음
  - 내용 : 홈 화면에 띄울 정보를 보냄
  - 출력 : 기상청 정보, 사용자의 마이망고리스트, 사용자 nickname
  - [ ] GET

![스크린샷 2024-06-18 135009](https://github.com/rocket-mango/mango_FE/assets/117718423/d84932c0-f564-4e58-b21e-28204cd5007b)

- 진단 화면, 로딩 화면

![스크린샷 2024-06-18 135032](https://github.com/rocket-mango/mango_FE/assets/117718423/887cbb25-a2c0-4733-be29-1dad68922785)
![스크린샷 2024-06-18 135116](https://github.com/rocket-mango/mango_FE/assets/117718423/f9862755-14c6-4055-be83-690f7f3a33f4)

- 결과 화면
  - /api/disease/diagnosis
  - 입력 : 망고 사진, location
  - 내용 : 망고 검사 진행
  - 출력 : top3 결과 리스트, 망고 결과 리턴
  - [ ] POST

![스크린샷 2024-06-18 135130](https://github.com/rocket-mango/mango_FE/assets/117718423/fd0a538b-fb1a-47d2-bdd6-64734e057caa)
![스크린샷 2024-06-18 135143](https://github.com/rocket-mango/mango_FE/assets/117718423/6749c193-1aea-4b42-90e3-b695ce5bc653)

- 진단 기록 화면
  - /api/disease/my-mango-list
  - 입력 : 없음
  - 내용 : 해당 사용자의 망고 검사 결과 리스트를 반환
  - 출력 : 망고 결과 리스트
  - [ ] GET

![스크린샷 2024-06-18 135159](https://github.com/rocket-mango/mango_FE/assets/117718423/f263687f-50b2-4cbb-ab16-3a6a604b631f)

- 진단 기록 결과 화면
  - /api/disease/{mid}
  - [ ] GET

![스크린샷 2024-06-18 135213](https://github.com/rocket-mango/mango_FE/assets/117718423/865643fb-f967-4fc3-8bb8-23e90483d211)

- 팁 목록 화면
  - /api/farmingInfo/list/{categoryId}

![스크린샷 2024-06-18 135231](https://github.com/rocket-mango/mango_FE/assets/117718423/35c424fc-68ee-43d9-b05a-a32203cd9ee0)

- 팁 화면
  - api/farmingInfo/{fid}
  - 입력: 입력 없습니다. Pathvariable로 fid(farmingInfo id값, 식별자) 만 넣으면 됩니다.
  - [ ] GET

![스크린샷 2024-06-18 135254](https://github.com/rocket-mango/mango_FE/assets/117718423/8fd255fe-6228-45e5-b3cf-67a3fc7d5c5f)

### 📍 Demo

<a href="https://youtu.be/wkHsFAMPMAs?si=NtXd2lCAfklKVJ7O" target="_blank">데모 영상 보러가기</a>
