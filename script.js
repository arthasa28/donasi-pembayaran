document.querySelectorAll('.btn-cta').forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    });
    btn.addEventListener('mouseout', () => {
      btn.style.boxShadow = 'none';
    });
  });
  