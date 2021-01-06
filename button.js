const refresh_btn = document.querySelector(".Refresh");

refresh_btn.addEventListener("click", Refresh);

function Refresh() {
  console.log("refreshed");
  location.reload();
}
