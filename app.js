/* app.js  —  quiz logic. The content lives in quiz-data.js. */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var start = $("start"), quiz = $("quiz"), end = $("end"), cluesRef = $("cluesRef");

  var order = [], idx = 0, score = 0, answered = false;

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
  }

  function show(sec) {
    [start, quiz, end].forEach(function (s) { s.classList.add("hide"); });
    sec.classList.remove("hide");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateScore() {
    $("scoreChip").innerHTML = "Score <b>" + score + "</b> / " + order.length;
  }

  function beginQuiz() {
    if (!Array.isArray(QUIZ_ITEMS) || QUIZ_ITEMS.length === 0) {
      alert("No images found. Check quiz-data.js.");
      return;
    }
    order = QUIZ_ITEMS.map(function (_, i) { return i; });
    shuffle(order);
    idx = 0; score = 0; answered = false;
    cluesRef.classList.add("hide");
    $("cluesBtn").textContent = "Show common AI clues";
    show(quiz);
    renderQuestion();
    updateScore();
  }

  function renderQuestion() {
    answered = false;
    var it = QUIZ_ITEMS[order[idx]];
    $("qimg").src = it.src;
    $("qcaption").textContent = it.caption || "";
    $("qcount").textContent = "Image " + (idx + 1) + " of " + order.length;
    $("bar").style.width = (idx / order.length * 100) + "%";
    $("reveal").className = "reveal hide";
    var choices = $("choices");
    choices.style.pointerEvents = "auto";
    choices.style.opacity = "1";
  }

  function answer(guessAI) {
    if (answered) return;
    answered = true;
    var it = QUIZ_ITEMS[order[idx]];
    var correct = (guessAI === it.isAI);
    if (correct) score++;
    updateScore();

    var rv = $("reveal");
    rv.className = "reveal " + (correct ? "ok" : "no");
    $("revealTitle").textContent = correct ? "\u2713 Correct!" : "\u2717 Not this time";
    $("revealVerdict").textContent = "This image is " + (it.isAI ? "AI-generated \uD83E\uDD16" : "a real photo \uD83D\uDCF7") + ".";

    var box = $("tellsBox");
    box.innerHTML = "";
    if (it.tells && it.tells.length) {
      var heading = document.createElement("p");
      heading.style.fontWeight = "700";
      heading.style.margin = "4px 0";
      heading.textContent = it.isAI ? "The give-aways:" : "Why it is genuine:";
      box.appendChild(heading);
      var ul = document.createElement("ul");
      ul.className = "tells";
      it.tells.forEach(function (t) {
        var li = document.createElement("li");
        li.textContent = t;
        ul.appendChild(li);
      });
      box.appendChild(ul);
    }

    var choices = $("choices");
    choices.style.pointerEvents = "none";
    choices.style.opacity = ".55";
    $("bar").style.width = ((idx + 1) / order.length * 100) + "%";
  }

  function next() {
    idx++;
    if (idx >= order.length) finish();
    else renderQuestion();
  }

  function finish() {
    show(end);
    var pct = Math.round(score / order.length * 100);
    $("finalScore").textContent = score + " / " + order.length;
    var msg;
    if (pct >= 80) msg = "Sharp eyes! You are hard to fool.";
    else if (pct >= 50) msg = "Good effort, and now you know the clues to watch for.";
    else msg = "These fakes are tricky on purpose. The clues below will help.";
    $("finalMsg").textContent = msg;
  }

  // Wire up
  $("startBtn").onclick = beginQuiz;
  $("againBtn").onclick = beginQuiz;
  $("nextBtn").onclick = next;

  Array.prototype.forEach.call(document.querySelectorAll(".choice"), function (btn) {
    btn.onclick = function () { answer(btn.getAttribute("data-val") === "ai"); };
  });

  $("cluesBtn").onclick = function () {
    cluesRef.classList.toggle("hide");
    this.textContent = cluesRef.classList.contains("hide") ? "Show common AI clues" : "Hide common AI clues";
    if (!cluesRef.classList.contains("hide")) {
      cluesRef.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
})();
