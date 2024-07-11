document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    header.innerHTML = `
       
        <div class="header-title">@Lexis</div>
        <a href="https://github.com/NattyKatty/2_Examen.git" class="github-btn">GitHub</a>
    `;

    header.addEventListener('click', () => {
        const title = header.querySelector('.header-title');
        setTimeout(() => {
            title.textContent = 'Página: ';
        }, 2000);
    });
});
