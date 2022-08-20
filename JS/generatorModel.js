let model = {
    // DATA
    currency: {cookies: 0,},

    cookieClick: function(number){
        model.currency.cookies += number;
        
        view();
        //ookies = cookies + number;
    },

}