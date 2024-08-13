# Olympic Medal Tracker
개인 프로젝트로 진행한 올림픽 메달 트래커 입니다.
- 제작 기간: 240809 ~ 240813
- 개요
  - 나라별 메달수를 추가/수정/삭제할 수 있습니다. 금은동 우선순위순 배열, 총 메달 개수순 배열 중 선택하여 정렬합니다.
  - 입력한 데이터는 로컬스토리지에 저장되어 브라우저를 종료한 후에도 값이 유지됩니다.

<br>
<br>

# 주요 기능
<img src="https://github.com/user-attachments/assets/a3164bc9-295e-4aad-8f3b-21cda81f87cd" width="600"/>

<img src="https://github.com/user-attachments/assets/8de6333e-15d4-41d1-a4b0-d1c89a5f20e6" width="600"/>

입력한 메달 정보가 없을 때 빈 테이블이 아닌 안내 메세지를 렌더합니다.

<br>

![sorting](https://github.com/user-attachments/assets/e1cecb01-1dec-4bcd-8231-79eef68f710f)
정렬 기준을 선택할 수 있습니다.
금은동 우선순위순을 선택하는 경우 금메달 우선 비교 -> 금메달 수가 같은 경우 은메달 비교 -> 은메달 수가 같은 경우 동메달 수를 비교합니다.

<br>

![update](https://github.com/user-attachments/assets/febbed84-e6ea-41f4-972f-3f4188d0184d)
이미 등록된 국가명을 입력한 경우 업데이트 버튼을 통해 수정할 수 있습니다.

<br>

![onlynum](https://github.com/user-attachments/assets/1265a3d3-353f-4cef-8258-ea34f064eb7e)
메달 수를 입력하는 곳에 숫자가 아닌 값을 입력하는 경우 alert창이 뜨며 입력이 반영되지 않습니다.

<br>

![스크롤](https://github.com/user-attachments/assets/c689d305-f27b-4a93-b4b7-70e314861e4e)
데이터가 늘어나 테이블의 최대 높이를 넘어서는 경우 스크롤할 수 있습니다. 이 때 테이블 헤더는 고정되어 있습니다.

<br>

![mediaQueryDelete_out](https://github.com/user-attachments/assets/579b943c-13ba-42ea-aee7-83ab5db26195)

미디어쿼리를 이용해 레이아웃의 넓이를 조정하였고, 삭제 버튼을 통해 메달 정보 삭제 또한 가능합니다.

<br><br>

# 컴포넌트 구조
![image](https://github.com/user-attachments/assets/3f3d0597-0dcb-48ee-af3f-ad91e43cbd68)

위 이미지에서 초록색 선으로 표시된 부분들을 컴포넌트로 분리했습니다.

<MedalSection\/> 하위구조
- MedalForm
  - MedalInputField
  - AddBUtton
  - UpdateButton
- SortOptionDropdown
  - SortOptionMenu
- RankingTable (데이터 존재하지 않는 경우 InputGuidance)
  - RankingItem

<br><br>

# 트러블 슈팅
✔︎ 국가 추가/업데이트 후 000 과 같이 여러개의 0만 입력되어있는 input field가 기본값으로 설정한 0으로 돌아오지 않음
- 0과 000을 다른 값으로 인식하여 다시 렌더할 수 있도록 Number타입 0에서 String "0"으로 기본값 변경

✔︎ 정렬 기준 state 변경 후 바로 반영되지 않고 다음 렌더에 이전에 선택한 기준으로 변경됨
- state 변경함수가 비동기적으로 변경을 처리하는 특성 때문인 것으로 유추되어 선택된 옵션을 따로 변수로 받아 정렬했다가 useEffect를 알게되어 사용함

<br><br>

# 프로젝트 일지
[1일차](https://nninyeong.tistory.com/70?category=1231101)

[2일차](https://nninyeong.tistory.com/71?category=1231101)

[3일차](https://nninyeong.tistory.com/72?category=1231101)

[4일차](https://nninyeong.tistory.com/73?category=1231101)
