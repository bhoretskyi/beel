document.getElementById("language").addEventListener("change", function () {
    var language = this.value;
  
    switch (language) {
      case "ru":
        window.location.href = "../ru/index.html";
        break;
      case "sp":
        window.location.href = "../sp/index.html";
        break;
      case "fr":
        window.location.href = "../fr/index.html";
        break;
      case "du":
        window.location.href = "../du/index.html";
        break;
      case "gr":
        window.location.href = "../gr/index.html";
        break;
      case "jp":
        window.location.href = "../jp/index.html";
        break;
      case "kr":
        window.location.href = "../kr/index.html"; //
        break
      case "pt":
        window.location.href = "../pt/index.html";
        break;
      case "sw":
        window.location.href = "../sw/index.html";
        break;
        case "en":
        window.location.href = "../index.html";
        break;
      default:
        window.location.href = "./index.html";
    }
  });