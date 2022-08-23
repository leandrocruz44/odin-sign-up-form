function validate() {
    const firstname = document.getElementById('first_name').value
    const lastname = document.getElementById('last_name').value
    const email = document.getElementById('e-mail').value
    const phone = document.getElementById('phone').value
    const pwd = document.getElementById('pwd').value
    const cpwd = document.getElementById('confirmpwd').value

    if ((firstname) == '' || (lastname) == ''|| (email) == ''|| (phone) == '') {
        alert('Please, fill out all fields')
    } else if ((pwd == '') || (pwd != cpwd)) {
        alert("Password didn't match")
    } else {
        alert("Password ok")
    }
}