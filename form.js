



function submitData () {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("msg").value

    if( name == ""){
        return alert("Name is required")
    }
    else if(email == ""){
        return alert("Email is Required")
    }
    else if(phone == ""){
        return alert("Phone Number is Required")
    }
    else if(subject == ""){
        return alert("Subject is Required")
    }
    else if(message == ""){
        return alert("Message is Required")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let emailReciever = "mohammad.zulfikar07@gmail.com"
    let a = document.createElement('a')


    a.href = `mailto:${emailReciever}?subject=${subject}&body=Halo! Perkenalkan nama saya ${name}. ${message} silahkan hubungi saya di ${phone} atau ${email} untuk keterangan lebih lanjut. Terimakasih!`
    a.click()

    let Datafill = (
        name, email, phone, subject, message
    )
    console.log(Datafill)
}