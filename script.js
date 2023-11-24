// Initialize LIFF
liff.init({
    liffId: '2001803237-GPaWyDag'
}).then(() => {
    // Check if the user is logged in
    if (!liff.isLoggedIn()) {
        // Open an external browser for LINE Login
        liff.openWindow({
            url: 'rt.penagroup.com',
            external: true
        });
    } else {
        // User is already logged in, proceed with your app logic
    }
}).catch((err) => {
    console.error('LIFF initialization failed', err);
});

// Handle the login callback after the user logs in through LINE Login
function handleLoginCallback() {
    // Retrieve the access token and make requests on behalf of the user
    const accessToken = liff.getAccessToken();
    // Your logic here...
}
