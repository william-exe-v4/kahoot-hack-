  var button = document.createElement("button");
  button.innerHTML = "Next";

  // 2. Append somewhere
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  // 3. Add event handler
  button.addEventListener ("click", function() {
    alert("Alright, redirecting you now");
  });