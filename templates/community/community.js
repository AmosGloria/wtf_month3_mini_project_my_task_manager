document.addEventListener('DOMContentLoaded', function () {
    const communityBtn = document.getElementById('community');
    if (communityBtn) {
        communityBtn.addEventListener('click', () => {
            window.location.href = "/templates/community/community.html";
        });
    }
});

