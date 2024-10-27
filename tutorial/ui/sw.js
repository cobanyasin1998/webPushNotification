self.addEventListener("push", (event) => {
  const options = {
    body: "This is a push",
    icon: "./images/icon-192x192.png",
    badge: "./images/icon-192x192.png",
  };
  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});
