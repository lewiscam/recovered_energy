export const sendPostMessage = () => {
  let height
  if (typeof window !== "undefined") {
    if (height !== document.getElementById("main").offsetHeight) {
      height = document.getElementById("main").offsetHeight
      window.parent.postMessage(
        {
          frameHeight: height,
        },
        "*"
      )
      console.log(height) // check the message is being sent correctly
    }
  }
}
