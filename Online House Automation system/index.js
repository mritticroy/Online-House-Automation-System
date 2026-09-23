```javascript
let devices = {
    light: false,
    fan: false,
    ac: false,
    bedroom: false,
    door: false,
    tv: false
};

function toggleDevice(device) {

    devices[device] = !devices[device];

    if (device === "light") {
        document.getElementById("lightStatus").innerText =
            devices.light ? "ON" : "OFF";
    }

    if (device === "fan") {
        document.getElementById("fanStatus").innerText =
            devices.fan ? "ON" : "OFF";
    }

    if (device === "ac") {
        document.getElementById("acStatus").innerText =
            devices.ac ? "ON" : "OFF";
    }

    if (device === "bedroom") {
        document.getElementById("bedroomStatus").innerText =
            devices.bedroom ? "ON" : "OFF";
    }

    if (device === "tv") {
        document.getElementById("tvStatus").innerText =
            devices.tv ? "ON" : "OFF";
    }

    if (device === "door") {
        document.getElementById("doorStatus").innerText =
            devices.door ? "UNLOCKED" : "LOCKED";
    }
}
```
