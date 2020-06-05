var vue = new Vue({
    el: '#vue',
    data: {
        message: 'Режим инкубации',
        context: 'Заголовок элемента',
        textSearch: '',
        dateSearch: '',
        },
    watch: {
     
          
        },
    });

var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

var table = new Vue({
    el: '#table',
    data: {

    }
});