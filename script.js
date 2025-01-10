function setLanguage(language) {
    // Redirect to language-specific pages
    switch (language) {
        case 'hr':
            window.location.href = 'hr/index.html';
            break;
        case 'en':
            window.location.href = 'en/index.html';
            break;
        case 'de':
            window.location.href = 'de/index.html';
            break;
        default:
            console.error('Unknown language selected');
    }
}
