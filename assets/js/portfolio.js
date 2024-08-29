document.addEventListener("DOMContentLoaded", () => {
  console.log("hello portfolio");
  var splides = document.getElementsByClassName("splide");
  const splideContainers = document.getElementsByClassName("splideContainer");
  const rects = Array.from(splideContainers).map((e) =>
    e.getBoundingClientRect(),
  );

  for (var i = 0; i < splides.length; i++) {
    new Splide(splides[i], {
      // type: "loop",
      // cover: true,
      // heightRatio: 1,
      // autoWidth: true,
      type: "fade",
      // updateOnMove: true,
      // width: "600px",
      // perPage: 1,
      // direction: "ttb",
      pagination: false,
      rewind: true,
    }).mount();
    splides[i].addEventListener("mousemove", handleMousemove(splides[i], i));
    splides[i].addEventListener("mouseleave", handleMouseleave(splides[i], i));
  }

  function handleMousemove(element, index) {
    return function (event) {
      const constrainY = 0.05;
      const constrainX = 0.005;

      const rect = rects[index];

      const rotateY =
        (event.clientX - rect.x - rect.width * 0.5) * -1 * constrainY;
      const rotateX = (event.clientY - rect.y - rect.height * 0.5) * constrainX;
      const perspective = 2000;

      const transformation = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      element.style.transform = transformation;
    };
  }

  function handleMouseleave(element, index) {
    return function (event) {
      element.style.transition = `transform .3s ease-out`;
      element.style.removeProperty("transform");
    };
  }
});
