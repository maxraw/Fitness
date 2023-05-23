export function initVideo() {
  const button = document.querySelector('[data-button-video]');
  const figure = document.querySelector('[data-figure-video]');

  button.addEventListener('click', () => {
    figure.innerHTML = '<iframe width="364" height="228" src="https://www.youtube.com/embed/9TZXsZItgdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  });
}
