(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

let id = 70691332;

if(typeof ym) {
    ym(id, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });

    let navigation = document.querySelector('#navigation'),
        showMap = document.querySelector('#show-map'),
        taxi = document.querySelector('#taxi'),
        call = document.querySelector('.js-call'),
        mail = document.querySelector('.js-mail');

    navigation.addEventListener('click', function () {
        ym(id,'reachGoal','navigation')
    });
    showMap.addEventListener('click', function () {
        ym(id,'reachGoal','show-map')
    });
    taxi.addEventListener('click', function () {
        ym(id,'reachGoal','taxi')
    });
    call.addEventListener('click', function () {
        ym(id,'reachGoal','call')
    });
    mail.addEventListener('click', function () {
        ym(id,'reachGoal','mail')
    });
}
//# sourceMappingURL=bundle.js.map
