const serverIP = "contents-shortcuts.gl.joinmc.link";

async function getStatus() {
    const response = await fetch('https://api.mcstatus.io/v2/status/java/' + serverIP);
    const data = await response.json();
    return data;
}

async function updateStatus() {
    const status = await getStatus();
    const statusElement = document.getElementById('status');
    if (!statusElement) return;

    // remove any previous status classes
    statusElement.classList.remove('status-online');
    statusElement.classList.remove('status-offline');

    if (status && status.online) {
        statusElement.textContent = 'Online';
        statusElement.classList.add('status-online');
    } else {
        statusElement.textContent = 'Offline';
        statusElement.classList.add('status-offline');
    }
}

updateStatus();
setInterval(updateStatus, 500);