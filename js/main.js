const hd = document.getElementById('hd');
const bg = document.getElementById('bg');
const dw = document.getElementById('dw');
const st = document.getElementById('st');

/* 모바일 메뉴 열고 닫기 */
if (bg) {
  bg.addEventListener('click', () => {
    const open = dw.classList.toggle('open');
    bg.classList.toggle('open', open);
    bg.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  dw.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    dw.classList.remove('open');
    bg.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

/* 스크롤에 따라 헤더 배경 / 하단 고정 문의 버튼 */
addEventListener('scroll', () => {
  const y = scrollY;
  if (hd) hd.classList.toggle('solid', y > 60);
  if (st) st.classList.toggle('show', y > innerHeight * 0.6);
}, { passive: true });
