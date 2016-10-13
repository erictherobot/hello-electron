const {app, BrowserWindow} = require('electron');
const isDev = require('electron-is-dev');

// Check which environment is running. Dev / Prod
if (isDev) {
    console.log('Running in development');
    // Reload the app upon detecting saved changes.
    require('electron-reload')(__dirname);
} else {
    console.log('Running in production');
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow,
    loadingScreen,
    windowParams = {
      width: 800,
      height: 600,
      show: false
    };

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow(windowParams);

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    // mainWindow.setProgressBar(-1); // hack: force icon refresh
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show();

        if (loadingScreen) {
            let loadingScreenBounds = loadingScreen.getBounds();
            mainWindow.setBounds(loadingScreenBounds);
            loadingScreen.close();
        }
    });

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    })
}

function createLoadingScreen() {
    loadingScreen = new BrowserWindow(Object.assign(windowParams, {parent: mainWindow}));
    loadingScreen.loadURL('file://' + __dirname + '/loading.html');
    loadingScreen.on('closed', () => loadingScreen = null);
    loadingScreen.webContents.on('did-finish-load', () => {
        loadingScreen.show();
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    createLoadingScreen();
    setTimeout(function () {
      createWindow();
    }, 3000); // Show loading screen for 3s (this is just a dummy value, change it if it doesnt make sense for your app)
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
