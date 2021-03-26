function toggleLightMode()
{
  if (document.querySelectorAll)
  {
    let darkModeElements = document.querySelectorAll(".darkMode");
    darkModeElements.forEach(ele => ele.classList.toggle("lightMode"));
    let darkModeAnchors = document.querySelectorAll(".anchorDarkMode");
    darkModeAnchors.forEach(ele => ele.classList.toggle("anchorLightMode"));
  }
}
