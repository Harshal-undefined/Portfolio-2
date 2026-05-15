// ── Navigation ──────────────────────────────────────────────
function showMain(scrollTarget) {
  document.getElementById('main-content').style.display = 'block';
  document.querySelectorAll('.project-detail').forEach(e => e.classList.remove('active'));
  if (scrollTarget) {
    setTimeout(() => {
      const el = document.getElementById(scrollTarget);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 30);
  } else {
    window.scrollTo(0, 0);
  }
}

function navTo(id) {
  const anyActive = [...document.querySelectorAll('.project-detail')]
    .some(e => e.classList.contains('active'));
  if (anyActive) {
    showMain(id);
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

function showProject(key) {
  document.getElementById('main-content').style.display = 'none';
  document.querySelectorAll('.project-detail').forEach(e => e.classList.remove('active'));
  const el = document.getElementById('detail-' + key);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
}

// ── Lightbox ─────────────────────────────────────────────────
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('gallery-img') || e.target.classList.contains('char-img')) {
    document.getElementById('lb-img').src = e.target.src;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
});

function closeLB() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
