$('document').ready(function() {
    $.ajax('get-team-details').success(function(data) {
        console.log('data', data);
    })
})