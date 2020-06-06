var vue = new Vue({
    el: '#vue',
    data: {
        message: 'Режим инкубации',
        context: 'Заголовок элемента',
        textSearch: '',
        dateSearch: '',
        content: 'Здесь будет описание',
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

var description = new Vue({
    el: '#description',
    data: {
        
    }
});