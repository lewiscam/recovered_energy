export const sendPostMessage = () => {
  let height
  if (typeof window !== "undefined") {
    if (height !== document.getElementById("main").offsetHeight) {
      height = document.getElementById("main").offsetHeight
      setTimeout(
        window.parent.postMessage(
          {
            frameHeight: height,
          },
          "*"
        ),
        1000
      )
    }
  }
}
