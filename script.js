// Constantes de configuração
const LIGHT_CLASS = "light"
const PROFILE_IMG_SELECTOR = "#profile img"
const AVATAR_LIGHT = "./assets/avatar-light.png"
const AVATAR = "./assets/avatar.png"
const ALT_LIGHT =
  "Foto de Filipe Castro Saraiva sorrindo de óculos e boné, usando uniforme escoteiro e barba, com natureza ao fundo"
const ALT =
  "Foto de Filipe Castro Saraiva sorrindo, usando uniforme escoteiro e barba, com natureza ao fundo"
const PREF_QUERY = "(prefers-color-scheme: light)"

// Elementos e media query
const html = document.documentElement
const mq = window.matchMedia(PREF_QUERY)

// ALtera o visual da página entre dark e light mode
function toggleMode() {
  html.classList.toggle(LIGHT_CLASS)

  const img = document.querySelector(PROFILE_IMG_SELECTOR)

  if (html.classList.contains(LIGHT_CLASS)) {
    img.setAttribute("src", AVATAR_LIGHT)
    img.setAttribute("alt", ALT_LIGHT)
  } else {
    img.setAttribute("src", AVATAR)
    img.setAttribute("alt", ALT)
  }
}

// Define o visual da página entre dark e light mode de acordo com a preferência do dispositivo
function applySystemPreferences() {
  const img = document.querySelector(PROFILE_IMG_SELECTOR)
  const prefersLight = mq.matches

  if (prefersLight) {
    html.classList.add(LIGHT_CLASS)
    img.setAttribute("src", AVATAR_LIGHT)
    img.setAttribute("alt", ALT_LIGHT)
  } else {
    html.classList.remove(LIGHT_CLASS)
    img.setAttribute("src", AVATAR)
    img.setAttribute("alt", ALT)
  }
}

// Confere light/dark mode no carregamento da página
document.addEventListener("DOMContentLoaded", applySystemPreferences)

// Observa mudanças na preferência do sistema
if (typeof mq.addEventListener === "function") {
  mq.addEventListener("change", applySystemPreferences)
} else if (typeof mq.addListener === "function") {
  mq.addListener(applySystemPreferences)
}
