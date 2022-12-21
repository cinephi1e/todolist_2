# Todolist

[홈페이지 바로가기](https://todolist-2.vercel.app/)

## 구현한 부분

### 공통

- redux를 통한 상태 관리
- json-server

### Header

- 리스트 추가시 input 초기화
- input 빈칸일시 추가 제한
- input 자동 포커싱

### Todolist

- `filter`를 사용해 투두리스트/완료리스트로 분리
- `delete` 버튼 클릭시 투두리스트 삭제
- `done` 버튼 클릭시 완료리스트로 변경, `cancel` 버튼 클릭시 투두리스트로 변경
- 리스트 클릭시 상세페이지로 이동

### TodolistPages

- id, 날짜, 투두리스트 내용, 완료 여부 반환
- 이전페이지로 돌아가기 버튼

<br>

## 구현 못한 부분

- input에 값이 있는 상태에서 상세페이지로 이동시 input 초기화
