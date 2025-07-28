import { contextBridge, ipcRenderer } from 'electron';

// Expose APIs to the renderer process
contextBridge.exposeInMainWorld('api', {
    // Example API method
    sendMessage: (channel: string, data: any) => {
        ipcRenderer.send(channel, data);
    },
    receiveMessage: (channel: string, func: (data: any) => void) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
});