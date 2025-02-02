
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1ENztmqAVL5FrYqlx9VGIGixTxdnqkQ3l/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1qLuiUhpkXf3CUxhHFnvagO8ZiMkQGMcp6KxY8_KhV9g/edit?usp=drive_link"})//이미지타이틀


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1ld8YuNgPGtnD20cukjeBd6eaB8gwmfjS/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/103oR14x-LOcoHaqhYxVZhRioNtI7T_VqeAfydfy7JvY/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/10J_QqXLSU045WCA5AeA16HahzFsKJuAA/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.27.0",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"자바스크립트",imgurl:"https://drive.google.com/file/d/1LqV1cP-b0SC2yEoVdD4h8AK4J8EIlJPC/view?usp=drive_link",imglog:"오픈소스 자바스크립트",sourceurl:""})
d1.set_img(1,{imgtitle:"자바스크립트",imgurl:"https://drive.google.com/file/d/1SdnyHbH3NuSK1xKYrLS_lRtGAFwp_nIA/view?usp=drive_link",imglog:"오픈소스 자바스크립트",sourceurl:""})
d1.set_img(1,{imgtitle:"html",imgurl:"https://drive.google.com/file/d/1mbywqfbCPIJymHcGqgewSv-mmwH5-IOJ/view?usp=drive_link",imglog:"오픈소스 html",sourceurl:""})
d1.set_img(1,{imgtitle:"html",imgurl:"https://drive.google.com/file/d/1BOcQhEd5_M-ulCLB8HpwAB2PnEJ8Cr1l/view?usp=drive_link",imglog:"오픈소스 html",sourceurl:""})

d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1NBdigZKhF_hRx9jwXAAcl-IOlgHG4dTy/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1Y6CEKtuhdZyw8rbZTY_LnAFQXTMVcmiau_oiD3y325c/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1T6ZYNmqPI1GQLow6JXzwAhoOK3m0sUG8/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1vlxyuzBmzaBk7B9VoycUH0mRBBxe4nTr/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1meUD3GUSeX0115bdTxEKqhuNlJhUcJqA/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1ld8YuNgPGtnD20cukjeBd6eaB8gwmfjS/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/103oR14x-LOcoHaqhYxVZhRioNtI7T_VqeAfydfy7JvY/edit?usp=drive_link"})
// d2.set_content("테스트케이스를 작성합니다.")
// d2.set_content("단위테스트를 작성합니다.")

// d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

//d3.set_img(0,{imgtitle:"",imgurl:"",imglog:"",sourceurl:""})//이미지타이틀
// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"가입폼",imgurl:"https://drive.google.com/file/d/1kx-8yv-ABvFN6A0MjMb2TfRi8g6hQ_Xd/view?usp=drive_link",imglog:"가입을 위한 폼",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"정보입력",imgurl:"https://drive.google.com/file/d/1GVtKZwcNt241KmsPBSxTyLXJ_5hosoXV/view?usp=drive_link",imglog:"회원 정보입력",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"송신코드",imgurl:"https://drive.google.com/file/d/11P0QZX8qhrwnVQRnWRaRUY3ayoF4ghuX/view?usp=drive_link",imglog:"정보 전송 코드",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/resources/static/signup.html"})//이미지타이틀
d3.set_img(0,{imgtitle:"정보수신코드",imgurl:"https://drive.google.com/file/d/1YZNdy2s7X_zXIIMr20IbvnEwTtmCy5yi/view?usp=drive_link",imglog:"서버 수신 코드",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"dao코드",imgurl:"https://drive.google.com/file/d/11Iom_qwg_zrWtuSl7j0WIO7EAmutXBDG/view?usp=drive_link",imglog:"dao 객체",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOImpl.java"})//이미지타이틀
d3.set_img(0,{imgtitle:"매퍼",imgurl:"https://drive.google.com/file/d/1yTwO1RmBLFfJ_wPGpJTDyJ6vprmE1aMm/view?usp=drive_link",imglog:"데이터베이스 쿼리",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})//이미지타이틀
d3.set_img(0,{imgtitle:"가입성공",imgurl:"https://drive.google.com/file/d/1IuZMNlzPMfIwjge8NhTioM4od_yl9m9E/view?usp=drive_link",imglog:"",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"데이터베이스",imgurl:"https://drive.google.com/file/d/1Z4P4FD3xlj5QeWQI8jSzWORuFqHwW_nR/view?usp=drive_link",imglog:"입력 성공 데이터베이스 저장 화면",sourceurl:""})//이미지타이틀
d3.set_content("회원로그인구현")
d3.set_img(1,{imgtitle:"로그인폼",imgurl:"https://drive.google.com/file/d/1OWEjdJnNRYcBfZVyPBqRBvPcTL8OQsvV/view?usp=drive_link",imglog:"아이디와 비밀번호를 입력받는다",sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"서버수신",imgurl:"https://drive.google.com/file/d/1aU0azAk2sL06occ2frYIEdw5LqP1x_XA/view?usp=drive_link",imglog:"전송된 정보를 서버에서 인증한다.",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(1,{imgtitle:"데이터베이스 준비",imgurl:"https://drive.google.com/file/d/1GeI8DvxXbK6gbP1T-BdE7caOvo4cOUB9/view?usp=drive_link",imglog:"데이터베이스와 연동하여 로그인 인증한다.",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOImpl.java"})//이미지타이틀
d3.set_img(1,{imgtitle:"성공 스냅샷",imgurl:"https://drive.google.com/file/d/17Dc5qaR8ZtOPsikMbbqlqzEwakbqZEgU/view?usp=drive_link",imglog:"로그인 성공 화면",sourceurl:""})//이미지타이틀
d3.set_content("로그아웃구현")
d3.set_img(2,{imgtitle:"로그인성공화면",imgurl:"https://drive.google.com/file/d/1lKWbipTgxFde3cRkPVhOopah2ECDa411/view?usp=drive_link",imglog:"로그인 된 화면이다.",sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃송신화면",imgurl:"https://drive.google.com/file/d/1e-wWTj6JKSWGjn8WNo02spuYRtxTjDlV/view?usp=drive_link",imglog:"로그아웃 버튼을 수행한다.",sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃수신화면",imgurl:"https://drive.google.com/file/d/1mzHOMVXSUH9v1E-MSW_fyynnXq9BBd3S/view?usp=drive_link",imglog:"세션을 해제한다.",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃스냅샷",imgurl:"https://drive.google.com/file/d/1FX-Wwv6RWzu6xR13xfeRZwqMjARXcJMi/view?usp=drive_link",imglog:"로그아웃 처리된다.",sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃후이동",imgurl:"https://drive.google.com/file/d/1KqWqlxxdOafiUHuVFPYaaHYjgbXBU6Ht/view?usp=drive_link",imglog:"로그아웃후 기본페이지로 이동한다.",sourceurl:""})//이미지타이틀
d3.set_content("회원리스트 연동")
d3.set_img(3,{imgtitle:"로그인됨",imgurl:"https://drive.google.com/file/d/1kuBktjdLoy0NNcvjm7kn-YnpEXCfItPo/view?usp=drive_link",imglog:"현재 로그인 상태",sourceurl:""})//이미지타이틀
d3.set_img(3,{imgtitle:"회원정보 요청",imgurl:"https://drive.google.com/file/d/1RLesVKXwkk7sQcEkhN7nRQPx5UgZHWNc/view?usp=drive_link",imglog:"로그인 사용자는 회원정보를 요청",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/resources/static/index.html"})//이미지타이틀
d3.set_img(3,{imgtitle:"요청수신",imgurl:"https://drive.google.com/file/d/15sjOUz-PsJIZuRrV4ntqJLWLRhf7tMYK/view?usp=drive_link",imglog:"요청된 정보를 수신함",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})//이미지타이틀
d3.set_img(3,{imgtitle:"dao모델",imgurl:"https://drive.google.com/file/d/1Lvpf-IkomoaQNKMwvWX660iJgAOgfkmJ/view?usp=drive_link",imglog:"모델객체에 정보 전달",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOImpl.java"})//이미지타이틀
d3.set_img(3,{imgtitle:"매퍼샷",imgurl:"https://drive.google.com/file/d/1F9Atp5bgKyCU5HegNKhX00_g8ldRAxmM/view?usp=drive_link",imglog:"데이터베이스쿼리를 수행하기위한 쿼리",sourceurl:"https://github.com/dudwns1212/loginsystem/blob/main/loginsystem-codeone/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})//이미지타이틀
d3.set_img(3,{imgtitle:"최종결과",imgurl:"https://drive.google.com/file/d/1iPSUc_6TVPri09vOKWLvu4yA93Zc8QL5/view?usp=drive_link",imglog:"회원 결과 화면 스냅샷",sourceurl:""})//이미지타이틀
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)


// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀
d4.set_img(0,{imgtitle:"배치빌드",imgurl:"https://drive.google.com/file/d/1zWyp10paDLcgIqrn99AyvKCUqUZHk8os/view?usp=drive_link",imglog:"",sourceurl:""})//이미지타이틀
d4.set_img(0,{imgtitle:"배치환경",imgurl:"https://drive.google.com/file/d/1MljTMsAm3z7qhUeBfXh4HSFrwTwIOe6E/view?usp=drive_link",imglog:"",sourceurl:""})//이미지타이틀
d4.set_img(0,{imgtitle:"배치스케쥴",imgurl:"https://drive.google.com/file/d/1e0FvTh9hQMeKPwj8EUG4C0u-Q7jqiGIN/view?usp=drive_link",imglog:"",sourceurl:""})//이미지타이틀
d4.set_img(0,{imgtitle:"배치줄력테스트",imgurl:"https://drive.google.com/file/d/1RplLIDwfMNKtZO-DS47lAlBd2MLOSByr/view?usp=drive_link",imglog:"",sourceurl:""})//이미지타이틀
d4.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
