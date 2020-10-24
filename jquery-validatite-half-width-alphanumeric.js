$.validator.addMethod("half_width_alphanumeric", function(value) {
    return value.match(/^[A-Za-z0-9]*$/);
}, '半角英数字で入力をお願いします。');
