function toggleMode() {
  // ALtera o visual da página entre dark e light mode
  const html = document.documentElement
  html.classList.toggle("light")

  // Altera o imagem de perfil de acordo com dark e light mode
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Filipe Castro Saraiva sorrindo de óculos e boné, usando uniforme escoteiro e barba, com natureza ao fundo",
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Filipe Castro Saraiva sorrindo, usando uniforme escoteiro e barba, com natureza ao fundo",
    )
  }
}
