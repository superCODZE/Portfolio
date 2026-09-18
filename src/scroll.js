
export const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const nav = document.querySelector('nav');
    const offset = nav ? nav.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
};