"use strict";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmZhY2UuYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

"use strict";
var articles = [
    // {
    //   link: 'posts/ten-things-you-may-not-know-about-npm',
    //   title: 'Ten Things You May Not Know About npm',
    //   dateTime: '2016-06-07 10:08:43am',
    //   description: '',
    //   tags: ['npm', 'javascrit'],
    //   draft: true
    // },
    {
        link: 'posts/getting-running-with-typescript',
        title: 'Getting Running with Typescript',
        dateTime: '2016-06-07 12:13:19am',
        description: '',
        tags: ['typescript', 'javascript']
    },
    {
        link: 'posts/my-first-day-at-npmjs',
        title: 'My First Day at npmjs',
        dateTime: '2016-06-06 04:47:22pm',
        description: '',
        tags: ['npm', 'true ventures', 'personal']
    },
];
var settings = {
    displayDescription: true
};
function createArticle(article) {
    var tagString = '';
    if (typeof article.tags.length !== 'undefined') {
        for (var i = 0; i < article.tags.length; i++) {
            tagString += "<div class='site-article-tag' data-tag='" + article.tags[i] + "'>" + article.tags[i] + "</div>";
        }
    }
    var articleTemplate = "\n    <article class='site-article'>\n      <header>\n        <h3 class='site-article-heading'><a href='" + article.link + "'>" + article.title + "</a></h3>\n        <span class='site-article-date-time'>" + article.dateTime + "</span>\n        <div class='tag-container'>" + tagString + "</div>\n      </header>\n      <div class='content'>\n        <p>" + (settings.displayDescription ? article.description : '') + "</p>\n      </div>\n    </article>";
    return articleTemplate;
}
function appendArticles() {
    var content = document.querySelector('.site-main');
    if (content !== null) {
        for (var i = 0; i < articles.length; i++) {
            content.innerHTML += createArticle(articles[i]);
        }
    }
}
function createSingleArticle(article) {
    var tagString = '';
    if (typeof article.tags.length !== 'undefined') {
        for (var i = 0; i < article.tags.length; i++) {
            tagString += "<div class='site-article-tag' data-tag='" + article.tags[i] + "'>" + article.tags[i] + "</div>";
        }
    }
    var articleTemplate = "\n    <article>\n      <header class='article-header'>\n        <h1 class='article-heading'>" + article.title + "</h1>\n        <h2 class='article-date-time'>" + article.dateTime + "</h2>\n        <div class='tag-container'>" + tagString + "</div>\n      </header>\n      <main class='article-main'>\n\n      </main>\n      <footer class='article-footer'>\n\n      </footer>\n    </article>\n  ";
    return articleTemplate;
}
function appendArticle() {
    var content = document.querySelector('.site-main-article');
    var article;
    var id;
    if (content !== null) {
        id = content.getAttribute('data-id');
        for (var i = 0; i < articles.length; i++) {
            if (id === articles[i].id) {
                article = articles[i];
            }
        }
        content.innerHTML += createSingleArticle(article);
    }
    console.log(id);
}
function init() {
    appendArticles();
    appendArticle();
}
init();

//# sourceMappingURL=data:application/json;base64,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bkIsU0FBUyw4SkFTM0MsQ0FBQztJQUNGLE1BQU0sQ0FBQyxlQUFlLENBQUM7QUFDekIsQ0FBQztBQUVEO0lBQ0UsSUFBSSxPQUFPLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN4RSxJQUFJLE9BQWUsQ0FBQztJQUNwQixJQUFJLEVBQU0sQ0FBQztJQUNYLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sQ0FBQyxTQUFTLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQUVEO0lBQ0UsY0FBYyxFQUFFLENBQUM7SUFDakIsYUFBYSxFQUFFLENBQUM7QUFDbEIsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gJy4vaW50ZXJmYWNlLmFydGljbGUnO1xuXG5sZXQgYXJ0aWNsZXM6QXJ0aWNsZVtdID0gW1xuICAvLyB7XG4gIC8vICAgbGluazogJ3Bvc3RzL3Rlbi10aGluZ3MteW91LW1heS1ub3Qta25vdy1hYm91dC1ucG0nLFxuICAvLyAgIHRpdGxlOiAnVGVuIFRoaW5ncyBZb3UgTWF5IE5vdCBLbm93IEFib3V0IG5wbScsXG4gIC8vICAgZGF0ZVRpbWU6ICcyMDE2LTA2LTA3IDEwOjA4OjQzYW0nLFxuICAvLyAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgLy8gICB0YWdzOiBbJ25wbScsICdqYXZhc2NyaXQnXSxcbiAgLy8gICBkcmFmdDogdHJ1ZVxuICAvLyB9LFxuICB7XG4gICAgbGluazogJ3Bvc3RzL2dldHRpbmctcnVubmluZy13aXRoLXR5cGVzY3JpcHQnLFxuICAgIHRpdGxlOiAnR2V0dGluZyBSdW5uaW5nIHdpdGggVHlwZXNjcmlwdCcsXG4gICAgZGF0ZVRpbWU6ICcyMDE2LTA2LTA3IDEyOjEzOjE5YW0nLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICB0YWdzOiBbJ3R5cGVzY3JpcHQnLCAnamF2YXNjcmlwdCddLFxuICB9LFxuICB7XG4gICAgbGluazogJ3Bvc3RzL215LWZpcnN0LWRheS1hdC1ucG1qcycsXG4gICAgdGl0bGU6ICdNeSBGaXJzdCBEYXkgYXQgbnBtanMnLFxuICAgIGRhdGVUaW1lOiAnMjAxNi0wNi0wNiAwNDo0NzoyMnBtJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdGFnczogWyducG0nLCAndHJ1ZSB2ZW50dXJlcycsICdwZXJzb25hbCddXG4gIH0sXG5dO1xuXG5cbmxldCBzZXR0aW5nczphbnkgPSB7XG4gIGRpc3BsYXlEZXNjcmlwdGlvbjogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQXJ0aWNsZShhcnRpY2xlOkFydGljbGUpOnN0cmluZyB7XG4gIGxldCB0YWdTdHJpbmcgPSAnJztcbiAgaWYgKHR5cGVvZiBhcnRpY2xlLnRhZ3MubGVuZ3RoICE9PSAndW5kZWZpbmVkJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZS50YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YWdTdHJpbmcgKz0gYDxkaXYgY2xhc3M9J3NpdGUtYXJ0aWNsZS10YWcnIGRhdGEtdGFnPScke2FydGljbGUudGFnc1tpXX0nPiR7YXJ0aWNsZS50YWdzW2ldfTwvZGl2PmA7XG4gICAgfVxuICB9XG5cbiAgbGV0IGFydGljbGVUZW1wbGF0ZSA9IGBcbiAgICA8YXJ0aWNsZSBjbGFzcz0nc2l0ZS1hcnRpY2xlJz5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxoMyBjbGFzcz0nc2l0ZS1hcnRpY2xlLWhlYWRpbmcnPjxhIGhyZWY9JyR7YXJ0aWNsZS5saW5rfSc+JHthcnRpY2xlLnRpdGxlfTwvYT48L2gzPlxuICAgICAgICA8c3BhbiBjbGFzcz0nc2l0ZS1hcnRpY2xlLWRhdGUtdGltZSc+JHthcnRpY2xlLmRhdGVUaW1lfTwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGFnLWNvbnRhaW5lcic+JHt0YWdTdHJpbmd9PC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9J2NvbnRlbnQnPlxuICAgICAgICA8cD4ke3NldHRpbmdzLmRpc3BsYXlEZXNjcmlwdGlvbiA/IGFydGljbGUuZGVzY3JpcHRpb24gOiAnJ308L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+YDtcblxuXG4gIHJldHVybiBhcnRpY2xlVGVtcGxhdGU7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEFydGljbGVzKCk6dm9pZCB7XG4gIGxldCBjb250ZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLW1haW4nKTtcbiAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb250ZW50LmlubmVySFRNTCArPSBjcmVhdGVBcnRpY2xlKGFydGljbGVzW2ldKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU2luZ2xlQXJ0aWNsZShhcnRpY2xlOkFydGljbGUpIHtcbiAgbGV0IHRhZ1N0cmluZyA9ICcnO1xuICBpZiAodHlwZW9mIGFydGljbGUudGFncy5sZW5ndGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnRpY2xlLnRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhZ1N0cmluZyArPSBgPGRpdiBjbGFzcz0nc2l0ZS1hcnRpY2xlLXRhZycgZGF0YS10YWc9JyR7YXJ0aWNsZS50YWdzW2ldfSc+JHthcnRpY2xlLnRhZ3NbaV19PC9kaXY+YDtcbiAgICB9XG4gIH1cbiAgbGV0IGFydGljbGVUZW1wbGF0ZSA9IGBcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxoZWFkZXIgY2xhc3M9J2FydGljbGUtaGVhZGVyJz5cbiAgICAgICAgPGgxIGNsYXNzPSdhcnRpY2xlLWhlYWRpbmcnPiR7YXJ0aWNsZS50aXRsZX08L2gxPlxuICAgICAgICA8aDIgY2xhc3M9J2FydGljbGUtZGF0ZS10aW1lJz4ke2FydGljbGUuZGF0ZVRpbWV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGFnLWNvbnRhaW5lcic+JHt0YWdTdHJpbmd9PC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzPSdhcnRpY2xlLW1haW4nPlxuXG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzPSdhcnRpY2xlLWZvb3Rlcic+XG5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvYXJ0aWNsZT5cbiAgYDtcbiAgcmV0dXJuIGFydGljbGVUZW1wbGF0ZTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQXJ0aWNsZSgpIHtcbiAgbGV0IGNvbnRlbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtbWFpbi1hcnRpY2xlJyk7XG4gIGxldCBhcnRpY2xlOkFydGljbGU7XG4gIGxldCBpZDphbnk7XG4gIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgaWQgPSBjb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpZCA9PT0gYXJ0aWNsZXNbaV0uaWQpIHtcbiAgICAgICAgYXJ0aWNsZSA9IGFydGljbGVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZW50LmlubmVySFRNTCArPSBjcmVhdGVTaW5nbGVBcnRpY2xlKGFydGljbGUpO1xuICB9XG5cbiAgY29uc29sZS5sb2coaWQpO1xufVxuXG5mdW5jdGlvbiBpbml0KCk6dm9pZCB7XG4gIGFwcGVuZEFydGljbGVzKCk7XG4gIGFwcGVuZEFydGljbGUoKTtcbn1cblxuaW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
