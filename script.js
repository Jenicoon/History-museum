document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleButton').addEventListener('click', function() {
        var content = document.getElementById('toggleContent');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

document.getElementById("toggleButton").addEventListener("click", function () {
    let password = prompt("암호를 입력하세요:");
    let correctPassword = "539";  // 설정할 암호

    if (password === correctPassword) {
        let content = document.getElementById("toggleContent");
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    } else {
        alert("암호가 틀렸습니다!");
    }
});

// 기본적으로 내용 숨기기
document.getElementById("toggleContent").style.display = "none";
