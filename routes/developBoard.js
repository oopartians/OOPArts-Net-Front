/*
    developBoard.js router 는 임시 라우터이며, 모든 template 이 완성된 뒤 삭제될 예정입니다.
    그러므로 밑의 router 에도 등록을 하고 각 페이지에 맞는 router 생성도 해주시기 바랍니다.
    ex) login 페이지 같은경우
    login 페이지의 url 주소가 http://ooparts.club/login 와 같으므로,
    login.js 라는 router 를 routes 폴더안에 만들어기준 뒤 해당 login url 를 등록해주면 됩니다.

    그러나, 만약 login 페이지처럼 독립적인 페이지가 아닌 글 목록 페이지와 같이 main 페이지와 연결된 또는
    다른 상위 페이지와 연결된 페이지, 즉 자식 페이지라면, 부모 router 에 api 를 등록해주는 것으로 대체합니다.
*/
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('templateList');
});

// main-layout url 은 별 의미는 없지만 등록해놓음 (아무런 영향없으니 무시하면됨)
router.get('/main-layout', function (req, res, next) {
    res.render('main-layout');
});

router.get('/main-home', function (req, res, next) {
    res.render('main-home', { title: 'OOPArts' });
});

// TODO: login 페이지 router 등록
// TODO: profile 페이지 router 등록
// TODO: article-list 페이지 router 등록
// TODO: article-write 페이지 router 등록
// TODO: article-read 페이지 router 등록
// TODO: search-bar 페이지 router 등록

module.exports = router;
