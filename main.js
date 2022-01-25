"use strict";
dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, hourString) {
  const targetHours = dayjs(hourString);
  element.querySelector(
    ".until__event"
  ).textContent = `Until Daily Artifact Reset`;
  setInterval(() => {
    const now = dayjs();
    const duration = dayjs.duration(targetHours.diff(now));

    if (duration.asMilliseconds() <= 0) return;

    element.querySelector(".until__numeric--seconds").textContent = duration
      .seconds()
      .toString()
      .padStart(2, "0");
    element.querySelector(".until__numeric--minutes").textContent = duration
      .minutes()
      .toString()
      .padStart(2, "0");
    element.querySelector(".until__numeric--hours").textContent = duration
      .hours()
      .toString()
      .padStart(2, "0");
  }, 250);
}

activateCountdown(
  document.getElementById("myCountdown"),
  "2022-01-26 19:30:00"
);
