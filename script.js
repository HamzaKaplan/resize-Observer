/*const textareas = document.querySelectorAll('textarea')

const resizeObserver = new ResizeObserver(entries => {
   
    for (let entry of entries) {
        const size = entry.contentRect.height / 3 - 1
        entry.target.style.fontSize = size + 'px'
        entry.target.style.lineHeight = size + 'px'
    }
   
})

textareas.forEach(textarea => resizeObserver.observe(textarea))

*/

const resizeObserver = new ResizeObserver(([entry]) => {
  const visibles = Math.floor(entry.contentRect.width / 200);

  console.log(entry.contentRect.width / 200);
  entry.target.querySelectorAll(".box").forEach((box, index) => {
    if (index + 1 <= visibles) {
      box.style.display = "flex";
    } else {
      box.style.display = "none";
    }
  });
});

resizeObserver.observe(document.querySelector(".boxes"));
