
$(document).ready(() => {

    $('#even').on('click', () => {

        $('.even-rows').toggleClass('even-highlight')

    })

    $('#odd').on('click', () => {

        $('.odd-rows').toggleClass('odd-highlight')

    })

})