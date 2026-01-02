window.onload = (event) => {
  cleanCode();
};

function generateCode() {
  url = document.getElementById("codewebsite").innerText;
  document.getElementById(
    "codetocopy"
  ).innerHTML = `<link rel="stylesheet" href="${url}smpl.css" />`;
  cleanCode();
}
function cleanCode() {
  const code = document.querySelectorAll("code");

  code.forEach((element) => {
    element.innerHTML = element.innerHTML.replaceAll(`&`, `&amp;`);
    element.innerHTML = element.innerHTML.replaceAll(`<`, `&lt;`);
    element.innerHTML = element.innerHTML.replaceAll(`>`, `&gt;`);
    element.innerHTML = element.innerHTML.replaceAll(`"`, `&quot;`);
    element.innerHTML = element.innerHTML.replaceAll(`'`, `&apos;`);
    element.innerHTML = element.innerHTML.replace(/\n/g, "<br>");

    element.innerHTML = element.innerHTML.replace("<br>", "");

    element.innerHTML = element.innerHTML.slice(
      0,
      element.innerHTML.lastIndexOf("<br>")
    );
  });
}
