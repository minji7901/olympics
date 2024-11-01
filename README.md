# 🏅Olympic Medalists🏅
react를 사용하여 메달 집계 리스트를 보여주는 사이트 입니다. <br>
![OlympicMedalists-ezgif com-crop](https://github.com/user-attachments/assets/5e610acd-8ff4-4a5f-b94f-354a31b03df1)

## ✅ 기능
- 나라명, 금,은,동 메달 갯수를 입력후 Add버튼을 클릭하면 밑에 리스트에 추가됨
  - 리스트에 이미 작성한 나라가 있으면 alert창이 뜨고 return이 됨 
- 리스트에 동일한 나라명을 입력후 수정할 메달 갯수를 입력하고 Updated버튼을 클릭하면 해당 나라의 메달 갯수가 수정이 됨
  - 수정할 나라가 리스트에 없으면 alert창이 뜨고 return이 됨
- 리스트에 삭제할 나라의 Delete버튼을 클릭하면 삭제됨
- 사용자가 정렬기준을 선택하면 내림차순으로 정렬됨
- 해당 데이터들은 로컬 스토리지에 저장돼서 데이터가 유지됨 (필터는 저장x)

## 💫 컴포넌트
### 1. `Header`
- **설명**: 로고 + 사이트명

### 2. `MedalForm`
- **설명**: 메달 데이터를 입력하기 위한 폼 컴포넌트. 사용자로부터 국가명과 메달 개수를 입력받아, 새로운 데이터를 추가하거나 기존 데이터를 업데이트
- **Props**:
  - `medalItems`: 현재 저장된 메달 데이터 목록. 입력된 데이터를 기반으로 목록을 업데이트하거나 수정할 때 사용
  - `setMedalItems`: 메달 데이터를 업데이트하는 함수로 새로운 데이터 추가나 기존 데이터 수정 시 호출

### 3. `MedalCont`
- **설명**: 정렬데이터와 메달 데이터를 가져와서 UI에 보여주는 컴포넌트. 사용자가 저장한 데이터를 받아서 UseEffect훅을 사용하여 정렬 기준이 선택될때마다 UI를 변경해서 보여줌
- **Props**:
  - `medalItems`: 현재 저장된 메달 데이터 배열. 입력된 데이터를 기반으로 목록을 업데이트하거나 수정할 때 사용
  - `setMedalItems`: 메달 데이터 목록을 업데이트하는 함수. 새로운 데이터 추가나 기존 데이터 수정 시 호출

### 3-1. `MedalFilter`
- **설명**: 정렬을 지정하는 셀렉트 컴포넌트. 사용자가 선택한 정렬 기준으로 내림차순 업데이트
- **Props**:
  - `selected`: 현재 선택된 정렬 데이터. 사용자가 선택한 정렬 기준을 저장
  - `setSelected`: 선택된 정렬 데이터를 업데이트하는 함수

### 3-2. `MedalItem`
- **설명**: 저장된 데이터를 테이블 형식으로 보여주는 컴포넌트. 해당 데이터를 삭제할 수 있게 함
- **Props**:
  - `medalItems`: 현재 저장된 메달 데이터 배열. 테이블에 표시할 데이터를 포함
  - `setMedalItems`: 메달 데이터 목록을 업데이트하는 함수. 삭제된 데이터를 반영하여 medalItems와 localStorage의 데이터를 모두 갱신
