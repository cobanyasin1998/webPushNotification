window.addEventListener("load", async () => {
  const subscribeButton = document.getElementById("subscribeButton");

  const sW = await navigator.serviceWorker.register("./sw.js");
  console.log("Service Worker => " + " " + sW);
  subscribeButton.addEventListener("click", async () => {
    const serviceWorker = await navigator.serviceWorker.ready;
    const clientID = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BJLmNQn5bQ3op-iGk1WtNkFfaF8wGdiY5LdZytLT8_9_yRWmuzIIJGwVsyFFLZ9zjCS0bkPXxJNqSa9w1X8Zuno",
    });

    console.log(clientID);
    console.log(JSON.stringify(clientID));
  });
});
