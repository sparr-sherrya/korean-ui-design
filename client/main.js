// 버튼을 찾은 다음에,

//버튼 클릭하면,
//자바스크립트 문법 : DOM 선택, 이벤트 제어
//할일을 서버로 부터 받아온다.
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//      .then(response => response.json())
//      .then(json => console.log(json))
//그런다음 화면에 보여준다.

import { validateForm } from '../src/utils/validator.js';
import Toast from '../src/components/toast.js';

// todo 페이지의 가져오기 버튼
document.querySelector('input[type="button"]')?.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => console.log(json))
});

// login 페이지의 로그인 폼 검증
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(loginForm).entries());
        const result = validateForm(data, {
            username: [
                'required',
                (v) => (v && v.length < 3 ? '아이디는 3자 이상이어야 합니다' : '')
            ],
            password: [
                'required',
                (v) => (v && v.length < 6 ? '비밀번호는 6자 이상이어야 합니다' : '')
            ]
        });
        if (!result.valid) {
            Toast({ type: 'error', message: Object.values(result.errors)[0][0] });
            return;
        }
        Toast({ type: 'success', message: '로그인 성공' });
    });
}
